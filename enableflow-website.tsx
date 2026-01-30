import React, { useState, useEffect, useRef } from 'react';

// Global styles for high-tech effects
const globalStyles = `
  @keyframes holographic {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes neon-pulse {
    0%, 100% { box-shadow: 0 0 10px #00d4aa, 0 0 20px #00d4aa; }
    50% { box-shadow: 0 0 15px #00d4aa, 0 0 30px #00d4aa; }
  }

  @keyframes gradient-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes float-up {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .glassmorphism {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .glassmorphism-strong {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .holographic-bg {
    background: linear-gradient(
      45deg,
      #00d4aa,
      #00fff9,
      #3b82f6,
      #9333ea,
      #ec4899,
      #00d4aa
    );
    background-size: 300% 300%;
    animation: holographic 10s ease infinite;
  }

  .gradient-text {
    background: linear-gradient(135deg, #00d4aa, #00fff9, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .neon-glow {
    animation: neon-pulse 2s ease-in-out infinite;
  }

  .card-3d {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
  }

  .card-3d:hover {
    transform: perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.02);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = globalStyles;
  document.head.appendChild(styleSheet);
}

// Icons
const CheckIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const ArrowRight = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;
const MenuIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const XIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const BrainIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const CogIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const UsersIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MapPinIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MailIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const ChatIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const SparkleIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>;

const colors = {
  navy: '#1a2b4a',
  teal: '#00d4aa',
  white: '#f8f9fa',
  gray: '#6b7280',
  lightGray: '#f3f4f6',
  neonCyan: '#00fff9',
  electricPurple: '#9333ea',
  glowBlue: '#3b82f6',
  holoPink: '#ec4899'
};

// Floating orbs - optimized for performance
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-12 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${colors.teal}50 0%, transparent 70%)`,
          animationDuration: '4s',
          filter: 'blur(25px)'
        }} />
      <div className="absolute top-40 right-20 w-56 h-56 rounded-full opacity-12 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${colors.electricPurple}40 0%, transparent 70%)`,
          animationDuration: '6s',
          animationDelay: '1s',
          filter: 'blur(25px)'
        }} />
    </div>
  );
}

// Animated grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 hidden md:block">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(${colors.teal}20 1px, transparent 1px),
          linear-gradient(90deg, ${colors.teal}20 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
}


