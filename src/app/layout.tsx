import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import {SpeedInsights} from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"
import classNames from "classnames";

import { Header } from "@/components";
import { baseURL, style } from "@/app/resources"; // Removed 'effects' import

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { person, home } from "@/app/resources/content";
import { Column, Flex, ToastProvider } from "@/once-ui/components"; // Removed 'Background' import

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: home.title,
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: "Portfolio website showcasing my work.",
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  preload: true, // Prioritize loading the primary font
});

// Update FontConfig type to include className
type FontConfig = {
  variable: string;
  className: string; 
};

/*
Replace with code for secondary and tertiary fonts
from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      // Apply the generated class name for the primary font, not the variable name
      className={classNames(
        primary.className, 
        secondary ? secondary.className : "", // Assuming secondary/tertiary follow the same pattern if defined
        tertiary ? tertiary.className : "",   // Assuming secondary/tertiary follow the same pattern if defined
        code.variable, // Keep code variable if it's used differently or intended as a variable
      )}
    >
      <ToastProvider>
        <Column style={{ minHeight: "100vh" }} as="body" fillWidth margin="0" padding="0">
          {/* <Background /> component removed from here */}
          <Flex fillWidth minHeight="16"></Flex>
          <Header />
          {children}
          <SpeedInsights/>
          <Analytics />
          {/* Klaviyo Onsite Script */}
          <script async type='text/javascript' src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VdCij5'></script>
        </Column>
      </ToastProvider>
    </Flex>
  );
}
