import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContent}>
            <p>TuBros Logo Img</p>
            <div className={styles.navItems}>
              <a href="#story">Our Story</a>
              <a href="#areas">Areas Served</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <h1>TuBros Windows</h1>
            <p>So clean, it will never be seen</p>
            <button>Call Now</button>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className={styles.storySection} id="story">
        <div className={styles.contentWrapper}>
          <div className={styles.storyContent}>
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Works section */}
      <section className={styles.worksSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.worksContent}>
            <div className={styles.worksText}>
              <h2>Our Works</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={styles.worksCarousel}>
              <p>Cool carousel</p>
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
            <h2>Reviews</h2>
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