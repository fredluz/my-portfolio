"use client"; // This component needs client-side hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../page.module.scss"; // Using the existing module for simplicity

export function LanguageSwitcher() {
  const pathname = usePathname();

  // Handle null case for pathname
  if (!pathname) {
    return null; // Or a loading state, but null is fine for now
  }

  // Determine current language, target path, and flag emoji
  const isPortuguese = pathname.includes("/pt");
  const targetPath = isPortuguese ? "/teacherZero" : "/teacherZero/pt";
  const flagEmoji = isPortuguese ? "🇺🇸" : "🇵🇹"; // US flag for EN, PT flag for PT
  const title = isPortuguese ? "Switch to English" : "Mudar para Português";

  return (
    <Link href={targetPath} className={styles.languageSwitcher} title={title}>
      {flagEmoji}
    </Link>
  );
}
