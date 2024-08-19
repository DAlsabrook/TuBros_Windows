import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.content}>
          <p>Text</p>
          <a>Link</a><br/>
          <button>Button</button>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
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
