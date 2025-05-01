import styles from "./page.module.scss";
// Import the new English content component
import { TeacherZeroENContent } from "./components/TeacherZeroENContent"; 

export default function TeacherZero() {
  return (
    <div className={styles.container}>
      {/* Use the English content component */}
      <TeacherZeroENContent />
    </div>
  );
}
