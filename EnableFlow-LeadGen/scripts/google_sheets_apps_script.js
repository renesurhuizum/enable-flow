/**
 * EnableFlow - Email Review Interface
 * Google Apps Script for EnableFlow_Email_ReviewQueue sheet
 *
 * Setup Instructions:
 * 1. Open your Google Sheet
 * 2. Extensions → Apps Script
 * 3. Paste this code
 * 4. Update N8N_WEBHOOK_URL with your n8n webhook URL
 * 5. Save and authorize the script
 * 6. Reload the sheet - you'll see "EnableFlow" menu
 */

// Configuration
const N8N_WEBHOOK_URL = 'https://YOUR_N8N_INSTANCE/webhook/send-email';

/**
 * Creates custom menu when spreadsheet opens
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('EnableFlow')
    .addItem('✅ Approve Selected Email', 'approveSelectedEmail')
    .addItem('❌ Reject Selected Email', 'rejectSelectedEmail')
    .addSeparator()
    .addItem('📧 Approve & Send Batch (5 emails)', 'approveBatch')
    .addSeparator()
    .addItem('🔄 Refresh Status', 'refreshStatus')
    .addItem('📊 Show Stats', 'showStats')
    .addToUi();
}

/**
 * Approve and send the selected email
 */
function approveSelectedEmail() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const ui = SpreadsheetApp.getUi();

  // Check if we're on the right sheet
  if (sheet.getName() !== 'EnableFlow_Email_ReviewQueue') {
    ui.alert('Error', 'Please select a row in the EnableFlow_Email_ReviewQueue sheet', ui.ButtonSet.OK);
    return;
  }

  const activeRow = sheet.getActiveCell().getRow();

  if (activeRow <= 1) {
    ui.alert('Error', 'Please select an email row (not the header)', ui.ButtonSet.OK);
    return;
  }

  // Get email data from selected row
  const range = sheet.getRange(activeRow, 1, 1, sheet.getLastColumn());
  const values = range.getValues()[0];

  // Map column values (adjust indices if your columns are different)
  const emailData = {
    lead_id: values[0],
    bedrijfsnaam: values[1],
    email_to: values[2],
    subject: values[3],
    body_plain: values[4],
    body_html: values[5],
    status: values[6]
  };

  // Check if already sent
  if (emailData.status === 'Sent') {
    ui.alert('Already Sent', 'This email has already been sent.', ui.ButtonSet.OK);
    return;
  }

  // Confirm with user
  const response = ui.alert(
    'Confirm Send',
    `Send email to ${emailData.bedrijfsnaam}?\n\nSubject: ${emailData.subject}\n\nThis action cannot be undone.`,
    ui.ButtonSet.YES_NO
  );

  if (response !== ui.Button.YES) {
    return;
  }

  // Send to n8n webhook
  try {
    const payload = {
      lead_id: emailData.lead_id,
      action: 'approve'
    };

    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const result = UrlFetchApp.fetch(N8N_WEBHOOK_URL, options);
    const responseCode = result.getResponseCode();

    if (responseCode === 200 || responseCode === 201) {
      // Update status in sheet
      sheet.getRange(activeRow, 7).setValue('Sent'); // Column 7 = Status
      sheet.getRange(activeRow, 8).setValue(new Date()); // Column 8 = Sent Date

      ui.alert('Success', `Email sent to ${emailData.bedrijfsnaam}!`, ui.ButtonSet.OK);
    } else {
      ui.alert('Error', `Failed to send email. Status: ${responseCode}`, ui.ButtonSet.OK);
    }
  } catch (error) {
    ui.alert('Error', `Failed to send email: ${error.message}`, ui.ButtonSet.OK);
    Logger.log('Error sending email: ' + error.message);
  }
}

/**
 * Reject the selected email
 */
function rejectSelectedEmail() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const ui = SpreadsheetApp.getUi();

  if (sheet.getName() !== 'EnableFlow_Email_ReviewQueue') {
    ui.alert('Error', 'Please select a row in the EnableFlow_Email_ReviewQueue sheet', ui.ButtonSet.OK);
    return;
  }

  const activeRow = sheet.getActiveCell().getRow();

  if (activeRow <= 1) {
    ui.alert('Error', 'Please select an email row (not the header)', ui.ButtonSet.OK);
    return;
  }

  // Confirm rejection
  const response = ui.alert(
    'Confirm Rejection',
    'Are you sure you want to reject this email?',
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    sheet.getRange(activeRow, 7).setValue('Rejected');
    sheet.getRange(activeRow, 8).setValue(new Date());
    ui.alert('Rejected', 'Email marked as rejected.', ui.ButtonSet.OK);
  }
}

/**
 * Approve and send next 5 pending emails (batch mode)
 */
