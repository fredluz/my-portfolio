import React from 'react';
import styles from './YCombinator.module.css';
import Link from 'next/link';

const YCombinatorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span>teacherZero</span>
      </div>
      
      
      <div className={styles.contentGrid}>
        <div className={styles.productInfo}>
          
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
