import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRef = useRef([]);

  const sections = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'galeria', label: 'Galería' },
    { id: 'nosotros', label: 'Sobre Nosotros' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const elements = revealRef.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const setRevealRef = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  const services = [
    {
      name: 'Corte & Peinado',
      description: 'Diseño personalizado, acabado pulido y asesoría de estilo.',
      icon: (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path d="M28 84c16-18 31-27 44-27 8 0 15 4 22 12" />
          <path d="M31 36c9 10 19 15 29 15 12 0 20-4 27-12" />
          <path d="M38 28c3 10 7 19 13 27" />
          <path d="M65 23c-4 14-5 30-3 48" />
          <path d="M43 85c11-5 22-7 34-6" />
          <circle cx="60" cy="60" r="39" />
        </svg>
      ),
    },
    {
      name: 'Coloración',
      description: 'Tonos luminosos, balayage suave y corrección de color experta.',
      icon: (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path d="M40 26c14 8 20 20 20 35 0 17-8 28-20 34" />
          <path d="M53 22c11 6 18 17 18 33 0 12-4 22-11 30" />
          <path d="M68 26c10 5 17 14 19 28" />
          <path d="M24 78c19-7 38-10 58-8 5 1 10 2 14 4" />
          <path d="M35 91c10-3 20-4 30-3 9 1 18 3 26 6" />
          <circle cx="60" cy="60" r="39" />
        </svg>
      ),
    },
    {
      name: 'Tratamientos Faciales',
      description: 'Limpieza profunda, hidratación y luminosidad visible desde la primera sesión.',
      icon: (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path d="M46 25c-7 10-10 20-10 31 0 20 11 33 24 39" />
          <path d="M73 26c8 10 12 20 12 31 0 15-5 27-15 36" />
          <path d="M51 42c3 4 6 6 9 6 3 0 6-2 9-6" />
          <path d="M42 69c7 6 12 9 18 9 7 0 13-3 20-9" />
          <path d="M60 18c-11 12-16 24-16 36 0 10 5 21 16 33" />
          <circle cx="60" cy="60" r="39" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      text: 'El espacio se siente impecable y el servicio superó mis expectativas. Salí con el cabello más brillante y una atención exquisita.',
      name: 'Mariana P.',
    },
    {
      text: 'Me encantó la delicadeza en cada detalle. El color quedó perfecto, natural y con un acabado de lujo.',
      name: 'Daniela R.',
    },
    {
      text: 'La experiencia fue relajante, elegante y muy profesional. Se nota el cuidado en cada paso.',
      name: 'Sofía L.',
    },
  ];

  const socialIcons = {
    instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8.5V7c0-1.1.9-2 2-2h2V2h-3c-2.8 0-5 2.2-5 5v1.5H8V13h2v9h4v-9h3l1-4.5h-4z" />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3z" />
        <path d="M9.2 8.7c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.8 1.8c.1.3 0 .5-.1.7l-.5.6c-.2.2-.2.5 0 .8.6 1.1 1.5 1.9 2.6 2.5.2.1.6.1.8-.1l.6-.5c.2-.1.4-.2.7-.1l1.8.8c.3.1.4.3.4.5v.6c0 .3 0 .5-.4.7-.5.3-1.1.5-1.8.5-4.5 0-8.2-3.7-8.2-8.2 0-.7.2-1.3.5-1.8z" />
      </svg>
    ),
  };

  return (
    <>
      <style>{`
        :root {
          --cream: #FAF8F5;
          --charcoal: #1A1A1A;
          --gold: #C9A96E;
          --gold-soft: rgba(201, 169, 110, 0.18);
          --gold-mid: rgba(201, 169, 110, 0.38);
          --shadow: 0 18px 60px rgba(26, 26, 26, 0.10);
          --radius-xl: 28px;
          --radius-lg: 22px;
          --radius-md: 16px;
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
            radial-gradient(circle at top left, rgba(201,169,110,0.11), transparent 34%),
            radial-gradient(circle at bottom right, rgba(26,26,26,0.05), transparent 30%),
            var(--cream);
          color: var(--charcoal);
          font-family: 'Jost', sans-serif;
        }

        .lumiere-page {
          position: relative;
          overflow: hidden;
        }

        .lumiere-page::before,
        .lumiere-page::after {
          content: '';
          position: fixed;
          inset: auto;
          width: 32vw;
          height: 32vw;
          max-width: 480px;
          max-height: 480px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(8px);
          opacity: 0.18;
          z-index: 0;
        }

        .lumiere-page::before {
          left: -10vw;
          top: 12vh;
          background: radial-gradient(circle, rgba(201,169,110,0.42), transparent 66%);
        }

        .lumiere-page::after {
          right: -10vw;
          bottom: 10vh;
          background: radial-gradient(circle, rgba(26,26,26,0.16), transparent 66%);
        }

        .container {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(250, 248, 245, 0.75);
          border-bottom: 1px solid rgba(26, 26, 26, 0.08);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          gap: 16px;
        }

        .brand {
          display: flex;
          flex-direction: column;
          gap: 3px;
          text-decoration: none;
          color: inherit;
        }

        .brand strong {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .brand span {
          font-size: 0.82rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.62);
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 26px;
        }

        .nav-links a {
          color: rgba(26, 26, 26, 0.78);
          text-decoration: none;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          position: relative;
          transition: color 180ms ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -7px;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 180ms ease;
        }

        .nav-links a:hover {
          color: var(--charcoal);
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .menu-button {
          appearance: none;
          border: 1px solid rgba(26, 26, 26, 0.12);
          background: rgba(255, 255, 255, 0.42);
          color: var(--charcoal);
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 200ms ease, background 200ms ease, box-shadow 200ms ease;
        }

        .menu-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(26, 26, 26, 0.08);
        }

        .menu-icon {
          width: 20px;
          height: 14px;
          display: grid;
          gap: 3px;
        }

        .menu-icon span {
          display: block;
          height: 1.6px;
          background: currentColor;
          border-radius: 999px;
          transition: transform 220ms ease, opacity 220ms ease;
        }

        .mobile-panel {
          display: none;
          padding: 0 0 18px;
        }

        .mobile-panel.open {
          display: block;
        }

        .mobile-panel a {
          display: block;
          padding: 12px 0;
          text-decoration: none;
          color: var(--charcoal);
          border-top: 1px solid rgba(26, 26, 26, 0.08);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .hero {
          position: relative;
          min-height: calc(100vh - 86px);
          display: grid;
          place-items: center;
          padding: 44px 0 34px;
        }

        .hero-shell {
          position: relative;
          width: 100%;
          min-height: 74vh;
          border-radius: 34px;
          overflow: hidden;
          border: 1px solid rgba(201, 169, 110, 0.28);
          background:
            radial-gradient(circle at center, rgba(255, 255, 255, 0.75), rgba(250, 248, 245, 0.93) 40%, rgba(250, 248, 245, 0.98)),
            linear-gradient(180deg, rgba(201,169,110,0.08), transparent 36%);
          box-shadow: var(--shadow);
        }

        .hero-art {
          position: absolute;
          inset: 0;
          opacity: 0.95;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          min-height: inherit;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 54px 18px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          font-size: 0.84rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.66);
        }

        .eyebrow::before,
        .eyebrow::after {
          content: '';
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .hero h1 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: clamp(3.2rem, 11vw, 7rem);
          line-height: 0.92;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .hero p {
          margin: 18px auto 0;
          max-width: 700px;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(1.2rem, 3vw, 1.75rem);
          color: rgba(26, 26, 26, 0.78);
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .button {
          appearance: none;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 0.92rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease, color 220ms ease, border-color 220ms ease;
        }

        .button:hover {
          transform: translateY(-3px) scale(1.01);
        }

        .button-primary {
          background: var(--charcoal);
          color: var(--cream);
          box-shadow: 0 14px 32px rgba(26, 26, 26, 0.18);
        }

        .button-primary:hover {
          box-shadow: 0 18px 42px rgba(26, 26, 26, 0.24);
        }

        .button-secondary {
          background: rgba(250, 248, 245, 0.78);
          border: 1px solid rgba(26, 26, 26, 0.1);
          color: var(--charcoal);
        }

        .button-secondary:hover {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(201, 169, 110, 0.38);
        }

        .section {
          padding: 78px 0;
          position: relative;
          z-index: 1;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .section-header h2 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .section-header p {
          margin: 0;
          max-width: 640px;
          color: rgba(26, 26, 26, 0.72);
          line-height: 1.7;
          font-size: 1.02rem;
        }

        .grid-services {
          display: grid;
          gap: 18px;
        }

        .card {
          background: rgba(255, 255, 255, 0.46);
          border: 1px solid rgba(26, 26, 26, 0.09);
          border-radius: var(--radius-lg);
          box-shadow: 0 16px 44px rgba(26, 26, 26, 0.06);
          overflow: hidden;
        }

        .service-card {
          padding: 28px;
          display: grid;
          gap: 18px;
          min-height: 280px;
          position: relative;
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201, 169, 110, 0.35);
          box-shadow: 0 22px 58px rgba(26, 26, 26, 0.12);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          color: var(--charcoal);
          padding: 12px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(201,169,110,0.16), rgba(250,248,245,0.92));
          border: 1px solid rgba(201,169,110,0.26);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.45);
          display: grid;
          place-items: center;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .service-card:hover .service-icon {
          transform: translateY(-2px) scale(1.04);
          border-color: rgba(201, 169, 110, 0.45);
          box-shadow: 0 14px 24px rgba(26, 26, 26, 0.08), inset 0 1px 0 rgba(255,255,255,0.45);
        }

        .service-icon svg,
        .social-icon svg,
        .whatsapp-icon svg {
          width: 100%;
          height: 100%;
        }

        .service-icon svg path,
        .service-icon svg circle,
        .social-icon svg path,
        .social-icon svg rect,
        .social-icon svg circle,
        .whatsapp-icon svg path {
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .service-icon svg path,
        .service-icon svg circle {
          stroke-width: 2.2;
        }

        .social-icon,
        .whatsapp-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .social-link .social-icon {
          width: 20px;
          height: 20px;
        }

        .social-link .social-icon svg {
          color: currentColor;
          stroke-width: 1.9;
        }

        .social-link .social-icon svg rect,
        .social-link .social-icon svg circle,
        .social-link .social-icon svg path {
          fill: none;
          stroke: currentColor;
        }

        .whatsapp-button .whatsapp-icon {
          width: 18px;
          height: 18px;
          color: currentColor;
        }

        .whatsapp-button .whatsapp-icon svg {
          stroke-width: 1.9;
        }

        .service-card h3,
        .testimonial-card h3 {
          margin: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        .service-card p {
          margin: 0;
          line-height: 1.8;
          color: rgba(26, 26, 26, 0.72);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-xl);
          min-height: 250px;
          border: 1px solid rgba(201, 169, 110, 0.22);
          background: linear-gradient(135deg, rgba(250,248,245,0.6), rgba(201,169,110,0.08));
          box-shadow: var(--shadow);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease, filter 240ms ease;
        }

        .gallery-item:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 24px 56px rgba(26, 26, 26, 0.12);
          border-color: rgba(201, 169, 110, 0.38);
          filter: saturate(1.03);
        }

        .gallery-item svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .gallery-caption {
          position: absolute;
          left: 18px;
          bottom: 18px;
          z-index: 2;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(26, 26, 26, 0.58);
          color: var(--cream);
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
        }

        .about-grid {
          display: grid;
          gap: 20px;
          align-items: center;
        }

        .about-copy {
          padding: 26px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(26, 26, 26, 0.08);
          box-shadow: var(--shadow);
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .about-copy:hover {
          transform: translateY(-4px);
          border-color: rgba(201, 169, 110, 0.28);
          box-shadow: 0 24px 56px rgba(26, 26, 26, 0.09);
        }

        .about-copy p {
          margin: 0 0 14px;
          line-height: 1.9;
          color: rgba(26, 26, 26, 0.76);
          font-size: 1.02rem;
        }

        .about-copy p:last-child {
          margin-bottom: 0;
        }

        .about-visual {
          min-height: 360px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid rgba(201, 169, 110, 0.22);
          background: linear-gradient(145deg, rgba(250,248,245,0.9), rgba(201,169,110,0.08));
          box-shadow: var(--shadow);
          transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
        }

        .about-visual:hover {
          transform: translateY(-5px) scale(1.01);
          border-color: rgba(201, 169, 110, 0.36);
          box-shadow: 0 26px 60px rgba(26, 26, 26, 0.12);
        }

        .about-visual svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .testimonials-grid {
          display: grid;
          gap: 18px;
        }

        .testimonial-card {
          padding: 26px;
          position: relative;
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(201, 169, 110, 0.3);
          box-shadow: 0 24px 56px rgba(26, 26, 26, 0.1);
        }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          color: var(--gold);
          font-size: 4.8rem;
          line-height: 0.8;
          margin-bottom: 8px;
          display: inline-block;
        }

        .testimonial-card p {
          margin: 0 0 18px;
          line-height: 1.9;
          color: rgba(26, 26, 26, 0.76);
        }

        .testimonial-card strong {
          font-size: 0.88rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.88);
        }

        .footer {
          padding: 18px 0 44px;
        }

        .contact-panel {
          display: grid;
          gap: 18px;
          padding: 26px;
          border-radius: 30px;
          border: 1px solid rgba(26, 26, 26, 0.08);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.52), rgba(250,248,245,0.94)),
            radial-gradient(circle at right top, rgba(201,169,110,0.14), transparent 40%);
          box-shadow: var(--shadow);
        }

        .contact-info {
          display: grid;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(26, 26, 26, 0.78);
          line-height: 1.65;
        }

        .contact-label {
          min-width: 110px;
          font-size: 0.8rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.58);
          padding-top: 2px;
        }

        .socials {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(26, 26, 26, 0.12);
          background: rgba(255,255,255,0.46);
          color: var(--charcoal);
          transition: transform 200ms ease, color 200ms ease, border-color 200ms ease, background 200ms ease;
        }

        .social-link:hover {
          transform: translateY(-3px) scale(1.05);
          color: var(--gold);
          border-color: rgba(201, 169, 110, 0.35);
          background: rgba(255,255,255,0.8);
        }

        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 0 18px;
          border-radius: 999px;
          background: linear-gradient(180deg, #25D366, #1FA855);
          color: white;
          text-decoration: none;
          width: fit-content;
          box-shadow: 0 14px 28px rgba(31, 168, 85, 0.28);
          transition: transform 200ms ease, box-shadow 200ms ease, filter 200ms ease;
        }

        .whatsapp-button:hover {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 18px 34px rgba(31, 168, 85, 0.34);
          filter: brightness(1.03);
        }

        .whatsapp-icon {
          width: 18px;
          height: 18px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
          color: rgba(26, 26, 26, 0.56);
          font-size: 0.92rem;
        }

        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .art-line {
          stroke: rgba(201, 169, 110, 0.95);
          stroke-width: 1.2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .art-fill {
          fill: rgba(201, 169, 110, 0.1);
          stroke: rgba(201, 169, 110, 0.4);
          stroke-width: 1;
        }

        @media (min-width: 720px) {
          .nav-links {
            display: flex;
          }

          .menu-button {
            display: none;
          }

          .hero-shell {
            min-height: 78vh;
          }

          .grid-services {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .about-grid {
            grid-template-columns: 1.05fr 0.95fr;
          }

          .testimonials-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .contact-panel {
            grid-template-columns: 1.1fr 0.9fr;
            align-items: center;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 719px) {
          .hero {
            min-height: auto;
            padding-top: 22px;
          }

          .hero-shell {
            min-height: 70vh;
            border-radius: 26px;
          }

          .section {
            padding: 58px 0;
          }

          .contact-label {
            min-width: 86px;
          }

          .container {
            width: min(100% - 20px, 1180px);
          }

          .nav-inner {
            padding: 14px 0;
          }

          .brand strong {
            font-size: 1.35rem;
          }

          .brand span {
            font-size: 0.74rem;
            letter-spacing: 0.18em;
          }

          .hero-content {
            padding: 36px 16px;
          }

          .hero h1 {
            font-size: clamp(2.7rem, 16vw, 4.2rem);
          }

          .hero p {
            font-size: clamp(1rem, 4.5vw, 1.25rem);
            max-width: 28rem;
          }

          .button {
            width: 100%;
            max-width: 320px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .section-header h2 {
            font-size: clamp(2rem, 9vw, 2.8rem);
          }

          .service-card,
          .testimonial-card,
          .about-copy,
          .contact-panel {
            padding: 20px;
          }

          .service-card {
            min-height: 0;
          }

          .service-icon {
            width: 68px;
            height: 68px;
          }

          .service-card h3 {
            font-size: 1.55rem;
          }

          .gallery-item,
          .about-visual {
            min-height: 220px;
          }

          .quote-mark {
            font-size: 4rem;
          }

          .contact-item {
            flex-direction: column;
            gap: 4px;
          }

          .contact-label {
            min-width: 0;
            padding-top: 0;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 420px) {
          .hero-shell {
            min-height: 66vh;
          }

          .hero h1 {
            font-size: clamp(2.35rem, 17vw, 3.4rem);
          }

          .hero p {
            font-size: 1rem;
          }

          .button {
            max-width: 100%;
          }

          .gallery-caption {
            left: 12px;
            bottom: 12px;
            font-size: 0.7rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .whatsapp-button {
            width: 100%;
          }
        }
      `}</style>

      <div className="lumiere-page">
        <header className="nav">
          <div className="container">
            <div className="nav-inner">
              <a href="#hero" className="brand" onClick={() => setMenuOpen(false)}>
                <strong>Lumière</strong>
                <span>Beauty Studio</span>
              </a>

              <nav className="nav-links" aria-label="Navegación principal">
                {sections.map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                className="menu-button"
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span className="menu-icon" aria-hidden="true">
                  <span style={{ transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
                  <span style={{ opacity: menuOpen ? 0 : 1 }} />
                  <span style={{ transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
                </span>
              </button>
            </div>

            <div className={`mobile-panel ${menuOpen ? 'open' : ''}`}>
              {sections.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="hero">
            <div className="container">
              <div className="hero-shell">
                <div className="hero-art" aria-hidden="true">
                  <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="frameGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.95" />
                        <stop offset="45%" stopColor="#E6D2A7" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.95" />
                      </linearGradient>
                      <linearGradient id="frameSoft" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FAF8F5" stopOpacity="0" />
                        <stop offset="50%" stopColor="#FAF8F5" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <rect width="1440" height="900" fill="url(#frameSoft)" />
                    <path d="M180 110h1080M180 790h1080M110 180v540M1330 180v540" className="art-line" opacity="0.32" />
                    <path d="M240 150h960v600H240z" fill="none" stroke="url(#frameGold)" strokeWidth="2" />
                    <path d="M300 210h840v480H300z" fill="none" stroke="rgba(201,169,110,0.55)" strokeWidth="1.4" />
                    <path d="M190 105l65 65M1250 105l-65 65M190 795l65-65M1250 795l-65-65" className="art-line" />
                    <path d="M260 150l-30 30M1180 150l30 30M260 750l-30-30M1180 750l30-30" className="art-line" opacity="0.8" />
                    <path d="M720 160c85 0 156 39 192 102-45-29-113-47-192-47s-147 18-192 47c36-63 107-102 192-102z" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.42)" />
                    <path d="M720 740c85 0 156-39 192-102-45 29-113 47-192 47s-147-18-192-47c36 63 107 102 192 102z" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.42)" />
                    <circle cx="720" cy="450" r="210" fill="none" stroke="rgba(201,169,110,0.24)" strokeWidth="1.2" />
                    <circle cx="720" cy="450" r="155" fill="none" stroke="rgba(201,169,110,0.18)" strokeWidth="1" />
                    <path d="M700 310c-36 31-50 72-50 114 0 38 15 74 49 101 22 17 46 26 71 26 25 0 49-9 71-26 34-27 49-63 49-101 0-42-14-83-50-114" className="art-line" opacity="0.4" />
                    <path d="M646 480c30-40 74-60 74-96 0 36 44 56 74 96" className="art-line" opacity="0.72" />
                    <path d="M600 560c72 26 168 26 240 0" className="art-line" opacity="0.32" />
                    <path d="M520 265c40-18 88-28 200-28s160 10 200 28" className="art-line" opacity="0.24" />
                  </svg>
                </div>

                <div className="hero-content">
                  <div>
                    <div className="eyebrow">Luxury Beauty Rituals</div>
                    <h1>Lumière<br />Beauty Studio</h1>
                    <p>Elegancia silenciosa, belleza precisa y una experiencia diseñada para brillar con naturalidad.</p>
                    <div className="hero-actions">
                      <a href="#contacto" className="button button-primary">Reservar Cita</a>
                      <a href="#servicios" className="button button-secondary">Ver Servicios</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="servicios">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Servicios</h2>
                <p>Tratamientos pensados para realzar tu imagen con una estética sobria, impecable y atemporal.</p>
              </div>

              <div className="grid-services">
                {services.map((service, index) => (
                  <article className="card service-card reveal" ref={setRevealRef} key={service.name} style={{ transitionDelay: `${index * 90}ms` }}>
                    <div className="service-icon">{service.icon}</div>
                    <div>
                      <h3>{service.name}</h3>
                    </div>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="galeria">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Galería</h2>
                <p>Composiciones visuales con presencia editorial, creadas como placeholders elegantes para mostrar transformaciones y acabados.</p>
              </div>

              <div className="gallery-grid">
                {[
                  'Antes / Después - Corte',
                  'Antes / Después - Color',
                  'Antes / Después - Brillo',
                  'Antes / Después - Styling',
                ].map((caption, index) => (
                  <div className="gallery-item reveal" ref={setRevealRef} key={caption} style={{ transitionDelay: `${index * 80}ms` }}>
                    <svg viewBox="0 0 800 540" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id={`g-bg-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FAF8F5" />
                          <stop offset="55%" stopColor="#F2E7D3" />
                          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.6" />
                        </linearGradient>
                        <linearGradient id={`g-hair-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.28" />
                          <stop offset="60%" stopColor="#1A1A1A" stopOpacity="0.54" />
                          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.16" />
                        </linearGradient>
                        <linearGradient id={`g-gold-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#E7D2A5" stopOpacity="0.55" />
                        </linearGradient>
                      </defs>
                      <rect width="800" height="540" fill={`url(#g-bg-${index})`} />
                      <circle cx="640" cy="120" r="200" fill="rgba(255,255,255,0.16)" />
                      <circle cx="170" cy="430" r="170" fill="rgba(255,255,255,0.12)" />
                      <path d="M106 90h588M106 450h588M90 106v328M710 106v328" fill="none" stroke="rgba(26,26,26,0.16)" strokeWidth="1" />
                      <path d="M140 80h520M140 460h520M80 140v260M720 140v260" fill="none" stroke="url(#g-gold-${index})" strokeWidth="1.3" opacity="0.72" />
                      <path d="M400 102c58 41 96 104 96 172 0 92-53 160-96 214-43-54-96-122-96-214 0-68 38-131 96-172z" fill="url(#g-hair-${index})" />
                      <path d="M376 116c-16 40-25 82-25 118 0 43 11 83 33 120 14 24 32 44 48 66 18-24 36-44 49-68 21-38 32-76 32-118 0-36-8-77-25-117" fill="none" stroke="rgba(26,26,26,0.62)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M330 184c32-18 65-28 70-28 5 0 38 10 70 28" fill="none" stroke="rgba(26,26,26,0.46)" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M320 246c38 16 57 24 80 24 23 0 42-8 80-24" fill="none" stroke="rgba(26,26,26,0.42)" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M300 320c52 28 98 41 100 41 2 0 48-13 100-41" fill="none" stroke="rgba(26,26,26,0.36)" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M214 120c20 10 36 26 46 45M586 120c-20 10-36 26-46 45M214 420c20-10 36-26 46-45M586 420c20-10 36-26-46-45" className="art-line" opacity="0.72" />
                      <path d="M120 258c58-28 114-42 160-42M520 174c57 0 113 13 160 42M120 282c55 24 110 36 160 36M520 258c50 0 105 12 160 36" className="art-line" opacity="0.22" />
                      <path d="M400 84c26 16 46 37 58 58-24-10-40-15-58-15s-34 5-58 15c12-21 32-42 58-58z" fill="rgba(201,169,110,0.12)" stroke="rgba(201,169,110,0.36)" />
                    </svg>
                    <div className="gallery-caption">{caption}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="nosotros">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Sobre Nosotros</h2>
                <p>Una casa de belleza inspirada en el lujo discreto, el detalle artesanal y la estética contemporánea.</p>
              </div>

              <div className="about-grid">
                <div className="about-copy reveal" ref={setRevealRef}>
                  <p>
                    En Lumière Beauty Studio combinamos técnica precisa con una visión refinada de la belleza. Cada cita está pensada para ofrecer calma, asesoría experta y resultados impecables.
                  </p>
                  <p>
                    Trabajamos con una experiencia minimalista y cálida, donde cada gesto, textura y acabado habla de elegancia.
                  </p>
                </div>

                <div className="about-visual reveal" ref={setRevealRef}>
                  <svg viewBox="0 0 760 520" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="aboutBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FAF8F5" />
                        <stop offset="60%" stopColor="#F4E9D6" />
                        <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.52" />
                      </linearGradient>
                      <linearGradient id="hairFlow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.72" />
                        <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0.34" />
                      </linearGradient>
                    </defs>
                    <rect width="760" height="520" fill="url(#aboutBg)" />
                    <circle cx="590" cy="110" r="150" fill="rgba(255,255,255,0.2)" />
                    <path d="M132 92h496M132 428h496M92 132v256M668 132v256" fill="none" stroke="rgba(201,169,110,0.35)" strokeWidth="1.2" />
                    <path d="M280 412c22-62 38-96 47-102 9-6 21-9 33-9s24 3 33 9c9 6 25 40 47 102" fill="rgba(26,26,26,0.08)" stroke="rgba(26,26,26,0.46)" strokeWidth="2" />
                    <path d="M260 235c0-68 49-123 110-123s110 55 110 123c0 39-15 72-41 95-21 18-45 26-69 26s-48-8-69-26c-26-23-41-56-41-95z" fill="rgba(255,255,255,0.38)" stroke="rgba(26,26,26,0.42)" strokeWidth="2" />
                    <path d="M240 180c18-64 71-98 130-98 60 0 114 35 130 98-34-18-67-27-99-27-18 0-33 3-31 3s-13-3-31-3c-32 0-65 9-99 27z" fill="url(#hairFlow)" opacity="0.9" />
                    <path d="M252 214c16-34 52-60 98-68 7-1 13-2 20-2 7 0 13 1 20 2 46 8 82 34 98 68-26-11-57-17-90-17-19 0-28 2-28 2s-9-2-28-2c-33 0-64 6-90 17z" fill="none" stroke="rgba(201,169,110,0.58)" strokeWidth="1.4" />
                    <path d="M308 246c10 9 31 16 72 16 40 0 61-7 72-16" className="art-line" opacity="0.9" />
                    <path d="M331 296c10 6 25 9 49 9 24 0 39-3 49-9" className="art-line" opacity="0.82" />
                    <path d="M258 362c39 16 79 24 120 24s81-8 120-24" className="art-line" opacity="0.34" />
                    <path d="M184 100c28 12 47 34 57 63M576 100c-28 12-47 34-57 63M184 420c28-12 47-34 57-63M576 420c-28-12-47-34-57-63" className="art-line" opacity="0.62" />
                    <path d="M400 78c20 8 39 18 56 34-17 4-36 6-56 6s-39-2-56-6c17-16 36-26 56-34z" fill="rgba(201,169,110,0.16)" stroke="rgba(201,169,110,0.48)" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="testimonios">
            <div className="container">
              <div className="section-header reveal" ref={setRevealRef}>
                <h2>Testimonios</h2>
                <p>Comentarios de clientas que buscaban una experiencia sofisticada, coherente y memorable.</p>
              </div>

              <div className="testimonials-grid">
                {testimonials.map((item, index) => (
                  <article className="card testimonial-card reveal" ref={setRevealRef} key={item.name} style={{ transitionDelay: `${index * 70}ms` }}>
                    <div className="quote-mark">“</div>
                    <p>{item.text}</p>
                    <strong>{item.name}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <footer className="footer" id="contacto">
            <div className="container">
              <div className="contact-panel reveal" ref={setRevealRef}>
                <div>
                  <div className="section-header" style={{ marginBottom: 18 }}>
                    <h2>Contacto</h2>
                    <p>Agenda tu visita y vive una experiencia de belleza elegante, cómoda y personalizada.</p>
                  </div>

                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="contact-label">Horario</div>
                      <div>Lunes a Sábado · 10:00 - 19:30</div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-label">Teléfono</div>
                      <div>+52 55 1234 5678</div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-label">Redes</div>
                      <div className="socials" aria-label="Redes sociales">
                        <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                          <span className="social-icon">{socialIcons.instagram}</span>
                        </a>
                        <a className="social-link" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                          <span className="social-icon">{socialIcons.facebook}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: 16 }}>
                  <a
                    className="whatsapp-button"
                    href="https://wa.me/525512345678"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Reservar por WhatsApp"
                  >
                    <span className="whatsapp-icon">{socialIcons.whatsapp}</span>
                    Reservar por WhatsApp
                  </a>

                  <div
                    style={{
                      borderRadius: 24,
                      border: '1px solid rgba(26,26,26,0.08)',
                      background: 'linear-gradient(135deg, rgba(250,248,245,0.9), rgba(201,169,110,0.08))',
                      padding: 18,
                      lineHeight: 1.8,
                      color: 'rgba(26,26,26,0.72)',
                    }}
                  >
                    <strong style={{ display: 'block', color: '#1A1A1A', marginBottom: 8, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.82rem' }}>
                      Lumière Beauty Studio
                    </strong>
                    Dirección ficticia para demo editorial. Diseño responsive, elegante y listo para conectar con tu contenido real.
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <span>© 2026 Lumière Beauty Studio</span>
                <span>Minimal Luxury Beauty Experience</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
