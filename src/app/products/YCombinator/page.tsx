import React from 'react';
import styles from './YCombinator.module.css';
import Link from 'next/link';

const YCombinatorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span>teacherZero</span>
      </div>
      
      <div className={styles.productHeader}>
        <h1>teacherZero</h1>
        <p className={styles.tagline}>Revolutionary teaching assistant powered by AI</p>
      </div>
      
      <div className={styles.contentGrid}>
        <div className={styles.productInfo}>
          <h2>About teacherZero</h2>
          <p>
            teacherZero is an innovative tool designed to help educators create personalized
            learning experiences for their students. With advanced AI capabilities, it adapts
            to each student's unique learning style and pace.
          </p>
          
          <h2>Key Features</h2>
          <ul className={styles.featureList}>
            <li>Personalized learning paths</li>
            <li>Real-time feedback and assessment</li>
            <li>Interactive lesson planning</li>
            <li>Student progress analytics</li>
          </ul>
          
          <div className={styles.downloadSection}>
            <a 
              href="https://drive.google.com/file/d/1R2COCBtpABpFq4HB9fcprAndnQyF3E4M/view?usp=sharing"
              className={styles.downloadButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.downloadIcon}>↓</span>
              Download teacherZero
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YCombinatorPage;
