// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from './styles/page.module.css';

// // Carousel images
// const images = [
//   '/window_placeholder-1.jpg',
//   '/window_placeholder-2.png',
//   '/window_placeholder-3.jpeg',
// ];

// export default function Carousel() {
//   // Used for carousel
//   const settings = {
//     dots: true,
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((src, index) => (
//         <div key={index} className={styles.carouselImageWrapper}>
//           <img src={src} alt={`Carousel image ${index + 1}`} className={styles.carouselImage} />
//         </div>
//       ))}
//     </Slider>
//   );
// }
