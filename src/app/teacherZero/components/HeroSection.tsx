import styles from "../page.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Uma Revolução Na Educação: Cria Fichas de Trabalho 42x Mais Rápido
        </h1>
        <h2 className={styles.heroSubtitle}>
          TeacherZero devolve-te o teu tempo mais precioso. Ensina mais, prepara menos.
        </h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSea_BzP21b7JB2ekIgCU--FN-qkrcLRQkoc71VIs02ctv-TRg/viewform?usp=dialog"
          className={styles.ctaButton}
        >
          Junta-te à Revolução - Acesso Beta
        </a>
      </div>
      <div className={styles.heroGraphic}>
        <div className={styles.gradient}></div>
      </div>
    </section>
  );
}