function approveBatch() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const ui = SpreadsheetApp.getUi();

  if (sheet.getName() !== 'EnableFlow_Email_ReviewQueue') {
    ui.alert('Error', 'Please switch to the EnableFlow_Email_ReviewQueue sheet', ui.ButtonSet.OK);
    return;
  }

  // Find pending emails
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  const pendingRows = [];
  for (let i = 1; i < values.length; i++) { // Start at 1 to skip header
    if (values[i][6] === 'Pending Review') { // Column 7 = Status
      pendingRows.push(i + 1); // +1 because row numbers start at 1
      if (pendingRows.length >= 5) break;
    }
  }

  if (pendingRows.length === 0) {
    ui.alert('No Pending Emails', 'No pending emails found to send.', ui.ButtonSet.OK);
    return;
  }

  // Confirm batch send
  const response = ui.alert(
    'Confirm Batch Send',
    `Send ${pendingRows.length} emails?\n\nThis action cannot be undone.`,
    ui.ButtonSet.YES_NO
  );

  if (response !== ui.Button.YES) {
    return;
  }

  // Send each email
  let successCount = 0;
  let failCount = 0;

  pendingRows.forEach(rowNumber => {
    const rowData = sheet.getRange(rowNumber, 1, 1, sheet.getLastColumn()).getValues()[0];

    try {
      const payload = {
        lead_id: rowData[0],
        action: 'approve'
      };

      const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(payload),
        muteHttpExceptions: true
      };

      const result = UrlFetchApp.fetch(N8N_WEBHOOK_URL, options);

      if (result.getResponseCode() === 200 || result.getResponseCode() === 201) {
        sheet.getRange(rowNumber, 7).setValue('Sent');
        sheet.getRange(rowNumber, 8).setValue(new Date());
        successCount++;
      } else {
        failCount++;
      }

      // Add delay between sends to avoid rate limiting
      Utilities.sleep(2000); // 2 second delay

    } catch (error) {
      Logger.log(`Error sending email for row ${rowNumber}: ${error.message}`);
      failCount++;
    }
  });

  ui.alert('Batch Complete', `Sent: ${successCount}\nFailed: ${failCount}`, ui.ButtonSet.OK);
}

/**
 * Refresh status colors and conditional formatting
 */
function refreshStatus() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const ui = SpreadsheetApp.getUi();

  if (sheet.getName() !== 'EnableFlow_Email_ReviewQueue') {
    ui.alert('Error', 'Please switch to the EnableFlow_Email_ReviewQueue sheet', ui.ButtonSet.OK);
    return;
  }

  // Apply conditional formatting
  const statusColumn = 7; // Column G = Status
  const dataRange = sheet.getRange(2, statusColumn, sheet.getLastRow() - 1, 1);

  // Clear existing conditional formatting
  dataRange.clearFormat();

  // Apply new formatting
  const values = dataRange.getValues();
  values.forEach((row, index) => {
    const cell = sheet.getRange(index + 2, statusColumn);

    switch (row[0]) {
      case 'Pending Review':
        cell.setBackground('#FEF3C7').setFontColor('#92400E'); // Yellow
        break;
      case 'Sent':
        cell.setBackground('#D1FAE5').setFontColor('#065F46'); // Green
        break;
      case 'Rejected':
        cell.setBackground('#FEE2E2').setFontColor('#991B1B'); // Red
        break;
      case 'Failed':
        cell.setBackground('#FECACA').setFontColor('#7F1D1D'); // Dark Red
        break;
    }
  });

  ui.alert('Refreshed', 'Status colors updated!', ui.ButtonSet.OK);
}

/**
 * Show email statistics
 */
function showStats() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('EnableFlow_Email_ReviewQueue');
  const ui = SpreadsheetApp.getUi();

  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  let pending = 0;
  let sent = 0;
  let rejected = 0;
  let failed = 0;

  for (let i = 1; i < values.length; i++) {
    const status = values[i][6];
    switch (status) {
      case 'Pending Review': pending++; break;
      case 'Sent': sent++; break;
      case 'Rejected': rejected++; break;
      case 'Failed': failed++; break;
    }
  }

  const total = pending + sent + rejected + failed;

  const statsMessage = `
📊 Email Stats:

Total Emails: ${total}

✉️ Pending Review: ${pending}
✅ Sent: ${sent}
❌ Rejected: ${rejected}
⚠️ Failed: ${failed}

Conversion Rate: ${total > 0 ? Math.round((sent / total) * 100) : 0}%
  `;

  ui.alert('Email Statistics', statsMessage, ui.ButtonSet.OK);
}

/**
 * Create formatted email preview in a sidebar
 */
function showEmailPreview() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const activeRow = sheet.getActiveCell().getRow();

  if (activeRow <= 1) {
    SpreadsheetApp.getUi().alert('Please select an email row');
    return;
  }

  const rowData = sheet.getRange(activeRow, 1, 1, sheet.getLastColumn()).getValues()[0];

  const htmlPreview = `
    <!DOCTYPE html>
    <html>
    <head>
      <base target="_top">
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .preview { border: 1px solid #ddd; border-radius: 8px; padding: 20px; }
        .meta { background: #f8f9fa; padding: 15px; border-radius: 4px; margin-bottom: 20px; }
        .subject { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
        .content { line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="preview">
        <div class="meta">
          <strong>To:</strong> ${rowData[2]}<br>
          <strong>Company:</strong> ${rowData[1]}<br>
          <strong>Status:</strong> ${rowData[6]}
        </div>
        <div class="subject">${rowData[3]}</div>
        <div class="content">${rowData[5]}</div>
      </div>
    </body>
    </html>
  `;

  const htmlOutput = HtmlService.createHtmlOutput(htmlPreview)
    .setTitle('Email Preview')
    .setWidth(600);

  SpreadsheetApp.getUi().showSidebar(htmlOutput);
}
