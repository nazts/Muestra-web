import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const heroRef = useRef(null);
  const revealRef = useRef([]);

  const services = [
    {
      title: 'Corte Premium',
      text: 'Líneas precisas, asesoría personalizada y acabado editorial para elevar tu imagen con sobriedad.',
    },
    {
      title: 'Coloración Balayage',
      text: 'Transiciones profundas y luminosas con mezcla artesanal de tonos para un efecto elegante y natural.',
    },
    {
      title: 'Spa Capilar',
      text: 'Ritual reparador con masaje, nutrición intensa y brillo visible desde la primera sesión.',
    },
  ];

  const testimonials = [
    {
      name: 'Andrea M.',
      text: 'La experiencia fue impecable: ambiente íntimo, atención precisa y un resultado sofisticado.',
    },
    {
      name: 'Valeria S.',
      text: 'El color quedó perfecto, profundo y muy fino. Se siente como un espacio verdaderamente premium.',
    },
    {
      name: 'Camila R.',
      text: 'Todo transmite lujo silencioso. Salí con el cabello increíble y con ganas de volver.',
    },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: 'https://tiktok.com',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4v8.1a4.2 4.2 0 1 1-3-4V4h3z" />
          <path d="M14 4c.8 2.3 2.8 3.9 5 4.2V10c-2.4-.1-4.6-1-6-2.4V4h1z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/525512345678',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3z" />
          <path d="M9.4 8.9c.2-.4.4-.4.7-.4h.5c.3 0 .4.1.5.4l.8 1.8c.1.3 0 .5-.1.7l-.5.6c-.2.2-.2.5 0 .8.6 1.1 1.5 1.9 2.6 2.5.2.1.6.1.8-.1l.6-.5c.2-.1.4-.2.7-.1l1.8.8c.3.1.4.3.4.5v.6c0 .3 0 .5-.4.7-.5.3-1.1.5-1.8.5-4.5 0-8.2-3.7-8.2-8.2 0-.7.2-1.3.5-1.8z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const hero = heroRef.current;
    const revealTargets = revealRef.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    revealTargets.forEach((node) => observer.observe(node));

    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });

      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      hero.style.setProperty('--px', `${x * 18}px`);
      hero.style.setProperty('--py', `${y * 18}px`);
    };

    const handleLeave = () => setCursor((current) => ({ ...current, visible: false }));

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const setRevealRef = (node) => {
    if (node && !revealRef.current.includes(node)) revealRef.current.push(node);
  };

  return (
    <>
      <style>{`
        :root {
          --bg: #0A0A0A;
          --bg-soft: #121212;
          --gold: #D4AF37;
          --gold-soft: rgba(212, 175, 55, 0.16);
          --gold-glow: rgba(212, 175, 55, 0.34);
          --wine: #6B1D3A;
          --text: #F7F1E8;
          --muted: rgba(247, 241, 232, 0.74);
          --line: rgba(212, 175, 55, 0.22);
          --shadow: 0 28px 80px rgba(0, 0, 0, 0.55);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at top, rgba(107, 29, 58, 0.16), transparent 34%),
            radial-gradient(circle at bottom right, rgba(212, 175, 55, 0.09), transparent 32%),
            var(--bg);
          color: var(--text);
          font-family: 'Raleway', sans-serif;
          overflow-x: hidden;
          cursor: none;
        }

        a, button {
          cursor: none;
        }

        .page {
          position: relative;
          isolation: isolate;
        }

        .custom-cursor {
          position: fixed;
          left: 0;
          top: 0;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,1) 0%, rgba(212,175,55,0.95) 40%, rgba(212,175,55,0.12) 72%, transparent 76%);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.52);
          transform: translate3d(-50%, -50%, 0);
          pointer-events: none;
          z-index: 80;
          opacity: 0;
          transition: opacity 160ms ease;
          mix-blend-mode: screen;
        }

        .custom-cursor.visible {
          opacity: 1;
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero {
          min-height: 100vh;
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 32%, rgba(212,175,55,0.14), transparent 22%),
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.18)),
            var(--bg);
        }

        .hero::before,
        .hero::after {
          content: '';
          position: absolute;
          inset: auto;
          width: 120vw;
          height: 120vw;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.12;
          filter: blur(10px);
        }

        .hero::before {
          left: -36vw;
          top: -55vw;
          background: radial-gradient(circle, rgba(212,175,55,0.3), transparent 62%);
          animation: drift 18s ease-in-out infinite alternate;
        }

        .hero::after {
          right: -42vw;
          bottom: -62vw;
          background: radial-gradient(circle, rgba(107,29,58,0.38), transparent 64%);
          animation: drift 24s ease-in-out infinite alternate-reverse;
        }

        .hero-shell {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 32px 0 40px;
          transform: translate3d(var(--px, 0px), var(--py, 0px), 0);
          transition: transform 140ms linear;
        }

        .hero-top {
          position: absolute;
          top: 24px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          color: var(--muted);
          font-size: 0.82rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          z-index: 3;
        }

        .brand {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          letter-spacing: 0.3em;
          color: var(--gold);
        }

        .nav {
          display: none;
          gap: 18px;
        }

        .nav a {
          color: var(--muted);
          text-decoration: none;
          transition: color 180ms ease;
        }

        .nav a:hover {
          color: var(--gold);
        }

        .hero-copy {
          position: relative;
          z-index: 2;
          max-width: 920px;
          padding: 96px 0 72px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: var(--gold);
          letter-spacing: 0.34em;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 18px;
        }

        .eyebrow::before,
        .eyebrow::after {
          content: '';
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        h1,
        h2,
        h3 {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          margin: 0;
        }

        .hero h1 {
          font-size: clamp(3.4rem, 11vw, 8.2rem);
          line-height: 0.9;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text);
          text-shadow: 0 0 34px rgba(212, 175, 55, 0.12);
        }

        .hero p {
          margin: 22px auto 0;
          max-width: 680px;
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.9;
          color: var(--muted);
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          padding: 0 30px;
          min-height: 54px;
          border-radius: 999px;
          border: 1px solid rgba(212,175,55,0.34);
          background: linear-gradient(180deg, rgba(212,175,55,0.16), rgba(107,29,58,0.18));
          color: var(--gold);
          font-size: 0.92rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .cta:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: rgba(212,175,55,0.6);
          box-shadow: 0 24px 58px rgba(0, 0, 0, 0.46);
          background: linear-gradient(180deg, rgba(212,175,55,0.24), rgba(107,29,58,0.26));
        }

        .particles {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          bottom: -12vh;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(212,175,55,0.92);
          box-shadow: 0 0 16px rgba(212,175,55,0.6);
          opacity: 0;
          animation: floatUp linear infinite;
        }

        .section {
          padding: 84px 0;
          position: relative;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 28px;
        }

        .section-header h2 {
          color: var(--gold);
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          letter-spacing: 0.04em;
        }

        .section-header p {
          max-width: 580px;
          margin: 0;
          color: var(--muted);
          line-height: 1.8;
        }

        .grid {
          display: grid;
          gap: 18px;
        }

        .service-card,
        .testimonial-card,
        .gallery-card,
        .footer-card {
          background: linear-gradient(180deg, rgba(18,18,18,0.92), rgba(10,10,10,0.96));
          border: 1px solid rgba(212,175,55,0.12);
          border-radius: 24px;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .service-card {
          padding: 26px;
          min-height: 260px;
          display: grid;
          gap: 16px;
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
          position: relative;
        }

        .service-card::after {
          content: '';
          position: absolute;
          inset: auto 18px 18px auto;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.12);
          background: radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%);
          opacity: 0.8;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212,175,55,0.6);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.62);
        }

        .service-chip {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(107,29,58,0.14);
          color: var(--gold);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.74rem;
          border: 1px solid rgba(212,175,55,0.12);
        }

        .service-card h3 {
          font-size: 1.9rem;
          color: var(--text);
        }

        .service-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.85;
        }

        .gallery-grid {
          display: grid;
          gap: 18px;
        }

        .gallery-card {
          position: relative;
          min-height: 280px;
          border-color: rgba(212,175,55,0.1);
          transition: transform 240ms ease, border-color 240ms ease;
        }

        .gallery-card:hover {
          transform: translateY(-6px) scale(1.01);
          border-color: rgba(212,175,55,0.48);
        }

        .gallery-card svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .gallery-label {
          position: absolute;
          left: 18px;
          bottom: 18px;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(10,10,10,0.62);
          border: 1px solid rgba(212,175,55,0.18);
          color: var(--gold);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 0.72rem;
          backdrop-filter: blur(10px);
        }

        .testimonials-grid {
          display: grid;
          gap: 18px;
        }

        .testimonial-card {
          padding: 26px;
          transition: transform 220ms ease, border-color 220ms ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212,175,55,0.44);
        }

        .stars {
          display: inline-flex;
          gap: 6px;
          color: var(--gold);
          margin-bottom: 14px;
        }

        .stars span {
          display: inline-block;
          animation: starPulse 1.8s ease-in-out infinite;
          transform-origin: center;
        }

        .stars span:nth-child(2) { animation-delay: 140ms; }
        .stars span:nth-child(3) { animation-delay: 280ms; }
        .stars span:nth-child(4) { animation-delay: 420ms; }
        .stars span:nth-child(5) { animation-delay: 560ms; }

        .testimonial-card p {
          margin: 0 0 18px;
          line-height: 1.85;
          color: var(--muted);
        }

        .testimonial-card strong {
          color: var(--text);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 0.84rem;
        }

        .footer {
          padding: 28px 0 56px;
        }

        .footer-card {
          padding: 26px;
          display: grid;
          gap: 20px;
        }

        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-brand {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: var(--gold);
          letter-spacing: 0.14em;
        }

        .footer-text {
          color: var(--muted);
          line-height: 1.85;
          max-width: 720px;
        }

        .socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-link {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.18);
          background: rgba(255,255,255,0.02);
          color: var(--gold);
          transition: transform 200ms ease, border-color 200ms ease, background 200ms ease, color 200ms ease;
        }

        .social-link:hover {
          transform: translateY(-3px) scale(1.06);
          border-color: rgba(212,175,55,0.62);
          background: rgba(212,175,55,0.08);
          color: #f4df95;
        }

        .social-link svg {
          width: 18px;
          height: 18px;
        }

        .social-link svg path,
        .social-link svg circle,
        .social-link svg rect {
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.8;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          color: rgba(247,241,232,0.46);
          padding-top: 8px;
          border-top: 1px solid rgba(212,175,55,0.1);
          font-size: 0.92rem;
        }

        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 800ms ease, transform 800ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-silhouette,
        .gallery-glow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .gallery-silhouette path,
        .gallery-silhouette circle,
        .gallery-silhouette rect {
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .gallery-frame {
          color: var(--gold);
          opacity: 0.9;
        }

        .gallery-body {
          color: rgba(255, 243, 214, 0.88);
        }

        .gallery-accent {
          color: rgba(107, 29, 58, 0.92);
        }

        .gallery-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 24%, rgba(212,175,55,0.16), transparent 30%), linear-gradient(135deg, rgba(0,0,0,0.86), rgba(212,175,55,0.08));
        }

        .gallery-layer.wine {
          background: radial-gradient(circle at 36% 30%, rgba(107,29,58,0.34), transparent 34%), linear-gradient(145deg, rgba(0,0,0,0.92), rgba(107,29,58,0.2), rgba(212,175,55,0.12));
        }

        .hero-particle-1 { left: 7%; animation-duration: 12s; animation-delay: 0s; }
        .hero-particle-2 { left: 16%; animation-duration: 15s; animation-delay: 2s; }
        .hero-particle-3 { left: 27%; animation-duration: 13s; animation-delay: 4s; }
        .hero-particle-4 { left: 38%; animation-duration: 14s; animation-delay: 1s; }
        .hero-particle-5 { left: 50%; animation-duration: 16s; animation-delay: 5s; }
        .hero-particle-6 { left: 62%; animation-duration: 12.5s; animation-delay: 3s; }
        .hero-particle-7 { left: 74%; animation-duration: 17s; animation-delay: 1.5s; }
        .hero-particle-8 { left: 86%; animation-duration: 14.5s; animation-delay: 4.5s; }
        .hero-particle-9 { left: 94%; animation-duration: 18s; animation-delay: 2.2s; }
        .hero-particle-10 { left: 45%; animation-duration: 19s; animation-delay: 6s; }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(1.1);
            opacity: 0;
          }
        }

        @keyframes drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(18px, -26px, 0) scale(1.04); }
        }

        @keyframes starPulse {
          0%, 100% { transform: scale(1); opacity: 0.88; }
          50% { transform: scale(1.14); opacity: 1; }
        }

        @media (min-width: 768px) {
          .nav {
            display: flex;
          }

          .grid.services {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .grid-services {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .testimonials-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .footer-card {
            padding: 34px;
          }

          .footer-top {
            flex-direction: row;
            align-items: end;
            justify-content: space-between;
          }
        }

        @media (max-width: 767px) {
          .hero-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 10px;
          }

          .hero-copy {
            padding-top: 120px;
          }

          .hero h1 {
            font-size: clamp(2.9rem, 15vw, 4.8rem);
          }

          .section {
            padding: 64px 0;
          }

          .section-header {
            flex-direction: column;
            align-items: start;
          }
        }

        @media (max-width: 540px) {
          body,
          a,
          button {
            cursor: auto;
          }

          .custom-cursor {
            display: none;
          }

          .container {
            width: min(100% - 20px, 1180px);
          }

          .hero-copy {
            padding-bottom: 50px;
          }

          .hero h1 {
            letter-spacing: 0.03em;
          }

          .cta {
            width: 100%;
          }

          .service-card,
          .testimonial-card,
          .footer-card {
            border-radius: 20px;
          }

          .service-card h3 {
            font-size: 1.6rem;
          }

          .gallery-card {
            min-height: 240px;
          }

          .footer-brand {
            font-size: 1.55rem;
          }
        }
      `}</style>

      <div className={`custom-cursor ${cursor.visible ? 'visible' : ''}`} style={{ left: cursor.x, top: cursor.y }} />

      <div className="page">
        <section className="hero" id="inicio" ref={heroRef}>
          <div className="particles" aria-hidden="true">
            <span className="particle hero-particle-1" />
            <span className="particle hero-particle-2" />
            <span className="particle hero-particle-3" />
            <span className="particle hero-particle-4" />
            <span className="particle hero-particle-5" />
            <span className="particle hero-particle-6" />
            <span className="particle hero-particle-7" />
            <span className="particle hero-particle-8" />
            <span className="particle hero-particle-9" />
            <span className="particle hero-particle-10" />
          </div>

          <div className="container hero-shell">
            <div className="hero-top">
              <div className="brand">NOIR BEAUTÉ</div>
              <div className="nav" aria-label="Navegación">
                <a href="#servicios">Servicios</a>
                <a href="#galeria">Galería</a>
                <a href="#testimonios">Testimonios</a>
                <a href="#contacto">Contacto</a>
              </div>
            </div>

            <div className="hero-copy reveal" ref={setRevealRef}>
              <div className="eyebrow">Dark Luxury Salon</div>
              <h1>Noir Beauté</h1>
              <p>
                Un refugio de belleza de alto nivel donde el negro profundo, el dorado sutil y el vino sofisticado se unen para crear una experiencia memorable.
              </p>
              <a className="cta" href="#contacto">
                Agenda tu experiencia
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="section-header reveal" ref={setRevealRef}>
              <h2>Servicios</h2>
              <p>Detalles diseñados para realzar tu presencia con técnica precisa, acabado impecable y una atmósfera envolvente.</p>
            </div>

            <div className="grid grid-services">
              {services.map((service, index) => (
                <article className="service-card reveal" ref={setRevealRef} key={service.title} style={{ transitionDelay: `${index * 90}ms` }}>
                  <div className="service-chip">0{index + 1}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="galeria">
          <div className="container">
            <div className="section-header reveal" ref={setRevealRef}>
              <h2>Galería</h2>
              <p>Formas abstractas, siluetas femeninas y halos dorados que evocan una estética editorial sobre fondos intensos.</p>
            </div>

            <div className="gallery-grid">
              {[
                'Glow Portrait',
                'Silhouette Noir',
                'Golden Frame',
                'Velvet Motion',
              ].map((label, index) => (
                <div className="gallery-card reveal" ref={setRevealRef} key={label} style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className={index % 2 === 0 ? 'gallery-layer' : 'gallery-layer wine'} />
                  <svg viewBox="0 0 900 620" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`g${index}a`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0A0A0A" />
                        <stop offset="45%" stopColor="#1B1B1B" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.18" />
                      </linearGradient>
                      <radialGradient id={`g${index}b`} cx="50%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.46" />
                        <stop offset="100%" stopColor="#6B1D3A" stopOpacity="0.0" />
                      </radialGradient>
                    </defs>
                    <rect width="900" height="620" fill={`url(#g${index}a)`} />
                    <rect width="900" height="620" fill={`url(#g${index}b)`} />
                    <path d="M120 110h660M120 510h660M110 120v380M790 120v380" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
                    <path d="M310 172c0-36 31-66 69-66s69 30 69 66c0 24-10 42-21 56 14 16 24 38 24 67 0 42-15 83-36 114-12 17-23 34-36 54-12-20-24-37-36-54-21-31-36-72-36-114 0-29 10-51 24-67-11-14-21-32-21-56z" fill="rgba(255,255,255,0.06)" stroke="rgba(212,175,55,0.3)" strokeWidth="2" />
                    <path d="M260 382c34-60 89-90 119-90 30 0 85 30 119 90 18 32 27 67 27 111H233c0-44 9-79 27-111z" fill="rgba(107,29,58,0.14)" stroke="rgba(212,175,55,0.22)" strokeWidth="1.8" />
                    <path d="M349 146c18 6 29 20 30 36-1 16-10 30-24 40M448 146c-18 6-29 20-30 36 1 16 10 30 24 40" fill="none" stroke="rgba(212,175,55,0.52)" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M370 288c25 20 64 20 90 0" fill="none" stroke="rgba(255,243,214,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="450" cy="162" r="112" fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1.4" />
                    <circle cx="450" cy="162" r="156" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
                    <path d="M650 156c26 24 41 54 41 87 0 37-16 67-42 88 14-30 21-54 21-88 0-30-6-55-20-87z" fill="rgba(212,175,55,0.06)" />
                  </svg>
                  <div className="gallery-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="testimonios">
          <div className="container">
            <div className="section-header reveal" ref={setRevealRef}>
              <h2>Testimonios</h2>
              <p>Voces que reflejan una atención íntima, precisión técnica y una experiencia de lujo discreto.</p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((item, index) => (
                <article className="testimonial-card reveal" ref={setRevealRef} key={item.name} style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="stars" aria-hidden="true">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p>{item.text}</p>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer" id="contacto">
          <div className="container">
            <div className="footer-card reveal" ref={setRevealRef}>
              <div className="footer-top">
                <div>
                  <div className="footer-brand">Noir Beauté</div>
                  <div className="footer-text">
                    Agenda tu cita y entra en una experiencia de belleza envolvente, refinada y completamente a tu medida.
                  </div>
                </div>

                <div className="socials" aria-label="Redes sociales">
                  {socialLinks.map((social) => (
                    <a key={social.label} className="social-link" href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-bottom">
                <span>Lunes a sábado · 10:00 - 19:00</span>
                <span>Reserva directa por WhatsApp</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
