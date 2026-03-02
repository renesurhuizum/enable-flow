import React from 'react';

export const FlowBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Flow path 1 — gentle curve top */}
      <path
        d="M-50,120 C100,60 250,180 400,100 C550,20 700,140 850,80"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.18"
        className="animate-dashflow"
      />

      {/* Flow path 2 — lower curve */}
      <path
        d="M-50,240 C80,200 200,280 350,220 C500,160 650,260 850,200"
        fill="none"
        stroke="#6366f1"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.12"
        className="animate-dashflow-slow"
      />

      {/* Flow path 3 — subtle diagonal */}
      <path
        d="M0,340 C150,290 300,370 450,310 C600,250 750,330 900,280"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.10"
        className="animate-dashflow-delay"
      />

      {/* Node dots along path 1 */}
      <circle cx="200" cy="90" r="3" fill="#14b8a6" opacity="0.25" />
      <circle cx="420" cy="95" r="2.5" fill="#14b8a6" opacity="0.20" />
      <circle cx="640" cy="110" r="3" fill="#14b8a6" opacity="0.22" />

      {/* Node dots along path 2 */}
      <circle cx="160" cy="215" r="2.5" fill="#6366f1" opacity="0.18" />
      <circle cx="380" cy="205" r="2" fill="#6366f1" opacity="0.15" />
      <circle cx="600" cy="225" r="2.5" fill="#6366f1" opacity="0.18" />
    </svg>
  );
};
