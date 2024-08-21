"use client";

import styles from './styles/page.module.css';
import Image from 'next/image';
import SimpleCarousel from './slider';

export default function Home() {

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContent}>
            <a href="#top" className={styles.TBicon}>TB</a>
            <div className={styles.navItems}>
              <a href="#story">Our Story</a>
              <a href="#areas">Areas Served</a>
              <a href="#contact">Contact</a>
              <a href="#contact">Get your free estimate</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection} id="top">
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroLogo}>
              <h1 className={styles.heroTitle}>TuBros Windows</h1>
              <Image src="/full_scrollwork.png" alt="scrollwork design" className={styles.hero_scrollwork} width={400} height={75} />
            </div>
            <p>Glass so clean, it can&apos;t be seen!</p>
            <p>Free Estimates - 35+ Years Experience - Quick Service</p>
            <button>Call Now</button>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className={styles.storySection} id="story">
        <div className={styles.contentWrapper}>
          <div className={styles.storyContent}>
            <div className={styles.imageContainer}>
              <Image src="/pittmans.jpg" alt="workers image" className={styles.storyImg} width={500} height={300} />
              <div className={styles.textCutout}>
                <h2 className={styles.cutoutText}>Our Story</h2>
              </div>
            </div>

            <div className={styles.storyScrollDiv}>
              <Image src="/single_bar_scrollwork.png" alt="scrollwork design" className={styles.storyScrollwork} width={5} height={5} />
            </div>
            <div className={styles.storyText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Works section */}
      <section className={styles.worksSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.worksContent}>
            <div className={styles.worksText}>
              <h2>Our Work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* <Carousel/> */}
            <SimpleCarousel />
          </div>
        </div>
      </section>

      {/* Guarantee section */}
      <section className={styles.guaranteeSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.guaranteeContent}>
            <Image src="/img-home-guarantee.png" alt="guarantee bannar" className={styles.guaranteeImg} width={300} height={300} />
            <div className={styles.guaranteeText}>
              <h2>A Clean Guarantee</h2>
              <p>We will do it right the first time and we promise that if you are not completely satisfied, we&apos;ll make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas section */}
      <section className={styles.areasSection} id="areas">
        <div className={styles.contentWrapper}>
          <div className={styles.areasContent}>
            <h2>Areas Served</h2>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contentWrapper}>
          <div className={styles.contactContent}>
            <h2>Contact us!</h2>
            <p>Call button</p>
            <p>possible form for messaging</p>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section className={styles.reviewsSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.reviewsContent}>
            <h2>Testimonials</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.contentWrapper}>
          <div className={styles.footerContent}>
            <p>TuBros logo img</p>
            <p>Fully Insured</p>
            <p>copyright 2024</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
