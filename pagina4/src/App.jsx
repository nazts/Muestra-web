import React, { useEffect, useMemo, useRef, useState } from 'react';

const imagenes = {
  hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  corte: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  corteAutor1: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
  corteAutor2: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80',
  corteAutor3: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80',
  corteAutor4: 'https://images.unsplash.com/photo-1582095133179-bfd08e2d0008?w=600&q=80',
  corteAutor5: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80',
  corteServicio: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
  color: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
  colorServicio: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80',
  tratamiento: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
  tratamientoServicio: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  galeria1: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&q=80',
  galeria2: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&q=80',
  galeria3: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80',
  galeria4: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=500&q=80',
  avatar1: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  avatar2: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  avatar3: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
};

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotras', href: '#nosotras' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
];

const brands = ["L'Oréal", 'Kérastase', 'Redken', 'Wella'];

const services = [
  {
    title: 'Corte de Autor',
    description: 'Diseño visagista, forma precisa y acabado pulido para un look moderno y fácil de peinar.',
    price: '$45',
    image: imagenes.corteAutor5,
    alt: 'Estilista realizando un corte de cabello profesional',
  },
  {
    title: 'Coloración Signature',
    description: 'Balayage, gloss y tonos personalizados para lograr brillo profundo y dimensión elegante.',
    price: '$78',
    image: imagenes.colorServicio,
    alt: 'Aplicación de coloración en cabello rubio',
  },
  {
    title: 'Tratamiento Lumina',
    description: 'Nutrición intensa, reparación de fibra y sellado de cutícula para recuperar suavidad y fuerza.',
    price: '$62',
    image: imagenes.tratamientoServicio,
    alt: 'Tratamiento capilar con producto aplicado en cabello',
  },
];

const gallery = [
  { src: imagenes.galeria1, alt: 'Peinado sofisticado con ondas suaves' },
  { src: imagenes.galeria2, alt: 'Styling de cabello con acabado editorial' },
  { src: imagenes.galeria3, alt: 'Mujer con look de salón moderno' },
  { src: imagenes.galeria4, alt: 'Cabello brillante con estilo de moda 2025' },
  { src: imagenes.corteAutor1, alt: 'Corte autor: estilista cortando con precisión' },
  { src: imagenes.corteAutor2, alt: 'Corte autor: bob preciso' },
  { src: imagenes.corteAutor3, alt: 'Corte autor: tijeras profesionales detalle' },
  { src: imagenes.corteAutor4, alt: 'Corte autor: detalle de cabello fino' },
  { src: imagenes.corteAutor5, alt: 'Corte autor: resultado final corte moderno' },
  { src: imagenes.corteServicio, alt: 'Corte moderno y detalle de textura' },
  { src: imagenes.colorServicio, alt: 'Coloración con acabado luminoso' },
  { src: imagenes.tratamientoServicio, alt: 'Tratamiento nutritivo y brillo intenso' },
];

const testimonials = [
  {
    name: 'Mariana P.',
    role: 'Clienta frecuente',
    text: 'La atención fue impecable y el resultado superó todo lo que imaginaba. Salí con el cabello más brillante y con una vibra de lujo total.',
    avatar: imagenes.avatar1,
  },
  {
    name: 'Daniela R.',
    role: 'Balayage & color',
    text: 'Me asesoraron con mucha precisión. El color quedó natural, luminoso y exactamente como lo quería.',
    avatar: imagenes.avatar2,
  },
  {
    name: 'Sofía L.',
    role: 'Tratamiento premium',
    text: 'Cada detalle transmite profesionalismo. La experiencia fue relajante, elegante y muy cuidada desde que entré.',
    avatar: imagenes.avatar3,
  },
];

const statsTargets = [
  { label: 'Clientas', value: 500, suffix: '+' },
  { label: 'Años', value: 8, suffix: '' },
  { label: 'Servicios', value: 15, suffix: '' },
  { label: 'Valoración', value: 4.9, suffix: '★', decimals: 1 },
];

