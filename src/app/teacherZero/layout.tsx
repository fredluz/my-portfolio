import { Inter } from "next/font/google";
import classNames from "classnames";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface TeacherZeroLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "TeacherZero - Crie Fichas de Trabalho 42x Mais Rápido com IA",
  description: "TeacherZero é a ferramenta de IA simples e intuitiva feita para educadores. Crie materiais didáticos de alta qualidade em minutos, não em horas.",
  openGraph: {
    title: "TeacherZero - IA para Educadores",
    description: "Crie fichas de trabalho 42x mais rápido com IA poderosa e simples.",
    url: "https://fredlouz.",
    siteName: "TeacherZero",
    locale: "pt_PT",
    type: "website",
  },
};

export default function TeacherZeroLayout({ children }: TeacherZeroLayoutProps) {
  // This layout applies specifically to the TeacherZero route segment.
  // It should NOT include <html> or <body> tags, as those are handled by the root layout.
  return <>{children}</>;
}
