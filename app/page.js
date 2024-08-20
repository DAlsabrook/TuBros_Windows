import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerContent}>
            <p>TuBros Logo Img</p>
            <div className={styles.navItems}>
              <a href="#">Contact</a>
              <a href="#">Areas Served</a>
              <a href="#">Our Story</a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className={styles.content}>

        </div>
      </section>
      <footer>
        <div className={styles.content}>

        </div>
      </footer>
    </main>
  );
}