// Animated particles - simplified
function Particles() {
  const particles = Array.from({length: 15}, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 3,
    size: 2 + Math.random() * 4
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full animate-bounce"
          style={{
            left: `${p.left}%`,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            backgroundColor: colors.teal,
            opacity: 0.25,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
}

// Enhanced Animated AI visualization with 3D depth and glow effects
function AIVisualization() {
  const [activeNode, setActiveNode] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const nodeInterval = setInterval(() => {
      setActiveNode(n => (n + 1) % 6);
    }, 800);

    const rotateInterval = setInterval(() => {
      setRotation(r => (r + 0.5) % 360);
    }, 50);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  const nodes = [
    {x: 250, y: 180}, {x: 350, y: 160}, {x: 400, y: 280},
    {x: 350, y: 400}, {x: 250, y: 420}, {x: 200, y: 300}
  ];

  return (
    <svg viewBox="0 0 600 600" className="w-full h-full">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="nodeGrad">
          <stop offset="0%" stopColor={colors.neonCyan} />
          <stop offset="100%" stopColor={colors.teal} />
        </radialGradient>
      </defs>

      {/* Connection lines */}
      {nodes.map((node, i) => (
        nodes.slice(i + 1).map((target, j) => (
          <line
            key={`${i}-${j}`}
            x1={node.x} y1={node.y}
            x2={target.x} y2={target.y}
            stroke={colors.teal}
            strokeWidth="2"
            opacity="0.2"
          />
        ))
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x} cy={node.y} r={i === activeNode ? "14" : "10"}
            fill={i === activeNode ? "url(#nodeGrad)" : colors.navy}
            filter="url(#glow)"
            className="transition-all duration-300"
          />
          <circle
            cx={node.x} cy={node.y} r="4"
            fill={i === activeNode ? colors.neonCyan : "white"}
            opacity={i === activeNode ? "1" : "0.6"}
          />
        </g>
      ))}

      {/* Center brain icon */}
      <g transform="translate(275, 275)">
        <circle cx="25" cy="25" r="30" fill={colors.navy} opacity="0.95" />
        <path
          d="M25 10 L25 15 M35 15 L32 18 M40 25 L35 25 M15 15 L18 18 M10 25 L15 25 M18 32 L15 35 M32 32 L35 35 M20 20 Q25 15 30 20 Q35 25 30 30 Q25 35 20 30 Q15 25 20 20"
          stroke={colors.teal}
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
}

// Navigation
function Nav({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'diensten', label: 'Diensten' },
    { id: 'ai-scan', label: 'Gratis AI Scan', highlight: true },
    { id: 'over', label: 'Over ons' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glassmorphism-strong shadow-lg' : 'bg-transparent'}`} style={scrolled ? {boxShadow: `0 4px 30px ${colors.teal}10`} : {}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => setCurrentPage('home')}>
            <span className="text-xl font-semibold transition-colors" style={{color: colors.navy}}>Enable</span>
            <span className="text-xl font-bold transition-colors" style={{color: colors.teal}}>Flow</span>
            <span className="text-xl font-light text-gray-400 ml-1">AI</span>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{color: colors.teal}}><SparkleIcon /></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  item.highlight
                    ? 'px-4 py-2 rounded-full text-white hover:opacity-90 neon-glow'
                    : currentPage === item.id
                      ? 'text-teal-500'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
                style={item.highlight ? {
                  backgroundColor: colors.teal,
                  boxShadow: `0 0 15px ${colors.teal}50`
                } : {}}
              >
                {item.label}
                {/* Holographic underline for active item */}
                {!item.highlight && currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${colors.teal}, ${colors.neonCyan})`,
                      boxShadow: `0 0 10px ${colors.teal}60`
                    }}></span>
                )}
              </button>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white rounded-b-xl">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setMobileOpen(false); }}
                className="block w-full text-left py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero({ setCurrentPage }) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Supercharge the way you work';
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      <FloatingOrbs />
      <GridBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            {/* Glassmorphism card wrapper */}
            <div className="absolute inset-0 glassmorphism rounded-3xl -z-10 opacity-60" style={{
              boxShadow: `0 8px 32px ${colors.teal}15`
            }}></div>

            <div className="relative p-6 sm:p-8 lg:p-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border"
              style={{backgroundColor: `${colors.teal}10`, borderColor: `${colors.teal}30`, color: colors.teal}}>
              <span className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: colors.teal}}></span>
              AI Consultancy voor Noord-Nederland
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text" style={{
                background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 50%, ${colors.neonCyan} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'holographic 5s ease infinite'
              }}>
                {typedText}
              </span>
              <span className="animate-pulse" style={{color: colors.teal}}>|</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              AI hoeft niet ingewikkeld te zijn. Wij helpen bedrijven in Noord-Nederland om slimmer te werken met 
              <span className="font-semibold text-gray-800"> Microsoft Copilot</span>, 
              <span className="font-semibold text-gray-800"> Claude</span> en 
              <span className="font-semibold text-gray-800"> Gemini</span>. 
              Praktisch, hands-on, en zonder gedoe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('ai-scan')}
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium transition-all hover:scale-105 neon-glow"
                style={{
                  backgroundColor: colors.teal,
                  boxShadow: `0 0 20px ${colors.teal}60`
                }}
              >
                <span>Start gratis AI Scan</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="group inline-flex items-center justify-center px-6 py-3 rounded-full font-medium border-2 transition-all hover:scale-105 glassmorphism"
                style={{borderColor: colors.teal, color: colors.navy}}
              >
                <span>Plan een gesprek</span>
              </button>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-gray-200">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-3 border-white flex items-center justify-center text-sm font-medium text-white shadow-md transform hover:scale-110 hover:z-10 transition-transform" 
                    style={{backgroundColor: i % 2 === 0 ? colors.navy : colors.teal}}>
                    {['JB', 'MK', 'PV', 'LS'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Bedrijven in de regio</span> werken al slimmer met AI
              </div>
            </div>
            </div>
          </div>

          {/* AI Visualization */}
          <div className="hidden lg:block relative">
            <div className="max-w-md mx-auto aspect-square rounded-3xl p-8 relative overflow-hidden card-3d glassmorphism"
              style={{
                background: `linear-gradient(135deg, ${colors.navy}08 0%, ${colors.teal}12 50%, ${colors.electricPurple}08 100%)`,
                boxShadow: `0 8px 32px ${colors.teal}20`,
                border: `1px solid ${colors.teal}20`
              }}>
              <AIVisualization />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Animated counter
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
}

// Services Section
function Services({ setCurrentPage }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const services = [
    {
      icon: <BrainIcon />,
      title: 'AI Consultancy',
      description: 'Helder advies over AI-mogelijkheden voor jouw bedrijf. Geen hype, wel concrete kansen.',
      features: ['AI Readiness Scan', 'Strategie workshops', 'Business case ontwikkeling'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <CogIcon />,
      title: 'AI Implementatie',
      description: 'Van plan naar werkende oplossing. Wij implementeren en integreren AI in je werkprocessen.',
      features: ['Microsoft Copilot 365', 'Procesautomatisering', 'Custom AI-oplossingen'],
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: <UsersIcon />,
      title: 'AI Training',
      description: 'Maak je team zelfstandig in het gebruik van AI. Praktische trainingen, direct toepasbaar.',
      features: ['Prompt engineering', 'Copilot voor teams', 'AI voor management'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: colors.lightGray}}>
      <Particles />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 glassmorphism" style={{
            backgroundColor: `${colors.teal}20`,
            color: colors.teal,
            boxShadow: `0 0 20px ${colors.teal}20`,
            border: `1px solid ${colors.teal}30`
          }}>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: colors.neonCyan}}></span>
              Onze expertise
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text" style={{
            background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal}, ${colors.electricPurple})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Wat we voor je kunnen doen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Van eerste oriëntatie tot volledige implementatie. Wij begeleiden je bij elke stap.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, i) => {
            const gradientColors = [
              [colors.teal, colors.neonCyan],
              [colors.electricPurple, colors.glowBlue],
              [colors.holoPink, colors.teal]
            ][i];

            return (
            <div
              key={i}
              className="group bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer card-3d"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setCurrentPage('diensten')}
              style={{
                boxShadow: hoveredCard === i
                  ? `0 10px 30px ${gradientColors[0]}30`
                  : '0 2px 10px rgba(0,0,0,0.1)'
              }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${hoveredCard === i ? 'scale-110' : ''}`}
                style={{
                  background: hoveredCard === i
                    ? `linear-gradient(135deg, ${gradientColors[0]}30, ${gradientColors[1]}20)`
                    : `${colors.teal}15`,
                  color: hoveredCard === i ? gradientColors[0] : colors.teal,
                  boxShadow: hoveredCard === i ? `0 0 20px ${gradientColors[0]}40` : 'none'
                }}>
                <div className="transform group-hover:rotate-12 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 transition-all duration-300" style={{
                color: hoveredCard === i ? gradientColors[0] : colors.navy
              }}>
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-gray-600">
                    <span className="mr-2 transition-transform group-hover:scale-110" style={{color: colors.teal}}><CheckIcon /></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform relative z-10" style={{
                color: hoveredCard === i ? gradientColors[0] : colors.teal
              }}>
                Meer info <span className="ml-1"><ArrowRight /></span>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function Stats() {
  return (
    <section className="py-12 px-4 relative overflow-hidden" style={{backgroundColor: colors.navy}}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { value: 40, suffix: 'km', label: 'Serviceregio', color: colors.teal },
            { value: 100, suffix: '%', label: 'Persoonlijk', color: colors.neonCyan },
            { value: 24, suffix: 'u', label: 'Reactietijd', color: colors.electricPurple },
            { value: 3, suffix: '', label: 'AI Platforms', color: colors.holoPink }
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="text-3xl sm:text-4xl font-bold mb-1 transition-all duration-300" style={{color: stat.color}}>
                <Counter end={stat.value} suffix={stat.suffix} duration={2000 + i * 200} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Scroll-triggered animation wrapper
function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Why EnableFlow Section
function WhyUs() {
  const reasons = [
    { icon: '📍', title: 'Lokaal & persoonlijk', desc: 'Geen Randstad-bureau, maar een partner uit de regio die langskomt.' },
    { icon: '🔧', title: 'Hands-on aanpak', desc: 'Niet alleen advies, maar ook de handen uit de mouwen bij implementatie.' },
    { icon: '💡', title: 'Geen AI-hype', desc: 'Eerlijk over wat AI wel en niet kan. Nuchter, concreet, resultaatgericht.' },
    { icon: '💰', title: 'Betaalbaar voor MKB', desc: 'Flexibele tarieven en pakketten die passen bij kleinere bedrijven.' }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <FloatingOrbs />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 glassmorphism" style={{
              backgroundColor: `${colors.teal}20`,
              color: colors.teal,
              boxShadow: `0 0 20px ${colors.teal}20`,
              border: `1px solid ${colors.teal}30`
            }}>
              Waarom wij
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 gradient-text" style={{
              background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal}, ${colors.neonCyan})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Waarom bedrijven kiezen voor EnableFlow AI
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              AI-implementatie hoeft geen groot, duur project te zijn. Wij geloven in kleine stappen met direct resultaat.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="flex items-start p-5 rounded-xl transition-all duration-300 group relative overflow-hidden glassmorphism cursor-pointer"
                    style={{
                      border: `1px solid ${colors.teal}10`,
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }}>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${colors.teal}10 0%, transparent 70%)`
                      }}></div>

                    <div className="text-3xl mr-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10">{reason.icon}</div>
                    <div className="relative z-10">
                      <h4 className="font-semibold mb-1 transition-colors duration-300" style={{
                        color: colors.navy
                      }}>
                        <span className="group-hover:gradient-text" style={{
                          background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal})`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text'
                        }}>
                          {reason.title}
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl p-8 flex items-center justify-center relative overflow-hidden"
              style={{background: `linear-gradient(135deg, ${colors.navy}05 0%, ${colors.teal}10 100%)`}}>
              
              {/* Animated map visualization */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold mb-2 animate-pulse" style={{color: colors.teal}}>40km</div>
                    <p className="text-gray-600 font-medium">Persoonlijke service</p>
                  </div>
                </div>
                
                {/* Orbiting cities */}
                {['Groningen', 'Drachten', 'Leeuwarden', 'Assen', 'Heerenveen'].map((city, i) => (
                  <div
                    key={city}
                    className="absolute px-3 py-1 rounded-full text-xs font-medium bg-white shadow-md flex items-center hover:scale-110 transition-transform cursor-default"
                    style={{
                      top: `${50 + 35 * Math.sin(i * Math.PI * 2 / 5 - Math.PI / 2)}%`,
                      left: `${50 + 35 * Math.cos(i * Math.PI * 2 / 5 - Math.PI / 2)}%`,
                      transform: 'translate(-50%, -50%)',
                      animation: `pulse 2s infinite ${i * 0.3}s`
                    }}
                  >
                    <span style={{color: colors.teal}}><MapPinIcon /></span>
                    <span className="ml-1">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced CTA Section with holographic effects
function CTA({ setCurrentPage }) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: colors.navy}}>
      {/* Simplified background orbs */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.teal}60 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animationDuration: '3s'
          }} />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${colors.neonCyan}30 1px, transparent 1px),
            linear-gradient(90deg, ${colors.neonCyan}30 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
          style={{
            background: `radial-gradient(circle, ${colors.teal}40, ${colors.neonCyan}20)`,
            boxShadow: `0 0 20px ${colors.teal}40`
          }}>
          <SparkleIcon />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{
          background: `linear-gradient(135deg, white, ${colors.neonCyan}, ${colors.teal})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% auto',
          animation: 'holographic 8s ease infinite'
        }}>
          Benieuwd wat AI voor jouw bedrijf kan betekenen?
        </h2>

        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Doe de gratis AI Readiness Scan en ontdek in 3 minuten waar de kansen liggen. Vrijblijvend en direct inzicht.
        </p>

        <button
          onClick={() => setCurrentPage('ai-scan')}
          className="group inline-flex items-center px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-110 neon-glow"
          style={{
            backgroundColor: colors.teal,
            color: colors.navy,
            boxShadow: `0 0 20px ${colors.teal}80`
          }}
        >
          <span className="font-bold">Start de gratis AI Scan</span>
          <span className="ml-2 group-hover:translate-x-2 transition-transform"><ArrowRight /></span>
        </button>
      </div>
    </section>
  );
}

// AI Scan Page
function AIScanPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { q: 'Hoeveel medewerkers heeft je bedrijf?', options: ['1-10', '11-50', '51-100', '100+'] },
    { q: 'In welke sector is je bedrijf actief?', options: ['Zakelijke dienstverlening', 'Productie/Industrie', 'Retail/Handel', 'Overheid/Non-profit', 'Anders'] },
    { q: 'Gebruikt je team al AI-tools?', options: ['Nee, nog niet', 'Ja, incidenteel (ChatGPT e.d.)', 'Ja, structureel', 'Ja, volledig geïntegreerd'] },
    { q: 'Heeft je organisatie Microsoft 365?', options: ['Ja', 'Nee', 'Weet ik niet'] },
    { q: 'Wat is je grootste uitdaging?', options: ['Tijdgebrek / te veel handmatig werk', 'Kennis over AI mogelijkheden', 'Budget', 'Medewerkers meekrijgen'] }
  ];

  const handleAnswer = (answer) => {
    setAnswers({...answers, [step]: answer});
    if (step < questions.length - 1) setStep(step + 1);
    else setStep('contact');
  };

  const handleSubmit = () => {
    console.log('Lead:', { email, company, answers });
    setSubmitted(true);
  };

  const getScore = () => {
    let score = 0;
    if (answers[2] === 'Ja, structureel' || answers[2] === 'Ja, volledig geïntegreerd') score += 30;
    else if (answers[2] === 'Ja, incidenteel (ChatGPT e.d.)') score += 15;
    if (answers[3] === 'Ja') score += 25;
    if (answers[0] === '11-50' || answers[0] === '51-100') score += 20;
    if (answers[4] === 'Tijdgebrek / te veel handmatig werk') score += 25;
    else score += 10;
    return Math.min(score, 100);
  };

  if (submitted) {
    const score = getScore();
    return (
      <section className="pt-24 pb-16 px-4 min-h-screen relative overflow-hidden" style={{backgroundColor: colors.lightGray}}>
        <FloatingOrbs />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                <circle cx="64" cy="64" r="56" fill="none" stroke={colors.teal} strokeWidth="12" strokeDasharray={`${score * 3.52} 352`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold" style={{color: colors.navy}}>{score}%</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{color: colors.navy}}>Jouw AI Readiness Score</h2>
            <p className="text-gray-600 mb-6">
              {score >= 60 ? 'Goed nieuws! Je organisatie is klaar voor de volgende stap met AI.' : score >= 30 ? 'Er is potentieel, maar ook ruimte voor verbetering.' : 'Je staat aan het begin van de AI-reis. Dat is prima!'}
            </p>
            <div className="p-4 rounded-xl mb-6" style={{backgroundColor: `${colors.teal}10`}}>
              <p className="text-sm" style={{color: colors.navy}}>
                <strong>Wat nu?</strong> We nemen binnen 24 uur contact op voor een vrijblijvend gesprek.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 px-4 min-h-screen relative overflow-hidden" style={{backgroundColor: colors.lightGray}}>
      <GridBackground />
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{backgroundColor: `${colors.teal}15`, color: colors.teal}}>Gratis</span>
          <h1 className="text-3xl font-bold mb-2" style={{color: colors.navy}}>AI Readiness Scan</h1>
          <p className="text-gray-600">Ontdek in 3 minuten hoe AI-ready jouw bedrijf is</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Vraag {typeof step === 'number' ? step + 1 : questions.length} van {questions.length}</span>
              <span>{Math.round(((typeof step === 'number' ? step : questions.length) / questions.length) * 100)}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500" style={{backgroundColor: colors.teal, width: `${((typeof step === 'number' ? step : questions.length) / questions.length) * 100}%`}} />
            </div>
          </div>

          {typeof step === 'number' ? (
            <>
              <h2 className="text-xl font-semibold mb-6" style={{color: colors.navy}}>{questions[step].q}</h2>
              <div className="space-y-3">
                {questions[step].options.map((option, i) => (
                  <button key={i} onClick={() => handleAnswer(option)} className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-all transform hover:scale-102">
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-6" style={{color: colors.navy}}>Bijna klaar! Waar mogen we je resultaten naartoe sturen?</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedrijfsnaam</label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="Je bedrijfsnaam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all" placeholder="je@bedrijf.nl" />
                </div>
                <button onClick={handleSubmit} disabled={!email || !company} className="w-full py-4 rounded-xl text-white font-medium transition-all disabled:opacity-50 hover:scale-102" style={{backgroundColor: colors.teal}}>
                  Bekijk mijn score
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// Contact Page
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    console.log('Contact:', formData);
    setSent(true);
  };

  if (sent) {
    return (
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce" style={{backgroundColor: `${colors.teal}15`, color: colors.teal}}>
              <CheckIcon />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{color: colors.navy}}>Bericht verzonden!</h2>
            <p className="text-gray-600">We nemen binnen 24 uur contact met je op.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <FloatingOrbs />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{backgroundColor: `${colors.teal}15`, color: colors.teal}}>Contact</span>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: colors.navy}}>Laten we kennismaken</h1>
            <p className="text-lg text-gray-600 mb-8">Benieuwd wat AI voor jouw bedrijf kan betekenen? Neem contact op voor een vrijblijvend gesprek.</p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: <MailIcon />, label: 'Email', value: 'info@enableflow.ai' },
                { icon: <PhoneIcon />, label: 'Telefoon', value: '06 - XXX XXX XX' },
                { icon: <MapPinIcon />, label: 'Regio', value: 'Noord-Nederland' }
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110" style={{backgroundColor: `${colors.teal}15`, color: colors.teal}}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium" style={{color: colors.navy}}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrijf</label>
                <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent" placeholder="Waar kunnen we je mee helpen?" />
              </div>
              <button onClick={handleSubmit} className="w-full py-4 rounded-xl text-white font-medium transition-all hover:scale-102 hover:shadow-lg" style={{backgroundColor: colors.teal}}>
                Verstuur bericht
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Diensten Page
function DienstenPage({ setCurrentPage }) {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <GridBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{backgroundColor: `${colors.teal}15`, color: colors.teal}}>Diensten</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: colors.navy}}>Onze diensten</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">Van eerste oriëntatie tot volledige implementatie en training.</p>

        {[
          { icon: <BrainIcon />, title: 'AI Consultancy', items: [{ name: 'AI Readiness Scan', desc: 'Gratis intake', price: 'Gratis' }, { name: 'AI Strategie Workshop', desc: 'Dagdeel met MT', price: 'Vanaf €750' }] },
          { icon: <CogIcon />, title: 'AI Implementatie', items: [{ name: 'Microsoft Copilot 365', desc: 'Volledige uitrol', price: 'Vanaf €2.500' }, { name: 'Procesautomatisering', desc: 'Custom oplossingen', price: 'Op maat' }] },
          { icon: <UsersIcon />, title: 'AI Training', items: [{ name: 'Prompt Engineering', desc: 'Effectief AI gebruiken', price: '€150 p.p.' }, { name: 'AI voor Management', desc: 'Strategische inzichten', price: '€175 p.p.' }] }
        ].map((section, i) => (
          <div key={i} className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: `${colors.teal}15`, color: colors.teal}}>{section.icon}</div>
              <h2 className="text-2xl font-bold" style={{color: colors.navy}}>{section.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item, j) => (
                <div key={j} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-teal-200 transition-all transform hover:-translate-y-1">
                  <h3 className="font-semibold mb-1" style={{color: colors.navy}}>{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  <p className="font-semibold" style={{color: colors.teal}}>{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center p-8 rounded-3xl" style={{background: `linear-gradient(135deg, ${colors.navy}05 0%, ${colors.teal}15 100%)`}}>
          <h3 className="text-xl font-semibold mb-2" style={{color: colors.navy}}>Niet zeker welke dienst past?</h3>
          <p className="text-gray-600 mb-4">Start met de gratis AI Scan.</p>
          <button onClick={() => setCurrentPage('ai-scan')} className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform" style={{backgroundColor: colors.teal}}>
            Start gratis AI Scan <span className="ml-2"><ArrowRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Over Page
function OverPage() {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <FloatingOrbs />
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{backgroundColor: `${colors.teal}15`, color: colors.teal}}>Over ons</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: colors.navy}}>Over EnableFlow AI</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-8">EnableFlow AI is opgericht met één doel: AI toegankelijk maken voor bedrijven in Noord-Nederland. Geen abstracte adviezen, maar praktische hulp van iemand die de regio kent.</p>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 mb-8 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4" style={{color: colors.navy}}>Onze aanpak</h2>
            <p className="text-gray-600">Wij geloven dat AI-implementatie geen groot, risicovol project hoeft te zijn. Door te beginnen met kleine, concrete stappen zie je snel resultaat.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{ icon: '📍', label: 'Local' }, { icon: '🔧', label: 'Hands-on' }, { icon: '💡', label: 'Nuchter' }].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-2xl font-bold" style={{color: colors.teal}}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ setCurrentPage }) {
  return (
    <footer className="py-12 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4 cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <span className="text-lg font-semibold" style={{color: colors.navy}}>Enable</span>
              <span className="text-lg font-bold" style={{color: colors.teal}}>Flow</span>
              <span className="text-lg font-light text-gray-400 ml-1">AI</span>
            </div>
            <p className="text-sm text-gray-600">AI Consultancy voor Noord-Nederland.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" style={{color: colors.navy}}>Diensten</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['AI Consultancy', 'AI Implementatie', 'AI Training'].map(s => (
                <li key={s}><button onClick={() => setCurrentPage('diensten')} className="hover:text-teal-500 transition-colors">{s}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{color: colors.navy}}>Regio's</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Groningen', 'Friesland', 'Drenthe'].map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{color: colors.navy}}>Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>info@enableflow.ai</li>
              <li>KvK: XXXXXXXX</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 EnableFlow AI</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <button className="hover:text-gray-700">Privacy</button>
            <button className="hover:text-gray-700">Voorwaarden</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Chat Widget
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hoi! 👋 Heb je een vraag over AI of onze diensten?' }]);
  const [input, setInput] = useState('');

  const getResponse = (q) => {
    const lower = q.toLowerCase();
    if (lower.includes('kost') || lower.includes('prijs')) return 'De AI Scan is gratis! Implementatie vanaf €2.500, trainingen vanaf €150 p.p.';
    if (lower.includes('copilot')) return 'Ja, Microsoft Copilot 365 is onze specialiteit!';
    if (lower.includes('bel') || lower.includes('contact')) return 'Mail naar info@enableflow.ai of gebruik het contactformulier!';
    return 'Goede vraag! Doe de gratis AI Scan of neem contact op voor een gesprek.';
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;
    setMessages([...messages, { from: 'user', text }]);
    setTimeout(() => setMessages(m => [...m, { from: 'bot', text: getResponse(text) }]), 500);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white z-50 transition-all hover:scale-110"
        style={{
          backgroundColor: colors.teal,
          boxShadow: `0 4px 20px ${colors.teal}40`
        }}>
        {open ? <XIcon /> : <ChatIcon />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 w-full sm:w-80 max-w-sm mx-6 sm:mx-0 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden glassmorphism-strong" style={{
          boxShadow: `0 20px 60px rgba(0,0,0,0.2)`
        }}>
          <div className="p-4 relative overflow-hidden" style={{
            background: `linear-gradient(135deg, ${colors.navy}, ${colors.teal}20)`
          }}>
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20" style={{
              background: `linear-gradient(45deg, ${colors.teal}30, ${colors.neonCyan}20)`,
              animation: 'holographic 10s ease infinite',
              backgroundSize: '200% 200%'
            }}></div>
            <h3 className="text-white font-semibold relative z-10">EnableFlow AI</h3>
            <p className="text-gray-300 text-sm relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: colors.neonCyan}}></span>
              Stel je vraag
            </p>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm transition-all duration-300 ${
                    m.from === 'user' ? 'text-white' : 'glassmorphism text-gray-800'
                  }`}
                  style={m.from === 'user' ? {
                    backgroundColor: colors.teal,
                    boxShadow: `0 2px 10px ${colors.teal}30`
                  } : {
                    backgroundColor: colors.lightGray
                  }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Typ je vraag..."
                className="flex-1 p-3 border-2 rounded-xl text-sm transition-all duration-300 focus:outline-none"
                style={{
                  borderColor: colors.gray + '30',
                  ':focus': {
                    borderColor: colors.teal,
                    boxShadow: `0 0 20px ${colors.teal}20`
                  }
                }}
              />
              <button
                onClick={() => handleSend()}
                className="px-5 py-2 rounded-xl text-white font-bold transition-all hover:scale-110"
                style={{
                  backgroundColor: colors.teal,
                  boxShadow: `0 0 15px ${colors.teal}40`
                }}>
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Main App
export default function EnableFlowWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'ai-scan': return <AIScanPage />;
      case 'contact': return <ContactPage />;
      case 'diensten': return <DienstenPage setCurrentPage={setCurrentPage} />;
      case 'over': return <OverPage />;
      default: return (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <Services setCurrentPage={setCurrentPage} />
          <Stats />
          <WhyUs />
          <CTA setCurrentPage={setCurrentPage} />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
      <ChatWidget />
    </div>
  );
}
