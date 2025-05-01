// import { Inter } from "next/font/google"; // Inter is loaded globally in root layout
// import classNames from "classnames"; // Not needed here if not applying classes
import "@/app/globals.css";
// import { LanguageSwitcher } from "./components/LanguageSwitcher"; // Removed import - will be added to content components

// const inter = Inter({ // Inter is loaded globally
//   subsets: ["latin"],
//   display: "swap", // Commented out the whole block
// });

interface TeacherZeroLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  // Updated metadata to English (placeholders for user to refine)
  title: "TeacherZero - Create Worksheets 42x Faster with AI",
  description: "TeacherZero is the simple and intuitive AI tool made for educators. High-quality teaching materials in minutes, not hours.",
  openGraph: {
    title: "TeacherZero - AI for Educators",
    description: "Create worksheets 42x faster with powerful and simple AI.",
    url: "https://fredluz.pt/teacherZero", // Base URL for the default locale
    siteName: "TeacherZero",
    locale: "en_US", // Default locale set to English
    type: "website",
  },
};

export default function TeacherZeroLayout({ children }: TeacherZeroLayoutProps) {
  // This layout applies specifically to the TeacherZero route segment.
  // It should NOT include <html> or <body> tags, as those are handled by the root layout.
  // Wrap children - Switcher removed from here
  return <>{children}</>;
}