function useIntersectionReveal() {
  const [visibleMap, setVisibleMap] = useState({});
  const refs = useRef({});

  const setSectionRef = (key) => (node) => {
    if (node) refs.current[key] = node;
  };

  useEffect(() => {
    const elements = Object.entries(refs.current).map(([key, node]) => ({ key, node }));
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute('data-section-key');
            if (!key) return;
            setVisibleMap((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach(({ key, node }) => {
      node.setAttribute('data-section-key', key);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return { visibleMap, setSectionRef };
}

function useCountUp(active) {
  const [values, setValues] = useState(statsTargets.map(() => 0));

  useEffect(() => {
    if (!active) return undefined;

    const steps = 70;
    let tick = 0;

    const interval = window.setInterval(() => {
      tick += 1;
      const progress = Math.min(tick / steps, 1);
      setValues(
        statsTargets.map((item) => {
          const current = item.value * progress;
          return item.decimals === 1 ? Number(current.toFixed(1)) : Math.round(current);
        })
      );

      if (tick >= steps) window.clearInterval(interval);
    }, 24);

    return () => window.clearInterval(interval);
  }, [active]);

  return values;
}

function SmartImage({ src, alt, className = '', imageClassName = '', fallbackClassName = '', loading = 'lazy' }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  useEffect(() => {
    const image = imageRef.current;
    if (image && image.complete && image.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`smart-image ${className} ${loaded ? 'is-loaded' : ''} ${failed ? 'is-failed' : ''}`.trim()}>
      {!loaded && !failed && <div className="image-skeleton" aria-hidden="true" />}
      {!failed ? (
        <img
          ref={imageRef}
          className={imageClassName}
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`image-fallback ${fallbackClassName}`.trim()} aria-hidden="true">
          <svg viewBox="0 0 240 180" role="img" aria-label="Imagen no disponible">
            <rect x="0" y="0" width="240" height="180" rx="24" fill="#F3EAE5" />
            <circle cx="92" cy="78" r="28" fill="#A8D8C8" opacity="0.32" />
            <path d="M48 138c20-25 42-38 72-38s52 13 72 38" fill="none" stroke="#A8D8C8" strokeWidth="6" strokeLinecap="round" />
            <path d="M80 64c8-8 17-12 28-12 14 0 25 5 35 15" fill="none" stroke="#F5A39A" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function IconButton({ children, href, outline = false }) {
  return (
    <a className={`btn ${outline ? 'btn-outline' : 'btn-solid'}`} href={href}>
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.76 13.53L3 21l4.64-1.19A9 9 0 1 0 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.3 8.7c.2-.4.5-.5.8-.5h.7c.3 0 .5.1.6.4l.8 1.9c.1.3 0 .5-.1.7l-.6.7c-.2.2-.2.5 0 .8.7 1.1 1.7 2 2.8 2.6.3.1.6.1.8-.1l.7-.6c.2-.1.4-.2.7-.1l1.9.8c.3.1.4.3.4.5v.7c0 .3-.1.5-.4.7-.5.3-1.2.5-1.9.5-4.7 0-8.5-3.8-8.5-8.5 0-.7.2-1.3.5-1.8Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8.5V7c0-1.1.9-2 2-2h2V2h-3c-2.8 0-5 2.2-5 5v1.5H8V13h2v9h4v-9h3l1-4.5h-4Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.76 13.53L3 21l4.64-1.19A9 9 0 1 0 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9.3 8.7c.2-.4.5-.5.8-.5h.7c.3 0 .5.1.6.4l.8 1.9c.1.3 0 .5-.1.7l-.6.7c-.2.2-.2.5 0 .8.7 1.1 1.7 2 2.8 2.6.3.1.6.1.8-.1l.7-.6c.2-.1.4-.2.7-.1l1.9.8c.3.1.4.3.4.5v.7c0 .3-.1.5-.4.7-.5.3-1.2.5-1.9.5-4.7 0-8.5-3.8-8.5-8.5 0-.7.2-1.3.5-1.8Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [galleryLargeIndex, setGalleryLargeIndex] = useState(0);
  const { visibleMap, setSectionRef } = useIntersectionReveal();
  const statsValues = useCountUp(statsVisible);
  const statsSectionRef = useRef(null);

  const socialLinks = useMemo(
    () => [
      { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
      { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
      { label: 'WhatsApp', href: 'https://wa.me/0000000000', icon: 'whatsapp' },
    ],
    []
  );

  useEffect(() => {
    document.title = 'Beauty Salon';
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const node = statsSectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStatsVisible(true);
        });
      },
      { threshold: 0.32 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryLargeIndex((i) => (i + 1) % gallery.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const countItems = statsTargets.map((item, index) => ({
    ...item,
    renderedValue: statsValues[index],
  }));

  

  return (
    <div className="page-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,700&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        :root {
          --cream: #FFF9F6;
          --emerald: #A8D8C8;
          --coral: #F5A39A;
          --ink: #3E3A38;
          --muted: rgba(62, 58, 56, 0.68);
          --line: rgba(62, 58, 56, 0.1);
          --shadow-lg: 0 30px 80px rgba(117, 98, 92, 0.12);
          --shadow-md: 0 18px 40px rgba(117, 98, 92, 0.08);
          --radius-xl: 34px;
          --radius-lg: 26px;
          --radius-md: 18px;
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
            radial-gradient(circle at top left, rgba(168, 216, 200, 0.24), transparent 26%),
            radial-gradient(circle at 80% 20%, rgba(245, 163, 154, 0.2), transparent 22%),
            linear-gradient(180deg, #FFFFFF 0%, var(--cream) 100%);
          color: var(--ink);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
        }

        img {
          display: block;
          width: 100%;
        }

        .page-shell {
          position: relative;
          min-height: 100vh;
        }

        .page-shell::before,
        .page-shell::after {
          content: '';
          position: fixed;
          inset: auto;
          width: 34vw;
          height: 34vw;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(16px);
          opacity: 0.16;
          z-index: 0;
        }

        .page-shell::before {
          top: 6vh;
          left: -14vw;
          background: radial-gradient(circle, rgba(168, 216, 200, 0.48), transparent 70%);
        }

        .page-shell::after {
          bottom: 6vh;
          right: -14vw;
          background: radial-gradient(circle, rgba(245, 163, 154, 0.42), transparent 70%);
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
          transition: background 220ms ease, box-shadow 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease;
          background: rgba(250, 250, 247, 0.72);
          border-bottom: 1px solid transparent;
        }

        .nav.is-scrolled {
          background: rgba(250, 250, 247, 0.82);
          backdrop-filter: blur(18px);
          border-bottom-color: rgba(26, 26, 26, 0.08);
          box-shadow: 0 8px 24px rgba(26, 26, 26, 0.05);
        }

        .nav-inner {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          align-items: center;
          padding: 18px 0;
        }

        .brand {
          text-decoration: none;
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }

        .brand strong {
          font-family: 'Fraunces', serif;
          font-size: 1.6rem;
          letter-spacing: 0.03em;
          font-weight: 700;
        }

        .brand span {
          font-size: 0.74rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .nav-center {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .nav-center a {
          position: relative;
          text-decoration: none;
          color: rgba(26, 26, 26, 0.78);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .nav-center a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--emerald), transparent);
          transform: scaleX(0);
          transition: transform 200ms ease;
          transform-origin: center;
        }

        .nav-center a:hover::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: inline-flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease, color 220ms ease, border-color 220ms ease;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-solid {
          background: var(--coral);
          color: white;
          box-shadow: 0 16px 34px rgba(255, 107, 53, 0.26);
        }

        .btn-solid:hover {
          box-shadow: 0 18px 38px rgba(255, 107, 53, 0.32);
        }

        .btn-outline {
          border-color: rgba(26, 26, 26, 0.15);
          background: rgba(255, 255, 255, 0.56);
          color: var(--ink);
        }

        .mobile-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          border: 1px solid rgba(26, 26, 26, 0.12);
          background: rgba(255, 255, 255, 0.62);
          color: var(--ink);
          box-shadow: 0 8px 20px rgba(26, 26, 26, 0.06);
        }

        .mobile-toggle svg {
          width: 22px;
          height: 22px;
        }

        .mobile-panel {
          padding: 0 0 18px;
          display: grid;
          gap: 8px;
        }

        .mobile-panel a,
        .mobile-panel .btn {
          width: 100%;
        }

        .mobile-panel a.link {
          text-decoration: none;
          padding: 12px 0;
          border-top: 1px solid rgba(26, 26, 26, 0.08);
          font-weight: 600;
          color: var(--ink);
        }

        .hero {
          padding: 34px 0 18px;
        }

        .hero-grid {
          display: grid;
          gap: 28px;
          align-items: center;
        }

        .hero-copy,
        .hero-media,
        .section-observe,
        .stats-section,
        .cta-section,
        .footer {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 750ms ease, transform 750ms ease;
        }

        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-copy,
        .hero-media {
          opacity: 0;
        }

        .is-visible .hero-copy {
          animation: fadeInLeft 0.95s ease forwards;
        }

        .is-visible .hero-media {
          animation: fadeInRight 1s ease forwards;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(26, 92, 74, 0.08);
          color: var(--emerald);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero h1 {
          margin: 0;
          font-family: 'Fraunces', serif;
          font-size: clamp(2.9rem, 7vw, 5.9rem);
          line-height: 0.96;
          letter-spacing: -0.03em;
          max-width: 11ch;
        }

        .hero p {
          margin: 18px 0 0;
          color: var(--muted);
          font-size: 1.03rem;
          line-height: 1.75;
          max-width: 58ch;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .hero-meta {
          display: grid;
          gap: 12px;
          margin-top: 26px;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--ink);
          font-weight: 600;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(26, 26, 26, 0.08);
          border-radius: 999px;
          padding: 12px 16px;
          width: fit-content;
          box-shadow: 0 10px 22px rgba(26, 26, 26, 0.05);
        }

        .meta-pill svg {
          width: 18px;
          height: 18px;
          color: var(--coral);
        }

        .hero-media {
          position: relative;
          padding: 16px;
          background: linear-gradient(180deg, rgba(26, 92, 74, 0.15), rgba(26, 92, 74, 0.06));
          border-radius: var(--radius-xl);
        }

        .hero-frame {
          position: relative;
          border-radius: calc(var(--radius-xl) - 8px);
          background: var(--emerald);
          padding: 18px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .hero-frame::before {
          content: '';
          position: absolute;
          inset: auto -12% -18% auto;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.22), transparent 68%);
          pointer-events: none;
        }

        .hero-image {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          min-height: 420px;
          box-shadow: 0 26px 60px rgba(0, 0, 0, 0.14);
        }

        .hero-image .smart-image,
        .service-card .smart-image,
        .gallery-item .smart-image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero-image img,
        .service-image img,
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .smart-image {
          overflow: hidden;
          background: #F4EDEA;
        }

        .smart-image.is-loaded .image-skeleton,
        .smart-image.is-loaded .image-fallback {
          opacity: 0;
          pointer-events: none;
        }

        .image-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #EFE5E2 0%, #FAF4F2 45%, #EFE5E2 100%);
          background-size: 200% 100%;
          animation: shimmer 1.4s linear infinite;
          z-index: 1;
        }

        .image-fallback {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          background: #F7EFEC;
          z-index: 1;
        }

        .image-fallback svg {
          width: min(100%, 280px);
          height: auto;
        }

        .hero-badge {
          position: absolute;
          right: 22px;
          bottom: 22px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(250, 250, 247, 0.95);
          color: var(--ink);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);
          animation: floatBadge 3.2s ease-in-out infinite;
          font-weight: 700;
        }

        .hero-badge svg {
          width: 18px;
          height: 18px;
          color: var(--coral);
        }

        .social-proof {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--muted);
          font-size: 0.95rem;
          flex-wrap: wrap;
        }

        .social-proof strong {
          color: var(--ink);
        }

        .avatars {
          display: inline-flex;
        }

        .avatars span {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 2px solid var(--cream);
          margin-left: -10px;
          background-size: cover;
          background-position: center;
        }

        .avatars span:first-child {
          margin-left: 0;
        }

        .marquee-section,
        .services-section,
        .gallery-section,
        .stats-section,
        .testimonials-section,
        .cta-section {
          padding: 78px 0 0;
        }

        .section-title {
          max-width: 760px;
          margin-bottom: 28px;
        }

        .section-title span {
          display: inline-flex;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(26, 92, 74, 0.08);
          color: var(--emerald);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .section-title h2 {
          margin: 0;
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4.6vw, 3.6rem);
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .section-title p {
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .marquee-shell {
          overflow: hidden;
          border-top: 1px solid rgba(26, 26, 26, 0.08);
          border-bottom: 1px solid rgba(26, 26, 26, 0.08);
          background: rgba(255, 255, 255, 0.6);
          padding: 18px 0;
          border-radius: 24px;
        }

        .marquee {
          display: flex;
          width: max-content;
          gap: 28px;
          animation: marquee 22s linear infinite;
          align-items: center;
        }

        .brand-chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(250, 250, 247, 0.84);
          border: 1px solid rgba(26, 26, 26, 0.08);
          color: var(--ink);
          font-weight: 700;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .brand-chip::before {
          content: '•';
          color: var(--coral);
        }

        .services-grid {
          display: grid;
          gap: 18px;
        }

        .service-card {
          overflow: hidden;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(26, 26, 26, 0.08);
          box-shadow: 0 12px 30px rgba(26, 26, 26, 0.05);
          transition: transform 300ms ease, box-shadow 300ms ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 26px 46px rgba(26, 26, 26, 0.12);
        }

        .service-image {
          height: 260px;
          overflow: hidden;
        }

        .service-content {
          padding: 20px 20px 22px;
        }

        .service-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 10px;
        }

        .service-top h3 {
          margin: 0;
          font-family: 'Fraunces', serif;
          font-size: 1.55rem;
          line-height: 1.1;
        }

        .price-tag {
          display: inline-flex;
          align-items: center;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(26, 92, 74, 0.1);
          color: var(--emerald);
          font-weight: 800;
          white-space: nowrap;
        }

        .service-content p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        /* Collage gallery: mobile -> horizontal snap slider; desktop -> mosaic grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          background: #E9E4DE;
          box-shadow: 0 12px 28px rgba(26, 26, 26, 0.08);
        }

        /* Ensure images cover their tile */
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transition: transform 360ms ease;
        }

        .gallery-item img,
        .service-image img,
        .hero-image img {
          transition: transform 360ms ease;
        }

        .gallery-item:hover img,
        .service-card:hover .service-image img {
          transform: scale(1.06);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .stat-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(26, 26, 26, 0.08);
          box-shadow: 0 12px 28px rgba(26, 26, 26, 0.05);
          text-align: center;
        }

        .stat-card strong {
          display: block;
          font-family: 'Fraunces', serif;
          font-size: clamp(2.1rem, 4vw, 3.2rem);
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--ink);
        }

        .stat-card span {
          display: block;
          margin-top: 8px;
          color: var(--muted);
          font-weight: 600;
        }

        .testimonials-grid {
          display: grid;
          gap: 16px;
        }

        .testimonial-card {
          padding: 22px;
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(26, 26, 26, 0.08);
          box-shadow: 0 12px 30px rgba(26, 26, 26, 0.05);
        }

        .testimonial-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .testimonial-head img {
          width: 54px;
          height: 54px;
          border-radius: 999px;
          object-fit: cover;
          border: 2px solid rgba(26, 92, 74, 0.16);
        }

        .testimonial-head strong {
          display: block;
          font-size: 1rem;
        }

        .testimonial-head span {
          display: block;
          margin-top: 4px;
          color: var(--muted);
          font-size: 0.92rem;
        }

        .testimonial-card p {
          margin: 0;
          color: var(--ink);
          line-height: 1.8;
        }

        .cta-section {
          padding-bottom: 0;
        }

        .cta-block {
          border-radius: calc(var(--radius-xl) + 6px);
          background: linear-gradient(135deg, var(--emerald) 0%, #134738 100%);
          color: white;
          padding: 30px 22px;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .cta-block::before,
        .cta-block::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .cta-block::before {
          width: 220px;
          height: 220px;
          top: -90px;
          right: -50px;
        }

        .cta-block::after {
          width: 140px;
          height: 140px;
          bottom: -60px;
          left: -40px;
        }

        .cta-layout {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 18px;
          align-items: center;
        }

        .cta-text h2 {
          margin: 0;
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 1;
        }

        .cta-text p {
          margin: 12px 0 0;
          max-width: 56ch;
          color: rgba(255, 255, 255, 0.84);
          line-height: 1.7;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn-ghost {
          background: rgba(255, 255, 255, 0.12);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .footer {
          padding: 34px 0 42px;
        }

        .footer-inner {
          display: grid;
          gap: 18px;
          padding-top: 28px;
          border-top: 1px solid rgba(26, 26, 26, 0.1);
        }

        .footer-top {
          display: grid;
          gap: 18px;
        }

        .footer-brand h3 {
          margin: 0 0 10px;
          font-family: 'Fraunces', serif;
          font-size: 1.75rem;
        }

        .footer-brand p,
        .footer-column p,
        .footer-column a,
        .footer-column span {
          color: var(--muted);
          line-height: 1.7;
          text-decoration: none;
        }

        .footer-columns {
          display: grid;
          gap: 18px;
        }

        .footer-column h4 {
          margin: 0 0 10px;
          font-size: 1rem;
          font-weight: 800;
        }

        .footer-column ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 8px;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(26, 26, 26, 0.1);
          background: rgba(255, 255, 255, 0.7);
          color: var(--ink);
          transition: transform 200ms ease, background 200ms ease;
        }

        .social-link:hover {
          transform: translateY(-2px);
          background: white;
        }

        .social-link svg,
        .btn svg {
          width: 18px;
          height: 18px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 0.92rem;
        }

        .reveal-once {
          opacity: 0;
          transform: translateY(30px);
        }

        .is-visible.reveal-once {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-copy {
          transition-delay: 100ms;
        }

        .hero-media {
          transition-delay: 260ms;
        }

        .section-observe:nth-child(2) {
          transition-delay: 80ms;
        }

        .section-observe:nth-child(3) {
          transition-delay: 120ms;
        }

        .section-observe:nth-child(4) {
          transition-delay: 160ms;
        }

        .section-observe:nth-child(5) {
          transition-delay: 200ms;
        }

        .section-observe:nth-child(6) {
          transition-delay: 240ms;
        }

        .section-observe:nth-child(7) {
          transition-delay: 280ms;
        }

        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translate3d(-28px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translate3d(28px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (min-width: 720px) {
          .hero {
            padding-top: 52px;
          }

          .hero-grid {
            grid-template-columns: 1.05fr 0.95fr;
            gap: 34px;
            align-items: stretch;
          }

          .nav-center {
            display: inline-flex;
          }

          .mobile-toggle {
            display: none;
          }

          .mobile-panel {
            display: none !important;
          }

          .services-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          /* Desktop: collage with a prominent large image on the left and stacked small tiles on the right */
          .gallery-grid {
            grid-template-columns: 1.7fr 1fr;
            gap: 18px;
            height: 520px;
            align-items: stretch;
            grid-auto-rows: 1fr;
          }

          .gallery-grid .gallery-item {
            transition: transform 520ms cubic-bezier(.2,.9,.2,1), box-shadow 520ms ease, opacity 520ms ease;
            will-change: transform, opacity;
            height: 100%;
          }

          /* The active large tile occupies the full left column */
          .gallery-grid .gallery-item.gallery-large {
            grid-column: 1 / 2;
            grid-row: 1 / -1; /* full height */
            z-index: 4;
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 34px 70px rgba(18,18,18,0.18);
            opacity: 1;
          }

          /* All other tiles go to the right column and stack */
          .gallery-grid .gallery-item:not(.gallery-large) {
            grid-column: 2 / 3;
            opacity: 0.98;
            transform: translateY(0) scale(1);
          }

          .gallery-grid .gallery-item:not(.gallery-large):nth-child(odd) {
            transform: translateY(6px) scale(0.995);
          }

          /* Image smoothing and subtle hover */
          .gallery-item:hover { transform: translateY(-6px) scale(1.01); }
          .gallery-item .smart-image img { transition: transform 520ms ease, opacity 520ms ease; }
          .gallery-item.gallery-large .smart-image img { transform-origin: center center; }

          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.98) translateY(6px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          .gallery-item.gallery-large .smart-image { animation: fadeInScale 600ms ease both; }

          @media (min-width: 1024px) {
            .gallery-grid { height: 640px; gap: 20px; }
          }

          .stats-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .testimonials-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .cta-layout {
            grid-template-columns: 1.3fr 0.7fr;
          }

          .footer-top {
            grid-template-columns: 1.1fr 0.9fr;
            align-items: start;
          }

          .footer-columns {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .container {
            width: min(1220px, calc(100% - 40px));
          }

          .hero {
            padding-top: 62px;
          }

          .hero-media {
            height: 100%;
          }

          .hero-frame {
            height: 100%;
          }

          .hero-image {
            height: 100%;
            min-height: 540px;
          }

          /* Desktop: asegurar que la imagen del hero se muestre en cover y bien encuadrada */
          .hero-frame .hero-image {
            height: 100%;
            min-height: 540px;
            display: block;
            overflow: hidden;
          }

          .hero-frame .hero-image img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center center !important;
            display: block !important;
          }

          .service-image {
            height: 300px;
          }

          .cta-block {
            padding: 40px 36px;
          }
        }

        @media (max-width: 719px) {
          .nav-inner {
            grid-template-columns: auto auto;
            justify-content: space-between;
          }

          .nav-actions {
            display: none;
          }

          .hero h1 {
            max-width: none;
          }

          .hero-image {
            min-height: 350px;
            display: none;
          }

          

          .hero-badge {
            right: 14px;
            bottom: 14px;
            font-size: 0.92rem;
            display: none;
          }

          .service-image {
            height: 230px;
          }

          /* Mobile: convertir la galería en slider collage */
          .gallery-grid {
            display: flex;
            gap: 14px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 12px;
          }

          .gallery-item {
            flex: 0 0 78%;
            scroll-snap-align: center;
            border-radius: var(--radius-lg);
            transform-origin: center;
            transition: transform 360ms ease, box-shadow 360ms ease;
          }

          .gallery-item img {
            transition: transform 360ms ease;
          }

          

          .gallery-item:active,
          .gallery-item:focus,
          .gallery-item:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          }

          /* Ocultar elementos no esenciales en mobile */
          .hero-meta,
          .meta-pill,
          .avatars {
            display: none;
          }

          /* Ocultar decoraciones y marquee que muestran la barra ovalada en mobile */
          .page-shell::before,
          .page-shell::after,
          .hero-frame::before,
          .marquee-shell {
            display: none !important;
          }
          /* Asegurar que no quede el fondo verde/oval del hero-frame en mobile */
          .hero-frame {
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            border-radius: 0 !important;
            min-height: 0 !important;
            height: auto !important;
            overflow: visible !important;
          }

          /* También quitar fondo y padding del contenedor .hero-media en mobile */
          .hero-media {
            background: transparent !important;
            padding: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }

          .marquee-shell {
            height: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            overflow: hidden !important;
          }
          .marquee { display: none !important; }

          /* Mejor visual para el nav-center en mobile */
          .nav-center {
            display: none;
          }

          
        }
      `}</style>

      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a className="brand" href="#inicio" aria-label="Ir al inicio">
              <strong>Beauty Salon</strong>
              <span>Beauty Studio</span>
            </a>

            <nav className="nav-center" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="nav-actions">
              <IconButton href="#contacto">Reservar</IconButton>
            </div>

            <button
              type="button"
              className="mobile-toggle"
              aria-label="Abrir navegación"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {mobileOpen ? (
            <div className="mobile-panel">
              {navLinks.map((link) => (
                <a key={link.label} className="link" href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
              <IconButton href="#contacto">Reservar</IconButton>
            </div>
          ) : null}
        </div>
      </header>

      <main>
        <section
          id="inicio"
          ref={setSectionRef('inicio')}
          className={`hero container section-observe reveal-once ${visibleMap.inicio ? 'is-visible' : ''}`}
        >
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Salón de belleza premium en español</div>
              <h1>Transforma Tu Cabello con Estilo Moderno</h1>
              <p>
                En Beauty Salon creamos looks elegantes con técnicas de color, corte y tratamiento pensadas para resaltar tu
                belleza natural. Todo con una experiencia cálida, contemporánea y totalmente cuidada.
              </p>

              <div className="hero-actions">
                <IconButton href="#contacto">Reservar Ahora</IconButton>
                <IconButton href="#servicios" outline>
                  Ver Servicios
                </IconButton>
              </div>

              <div className="hero-meta" id="nosotras">
                <div className="meta-pill">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l2.2 5.5L20 10l-5.8 2.5L12 18l-2.2-5.5L4 10l5.8-2.5L12 2Z" fill="currentColor" />
                  </svg>
                  Nosotras: estilistas expertas en looks modernos y luminosos.
                </div>
                <div className="social-proof">
                  <div className="avatars" aria-hidden="true">
                    <span style={{ backgroundImage: `url(${imagenes.avatar1})` }} />
                    <span style={{ backgroundImage: `url(${imagenes.avatar2})` }} />
                    <span style={{ backgroundImage: `url(${imagenes.avatar3})` }} />
                  </div>
                  <div>
                    <strong>+2K clientas</strong> confían en nuestra atención personalizada.
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-frame">
                <div className="hero-image">
                  <SmartImage src={imagenes.hero} alt="Interior elegante de salón de belleza" loading="eager" />
                </div>
                <div className="hero-badge">
                  <span aria-hidden="true">✨</span>
                  <span>+2K Clientas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`marquee-section container section-observe reveal-once ${visibleMap.marcas ? 'is-visible' : ''}`}
          ref={setSectionRef('marcas')}
        >
          <SectionTitle
            eyebrow="Marcas"
            title="Trabajamos con firmas reconocidas para lograr resultados consistentes y de alto nivel."
            description="La inspiración se mueve, pero la calidad se mantiene. Seleccionamos productos que acompañan cada técnica con brillo, control y durabilidad."
          />
          <div className="marquee-shell" aria-label="Marcas destacadas">
            <div className="marquee">
              {brands.concat(brands).map((brand, index) => (
                <span className="brand-chip" key={`${brand}-${index}`}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className={`services-section container section-observe reveal-once ${visibleMap.servicios ? 'is-visible' : ''}`}
          ref={setSectionRef('servicios')}
        >
          <div id="precios" aria-hidden="true" />
          <SectionTitle
            eyebrow="Servicios"
            title="Tres experiencias clave para renovar, iluminar y cuidar tu cabello."
            description="Cada servicio se diseña con diagnóstico previo, una ejecución pulida y un acabado pensado para que salgas lista para cualquier ocasión."
          />
          

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image">
                  <SmartImage src={service.image} alt={service.alt} />
                </div>
                <div className="service-content">
                  <div className="service-top">
                    <h3>{service.title}</h3>
                    <span className="price-tag">{service.price}</span>
                  </div>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="galeria"
          className={`gallery-section container section-observe reveal-once ${visibleMap.galeria ? 'is-visible' : ''}`}
          ref={setSectionRef('galeria')}
        >
          <SectionTitle
            eyebrow="Galería Moda 2025"
            title="Un vistazo visual a nuestros acabados, texturas y peinados más actuales."
            description="Explora una selección de imágenes reales con estética editorial y un enfoque limpio, sofisticado y femenino."
          />
          <div className="gallery-grid">
            {gallery.map((item, i) => (
              <div className={`gallery-item ${galleryLargeIndex === i ? 'gallery-large' : ''}`} key={`${item.alt}-${i}`}>
                <SmartImage src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </section>

        <section
          className={`stats-section container section-observe reveal-once ${visibleMap.cifras ? 'is-visible' : ''}`}
          ref={setSectionRef('cifras')}
        >
          <SectionTitle
            eyebrow="Resultados"
            title="Cifras que reflejan confianza, experiencia y atención constante."
            description="Nuestro trabajo se sostiene en constancia, técnica y la satisfacción de quienes vuelven cada temporada."
          />
          <div className="stats-grid" ref={statsSectionRef}>
            {countItems.map((item, index) => (
              <div className="stat-card" key={item.label}>
                <strong>
                  {item.renderedValue}
                  {item.decimals === 1 ? '' : item.suffix}
                  {item.decimals === 1 ? item.suffix : ''}
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`testimonials-section container section-observe reveal-once ${visibleMap.testimonios ? 'is-visible' : ''}`}
          ref={setSectionRef('testimonios')}
        >
          <SectionTitle
            eyebrow="Testimonios"
            title="Lo que dicen nuestras clientas después de vivir la experiencia Beauty Salon."
            description="Tres historias reales de satisfacción, brillo y confianza en cada visita al salón."
          />
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="testimonial-head">
                  <img src={testimonial.avatar} alt={`Avatar de ${testimonial.name}`} loading="lazy" />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <p>“{testimonial.text}”</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className={`cta-section container section-observe reveal-once ${visibleMap.contacto ? 'is-visible' : ''}`}
          ref={setSectionRef('contacto')}
        >
          <div className="cta-block">
            <div className="cta-layout">
              <div className="cta-text">
                <h2>Reserva tu cita por WhatsApp y vive una atención a la medida.</h2>
                <p>
                  Escribe ahora y agenda tu próximo cambio de look con asesoría directa, rápida y personalizada.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-solid" href="https://wa.me/0000000000" target="_blank" rel="noreferrer">
                  <WhatsAppIcon />
                  Reservar por WhatsApp
                </a>
                <a className="btn btn-ghost" href="#servicios">
                  Ver nuevamente los servicios
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="footer"
        ref={setSectionRef('footer')}
        className={`footer container section-observe reveal-once ${visibleMap.footer ? 'is-visible' : ''}`}
      >
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <h3>Beauty Salon</h3>
              <p>
                Belleza contemporánea, atención cálida y resultados diseñados para resaltar tu estilo personal en cada visita.
              </p>
            </div>

            <div className="footer-columns">
              <div className="footer-column">
                <h4>Links</h4>
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Horario</h4>
                <ul>
                  <li>Lunes a viernes: 9:00 - 19:00</li>
                  <li>Sábados: 10:00 - 17:00</li>
                  <li>Domingos: Cerrado</li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Redes sociales</h4>
                <div className="footer-socials">
                  {socialLinks.map((social) => (
                    <a
                      className="social-link"
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <SocialIcon type={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Beauty Salon. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
