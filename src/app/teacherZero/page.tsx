import styles from "./page.module.scss";
import { HeroSection } from "./components/HeroSection";
import { TeacherZeroContent } from "./components/TeacherZeroContent";

export default function TeacherZero() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <TeacherZeroContent />
    </div>
  );
}
