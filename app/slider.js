import React, { useState } from 'react';
import styles from './styles/page.module.css';

// Carousel images
const images = [
  '/work-2.jpg',
  '/work-1.jpg',
  '/work-3.jpg',
  '/window_placeholder-1.jpg',
  '/window_placeholder-2.png',
  '/window_placeholder-3.jpeg',
];

export default function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.arrow} onClick={handlePrev}>
        <img src='/left_arrow.png' alt='carousel arrow'></img>
      </button>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div className={styles.carouselItem} key={index}>
            <div className={styles.carouselImageWrapper}>
              <img src={src} alt={`Carousel image ${index + 1}`} className={styles.carouselImage} />
              <img src={src} alt={`Reflection of carousel image ${index + 1}`} className={`${styles.carouselImage} ${styles.carouselImageReflection}`} />
            </div>
          </div>
        ))}
      </div>
      <button className={styles.arrow} onClick={handleNext}>
        <img src='/right_arrow.png' alt='carousel arrow'></img>
      </button>
    </div>
  );
}
