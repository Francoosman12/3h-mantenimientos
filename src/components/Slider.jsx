import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import '../styles/Slider.css';
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://i.ibb.co/KzVtY7X/Whats-App-Image-2024-09-12-at-18-07-29-2.jpg',
  'https://i.ibb.co/58vf9z7/Whats-App-Image-2024-09-12-at-18-07-29-1.jpg',
  'https://i.ibb.co/JQXpXYJ/Whats-App-Image-2024-09-12-at-18-07-28.jpg',
  'https://i.ibb.co/z2z7KJr/Whats-App-Image-2024-09-12-at-18-07-28-1.jpg',
  'https://i.ibb.co/gmPSB3W/Whats-App-Image-2024-09-12-at-17-57-45.jpg',
  'https://i.ibb.co/sJHNNWX/Whats-App-Image-2024-09-12-at-17-57-45-2.jpg',
  'https://i.ibb.co/k9LcTsB/Whats-App-Image-2024-09-12-at-17-57-45-1.jpg',
  'https://i.ibb.co/QFBvL6F/Whats-App-Image-2024-09-12-at-17-57-43.jpg',
  'https://i.ibb.co/YhqHFGr/Whats-App-Image-2024-09-12-at-17-57-43-1.jpg',
  'https://i.ibb.co/hm5k6wv/Whats-App-Image-2024-09-12-at-17-57-42.jpg',
  'https://i.ibb.co/JHgH0jd/Whats-App-Image-2024-09-12-at-17-57-42-2.jpg',
  'https://i.ibb.co/9c4hQsN/Whats-App-Image-2024-09-12-at-17-57-42-1.jpg',
  'https://i.ibb.co/wLBCWq5/Whats-App-Image-2024-09-12-at-17-57-41.jpg',
  'https://i.ibb.co/vwWdzBF/Whats-App-Image-2024-09-12-at-17-57-41-2.jpg',
  'https://i.ibb.co/vsQ5wBD/Whats-App-Image-2024-09-12-at-17-57-41-1.jpg',
  'https://i.ibb.co/7k7R2GS/Whats-App-Image-2024-09-12-at-17-57-40.jpg',
  'https://i.ibb.co/M240Mrs/Whats-App-Image-2024-09-12-at-17-57-40-1.jpg',
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, close, showPrev, showNext]);

  return (
    <section id="works">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Nuestro trabajo</span>
          <h2 className="section-title">Trabajos realizados</h2>
          <p className="section-subtitle">Una muestra de proyectos que llevamos a cabo para nuestros clientes.</p>
        </div>
        <div className="image-grid">
          {images.map((src, i) => (
            <div
              className="image-item"
              key={src}
              role="button"
              tabIndex={0}
              aria-label={`Ampliar trabajo realizado ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIndex(i);
                }
              }}
            >
              <img src={src} alt={`Trabajo realizado ${i + 1}`} loading="lazy" />
              <div className="image-item-overlay">
                <FaSearchPlus />
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && createPortal(
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada del trabajo realizado"
          onClick={close}
        >
          <button className="lightbox-close" aria-label="Cerrar" onClick={close}>
            <FaTimes />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            aria-label="Trabajo anterior"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <FaChevronLeft />
          </button>
          <img
            className="lightbox-image"
            src={images[activeIndex]}
            alt={`Trabajo realizado ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            aria-label="Siguiente trabajo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <FaChevronRight />
          </button>
          <span className="lightbox-counter">{activeIndex + 1} / {images.length}</span>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Slider;
