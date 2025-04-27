import styles from "./page.module.scss";
import { TeacherZeroContent } from "./components/TeacherZeroContent";

export default function TeacherZero() {
  return (
    <div className={styles.container}>
      <TeacherZeroContent />
    </div>
  );
}
