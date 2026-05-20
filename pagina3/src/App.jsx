import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [priceType, setPriceType] = useState('monthly');
  const revealRef = useRef([]);

  const services = [
    {
      title: 'Corte & Peinado',
      description: 'Cortes precisos diseñados para realzar tu rostro y cabello.',
      icon: (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path d="M32 28c0-8 6-14 14-14s14 6 14 14m-28 12h28m-20 24l6-12m8 12l-6-12m-8-8h12m-6-6v12" />
          <circle cx="50" cy="50" r="36" />
        </svg>
      ),
    },
    {
      title: 'Coloración',
      description: 'Tonos cuidados con productos premium y técnica experta.',
      icon: (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 18c14 0 24 10 24 24 0 8-4 16-10 20l-6 20h-16l-6-20c-6-4-10-12-10-20 0-14 10-24 24-24z" />
          <path d="M50 28c-8 0-14 6-14 14s6 14 14 14 14-6 14-14-6-14-14-14z" />
          <line x1="50" y1="50" x2="50" y2="72" />
        </svg>
      ),
    },
    {
      title: 'Tratamientos',
      description: 'Rituales reparadores para cabello y piel rejuvenecida.',
      icon: (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path d="M30 40c0-8 8-14 20-14s20 6 20 14" />
          <circle cx="50" cy="56" r="18" />
          <path d="M50 38v36M32 56h36" />
          <path d="M44 62c-4-2-6-6-6-10s2-8 6-10M56 62c4-2 6-6 6-10s-2-8-6-10" />
        </svg>
      ),
    },
  ];

  const prices = {
    monthly: [
      { service: 'Corte Premium', price: '$45' },
      { service: 'Coloración Balayage', price: '$120' },
      { service: 'Spa Capilar 1h', price: '$95' },
      { service: 'Tratamiento Keratina', price: '$85' },
    ],
    package: [
      { service: '4 Cortes Anuales', price: '$160' },
      { service: 'Coloración + Spa Trim', price: '$280' },
      { service: 'Paquete Anual Premium', price: '$650' },
      { service: 'Mantenimiento Mensual', price: '$299' },
    ],
  };

  useEffect(() => {
    const elements = revealRef.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -12% 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const setRevealRef = (node) => {
    if (node && !revealRef.current.includes(node)) revealRef.current.push(node);
  };

  return (
    <>
      <style>{`
        :root {
          --white: #FFFFFF;
          --pink: #F2C4CE;
          --pink-soft: rgba(242, 196, 206, 0.18);
          --sage: #A8B5A0;
          --sage-soft: rgba(168, 181, 160, 0.1);
          --charcoal: #2C2C2C;
          --gray-light: #F8F8F8;
          --gray-med: #E8E8E8;
          --text-muted: rgba(44, 44, 44, 0.72);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--white);
          color: var(--charcoal);
          font-family: 'DM Sans', sans-serif;
          line-height: 1.6;
        }

        h1, h2, h3, h4 {
          font-family: 'DM Serif Display', serif;
          margin: 0;
        }

        a {
          color: var(--sage);
          text-decoration: none;
          transition: color 200ms ease;
        }

        a:hover {
          color: var(--charcoal);
        }

        button {
          appearance: none;
          border: none;
          background: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }

        .page {
          position: relative;
          overflow-x: hidden;
        }

        .container {
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
        }

        /* === HEADER === */
        .header {
          position: sticky;
          top: 0;
          z-index: 30;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--gray-med);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
        }

        .brand {
          font-family: 'DM Serif Display', serif;
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: var(--charcoal);
        }

        .nav {
          display: none;
          gap: 28px;
        }

        .nav a {
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          position: relative;
        }

        .nav a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--pink);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 200ms ease;
        }

        .nav a:hover::after {
          transform: scaleX(1);
        }

        .cta-header {
          display: none;
          padding: 9px 18px;
          border-radius: 999px;
          border: 1px solid var(--sage);
          color: var(--sage);
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 200ms ease;
        }

        .cta-header:hover {
          background: var(--sage-soft);
          color: var(--charcoal);
          border-color: var(--charcoal);
        }

        /* === HERO === */
        .hero {
          padding: 68px 0;
          display: grid;
          place-items: center;
          min-height: calc(100vh - 86px);
        }

        .hero-inner {
          display: grid;
          gap: 48px;
        }

        .hero-copy {
          display: flex;
          flex-direction: column;
          gap: 18px;
          max-width: 680px;
        }

        .hero-tag {
          display: inline-flex;
          width: fit-content;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          border-radius: 999px;
          background: var(--pink-soft);
          color: var(--charcoal);
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .hero h1 {
          font-size: clamp(2.8rem, 8vw, 4.6rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--charcoal);
        }

        .hero p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 24px;
          border-radius: 999px;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 200ms ease;
        }

        .button-primary {
          background: var(--sage);
          color: var(--white);
          box-shadow: none;
          border: none;
        }

        .button-primary:hover {
          background: var(--charcoal);
          transform: translateY(-2px);
        }

        .button-secondary {
          background: var(--white);
          color: var(--sage);
          border: 1px solid var(--sage);
        }

        .button-secondary:hover {
          background: var(--pink-soft);
          border-color: var(--charcoal);
          color: var(--charcoal);
        }

        .hero-visual {
          min-height: 400px;
          display: grid;
          place-items: center;
        }

        .hero-visual svg {
          max-width: 100%;
          height: auto;
        }

        /* === SECTION === */
        .section {
          padding: 84px 0;
        }

        .section-header {
          display: grid;
          gap: 14px;
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          letter-spacing: -0.01em;
          color: var(--charcoal);
        }

        .section-header p {
          max-width: 680px;
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        /* === SERVICES === */
        .services-grid {
          display: grid;
          gap: 24px;
        }

        .service-card {
          padding: 36px;
          background: var(--gray-light);
          border-radius: 20px;
          border: 1px solid var(--gray-med);
          display: grid;
          gap: 18px;
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          background: var(--pink-soft);
          border-color: var(--pink);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          color: var(--sage);
        }

        .service-icon svg {
          width: 100%;
          height: 100%;
        }

        .service-icon svg path,
        .service-icon svg line,
        .service-icon svg circle {
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.4;
        }

        .service-card h3 {
          font-size: 1.4rem;
          color: var(--charcoal);
        }

        .service-card p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* === ABOUT === */
        .about-grid {
          display: grid;
          gap: 48px;
          align-items: center;
        }

        .about-copy {
          display: grid;
          gap: 18px;
          max-width: 680px;
        }

        .about-copy p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.85;
          font-size: 1.05rem;
        }

        .about-copy strong {
          color: var(--sage);
          font-weight: 600;
        }

        .about-visual {
          min-height: 480px;
          display: grid;
          place-items: center;
        }

        .about-visual svg {
          max-width: 100%;
          height: auto;
        }

        /* === PRICING === */
        .pricing-toggle {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
          width: fit-content;
          padding: 6px;
          background: var(--gray-light);
          border-radius: 999px;
        }

        .toggle-btn {
          padding: 10px 20px;
          border-radius: 999px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 200ms ease;
          cursor: pointer;
          font-weight: 500;
        }

        .toggle-btn.active {
          background: var(--white);
          color: var(--sage);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .pricing-table {
          width: 100%;
          border-collapse: collapse;
        }

        .pricing-table tr {
          border-bottom: 1px solid var(--gray-med);
        }

        .pricing-table tr:last-child {
          border-bottom: none;
        }

        .pricing-table td {
          padding: 20px 0;
          font-size: 1rem;
        }

        .pricing-table td:first-child {
          color: var(--charcoal);
          font-weight: 500;
        }

        .pricing-table td:last-child {
          text-align: right;
          color: var(--sage);
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* === CONTACT === */
        .contact-grid {
          display: grid;
          gap: 48px;
        }

        .contact-form {
          display: grid;
          gap: 20px;
          max-width: 600px;
        }

        .form-group {
          display: grid;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--charcoal);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          border: 1px solid var(--gray-med);
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: var(--charcoal);
          background: var(--white);
          transition: border-color 200ms ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--sage);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-visual {
          min-height: 320px;
          display: grid;
          place-items: center;
        }

        .contact-visual svg {
          max-width: 100%;
          height: auto;
        }

        /* === FOOTER === */
        .footer {
          padding: 40px 0;
          border-top: 1px solid var(--gray-med);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copy {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* === ANIMATIONS === */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* === RESPONSIVE === */
        @media (min-width: 768px) {
          .nav {
            display: flex;
          }

          .cta-header {
            display: flex;
          }

          .hero-inner {
            grid-template-columns: 1fr 1fr;
            place-items: center;
          }

          .services-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .about-grid {
            grid-template-columns: 1fr 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }

          .footer-inner {
            justify-content: space-between;
          }
        }

        @media (max-width: 767px) {
          .container {
            width: min(100% - 20px, 1240px);
          }

          .header-inner {
            padding: 14px 0;
          }

          .hero {
            padding: 48px 0;
            min-height: auto;
          }

          .hero-visual {
            min-height: 300px;
          }

          .section {
            padding: 64px 0;
          }

          .about-visual,
          .contact-visual {
            min-height: 280px;
          }

          .service-card {
            padding: 24px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 540px) {
          .button {
            width: 100%;
          }

          .hero-actions {
            flex-direction: column;
          }

          .pricing-toggle {
            width: 100%;
          }

          .toggle-btn {
            flex: 1;
            text-align: center;
          }

          .contact-form {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header-inner">
              <div className="brand">Bloom Studio</div>
              <nav className="nav">
                <a href="#servicios">Servicios</a>
                <a href="#sobre">Sobre Nosotras</a>
                <a href="#precios">Precios</a>
                <a href="#contacto">Contacto</a>
              </nav>
              <a href="#contacto" className="cta-header">
                Reservar
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="inicio">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy reveal" ref={setRevealRef}>
                  <div className="hero-tag">Belleza Minimalista</div>
                  <h1>Bloom Studio</h1>
                  <p>
                    Un espacio fresco y sereno donde la belleza moderna se encuentra con el cuidado artesanal. Diseñado para que te sientas bien desde el primer momento.
                  </p>
                  <div className="hero-actions">
                    <a href="#contacto" className="button button-primary">
                      Agendar Cita
                    </a>
                    <a href="#servicios" className="button button-secondary">
                      Ver Servicios
                    </a>
                  </div>
                </div>

                <div className="hero-visual reveal" ref={setRevealRef}>
                  <svg viewBox="0 0 400 500" aria-hidden="true">
                    <defs>
                      <linearGradient id="stemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#A8B5A0" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#A8B5A0" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Main stems */}
                    <path d="M200 500c0-80 0-160 20-220 5-15 10-30 8-45-3-20-12-35-20-50" fill="none" stroke="url(#stemGradient)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M200 500c0-90 -10-150 -30-200 -8-20 -15-40 -12-60 4-25 16-45 28-65" fill="none" stroke="url(#stemGradient)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M200 500c0-70 15-140 40-180 10-15 18-32 15-50 -5-25 -18-45 -32-60" fill="none" stroke="url(#stemGradient)" strokeWidth="2" strokeLinecap="round" />

                    {/* Top flowers */}
                    <circle cx="228" cy="80" r="14" fill="none" stroke="#F2C4CE" strokeWidth="1.8" />
                    <circle cx="228" cy="65" r="12" fill="none" stroke="#F2C4CE" strokeWidth="1.6" />
                    <circle cx="242" cy="75" r="11" fill="none" stroke="#F2C4CE" strokeWidth="1.6" />
                    <circle cx="214" cy="75" r="11" fill="none" stroke="#F2C4CE" strokeWidth="1.6" />
                    <circle cx="228" cy="95" r="10" fill="none" stroke="#F2C4CE" strokeWidth="1.5" />

                    {/* Left cluster */}
                    <circle cx="160" cy="220" r="16" fill="none" stroke="#A8B5A0" strokeWidth="1.8" />
                    <circle cx="145" cy="210" r="13" fill="none" stroke="#A8B5A0" strokeWidth="1.6" />
                    <circle cx="155" cy="200" r="12" fill="none" stroke="#A8B5A0" strokeWidth="1.5" />
                    <circle cx="175" cy="205" r="12" fill="none" stroke="#A8B5A0" strokeWidth="1.5" />

                    {/* Right cluster */}
                    <circle cx="280" cy="240" r="15" fill="none" stroke="#F2C4CE" strokeWidth="1.7" />
                    <circle cx="295" cy="235" r="12" fill="none" stroke="#F2C4CE" strokeWidth="1.5" />
                    <circle cx="285" cy="225" r="11" fill="none" stroke="#F2C4CE" strokeWidth="1.5" />
                    <circle cx="268" cy="230" r="11" fill="none" stroke="#F2C4CE" strokeWidth="1.5" />

                    {/* Leaf shapes */}
                    <path d="M185 320c-8-6 -12-16 -10-26 2-10 10-18 20-20" fill="none" stroke="#A8B5A0" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M220 350c6-8 16-12 26-10 10 2 18 10 20 20" fill="none" stroke="#A8B5A0" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M260 380c-6-5 -14-7 -22-4 -8 3 -14 11 -14 20" fill="none" stroke="#A8B5A0" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="servicios">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Servicios</h2>
                <p>Cada servicio está pensado con cuidado para brindarte resultados que brillen por su sutileza y sobriedad.</p>
              </div>

              <div className="services-grid">
                {services.map((service, index) => (
                  <div className="service-card reveal" ref={setRevealRef} key={service.title} style={{ transitionDelay: `${index * 70}ms` }}>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="sobre">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Sobre Nosotras</h2>
                <p>Un espacio minimalista donde la técnica precisa y la calidez se encuentran en cada detalle.</p>
              </div>

              <div className="about-grid">
                <div className="about-copy reveal" ref={setRevealRef}>
                  <p>
                    En Bloom Studio creemos que la belleza no necesita ser complicada. Cada servicio está diseñado con atención al detalle, priorizando productos de calidad y técnicas que respetan tu cabello y piel.
                  </p>
                  <p>
                    <strong>Nuestro compromiso:</strong> espacio sereno, profesionalismo auténtico y resultados que hablen por sí solos. Aquí te sientes cuidada desde el momento en que llegas.
                  </p>
                  <p>
                    Nos apasiona el minimalismo en diseño, pero nunca en atención. Cada cliente merece un ritmo pausado y una experiencia memorable.
                  </p>
                </div>

                <div className="about-visual reveal" ref={setRevealRef}>
                  <svg viewBox="0 0 380 420" aria-hidden="true">
                    <defs>
                      <linearGradient id="mirrorGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A8B5A0" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#F2C4CE" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>

                    {/* Mirror oval */}
                    <ellipse cx="190" cy="210" rx="110" ry="150" fill="url(#mirrorGlow)" stroke="#A8B5A0" strokeWidth="2" />

                    {/* Mirror frame detail */}
                    <ellipse cx="190" cy="210" rx="100" ry="140" fill="none" stroke="#F2C4CE" strokeWidth="1" opacity="0.6" />

                    {/* Decorative elements around mirror */}
                    <circle cx="60" cy="120" r="8" fill="none" stroke="#F2C4CE" strokeWidth="1.2" opacity="0.5" />
                    <circle cx="320" cy="140" r="6" fill="none" stroke="#A8B5A0" strokeWidth="1.2" opacity="0.5" />
                    <circle cx="80" cy="340" r="7" fill="none" stroke="#A8B5A0" strokeWidth="1.2" opacity="0.5" />
                    <circle cx="300" cy="320" r="8" fill="none" stroke="#F2C4CE" strokeWidth="1.2" opacity="0.5" />

                    {/* Leaf accents */}
                    <path d="M290 100c8-6 16-10 24-8" fill="none" stroke="#A8B5A0" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                    <path d="M90 380c-10-4 -18-12 -20-22" fill="none" stroke="#F2C4CE" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
                    <path d="M320 260c6-8 12-14 20-16" fill="none" stroke="#A8B5A0" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

                    {/* Inner glow */}
                    <circle cx="190" cy="210" r="85" fill="none" stroke="#A8B5A0" strokeWidth="0.6" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="precios">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Precios</h2>
                <p>Opciones flexibles diseñadas para que encuentres lo que mejor se ajuste a tus necesidades.</p>
              </div>

              <div className="pricing-toggle" role="tablist">
                <button
                  className={`toggle-btn ${priceType === 'monthly' ? 'active' : ''}`}
                  onClick={() => setPriceType('monthly')}
                  role="tab"
                  aria-selected={priceType === 'monthly'}
                >
                  Mensual
                </button>
                <button
                  className={`toggle-btn ${priceType === 'package' ? 'active' : ''}`}
                  onClick={() => setPriceType('package')}
                  role="tab"
                  aria-selected={priceType === 'package'}
                >
                  Paquetes
                </button>
              </div>

              <table className="pricing-table reveal" ref={setRevealRef}>
                <tbody>
                  {prices[priceType].map((item) => (
                    <tr key={item.service}>
                      <td>{item.service}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="section" id="contacto">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Contacto</h2>
                <p>¿Listo para tu próxima cita? Envíanos tu mensaje y responderemos pronto.</p>
              </div>

              <div className="contact-grid">
                <form className="contact-form reveal" ref={setRevealRef}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>

                  <button className="button button-primary" type="submit">
                    Enviar
                  </button>
                </form>

                <div className="contact-visual reveal" ref={setRevealRef}>
                  <svg viewBox="0 0 400 360" aria-hidden="true">
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F2C4CE" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#A8B5A0" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* Map frame */}
                    <rect x="30" y="20" width="340" height="320" rx="16" fill="none" stroke="#A8B5A0" strokeWidth="1.5" />
                    <rect x="30" y="20" width="340" height="320" rx="16" fill="url(#mapGradient)" />

                    {/* Grid */}
                    <line x1="30" y1="120" x2="370" y2="120" stroke="#A8B5A0" strokeWidth="0.8" opacity="0.3" />
                    <line x1="30" y1="220" x2="370" y2="220" stroke="#A8B5A0" strokeWidth="0.8" opacity="0.3" />
                    <line x1="130" y1="20" x2="130" y2="340" stroke="#A8B5A0" strokeWidth="0.8" opacity="0.3" />
                    <line x1="270" y1="20" x2="270" y2="340" stroke="#A8B5A0" strokeWidth="0.8" opacity="0.3" />

                    {/* Pin */}
                    <circle cx="200" cy="150" r="18" fill="none" stroke="#F2C4CE" strokeWidth="2" />
                    <circle cx="200" cy="150" r="10" fill="#F2C4CE" opacity="0.5" />
                    <circle cx="200" cy="150" r="5" fill="#F2C4CE" />

                    {/* Decorative dots */}
                    <circle cx="120" cy="80" r="3" fill="#A8B5A0" opacity="0.4" />
                    <circle cx="280" cy="260" r="3" fill="#A8B5A0" opacity="0.4" />
                    <circle cx="80" cy="280" r="2" fill="#F2C4CE" opacity="0.4" />
                    <circle cx="320" cy="100" r="2" fill="#F2C4CE" opacity="0.4" />

                    {/* Info box */}
                    <rect x="50" y="260" width="300" height="60" rx="12" fill="var(--white)" stroke="#A8B5A0" strokeWidth="1" opacity="0.9" />
                    <text x="200" y="280" fontFamily="DM Serif Display" fontSize="14" textAnchor="middle" fill="#2C2C2C" fontWeight="500">
                      Av. Principal 123
                    </text>
                    <text x="200" y="305" fontFamily="DM Sans" fontSize="12" textAnchor="middle" fill="#A8B5A0">
                      +1 (555) 123-4567
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-copy">
                <span>© 2026 Bloom Studio</span>
                <span>·</span>
                <span>Diseño Minimalista Fresco</span>
              </div>
              <div className="footer-copy">
                <a href="#">Privacidad</a>
                <span>·</span>
                <a href="#">Términos</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
