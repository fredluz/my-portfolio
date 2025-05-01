import styles from "../page.module.scss"; // Adjusted path
import { TeacherZeroContent } from "../components/TeacherZeroPTContent"; // Adjusted path

// It's good practice to give locale-specific pages unique function names
// if you anticipate needing to differentiate them later, but default export works fine.
export default function TeacherZeroPortuguesePage() {
  return (
    <div className={styles.container}>
      {/* This component will eventually hold/load the Portuguese content */}
      <TeacherZeroContent />
    </div>
  );
}
