import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import styles from "./home.module.scss"; // Import home page styles

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <> {/* Use Fragment to allow sibling elements */}
      {/* Fixed About Me element for wide screens */}
      <div className={styles.fixedAboutContainer}>
        <Avatar
          src={person.avatar}
          className={styles.largeHomeAvatar}
          size="xl" // Use the component's size prop
        />
        <Button
          href="/about"
          label="About Me"
          variant="secondary"
          size="m"
          className={styles.aboutButton}
        />
      </div>

      <Column maxWidth="m" gap="xl" horizontal="center">
        <script
          type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            {/* Render subline with the last sentence highlighted */}
            <Text wrap="balance" onBackground="accent-strong" variant="heading-default-xl">
              <>
                I'm Fred, an AI Agent Designer who makes using AI   
<Text wrap="balance" color="accent-strong" onBackground="accent-medium" variant="heading-default-xl"> intuitive</Text>, <Text wrap="balance" onBackground="brand-medium" variant="heading-default-xl">easy</Text> and <Text wrap="balance" onBackground="brand-medium" variant="heading-default-xl">fast</Text>.
              <br/>
                <br /> AI tech is advancing extremely quickly, but it's still not being properly integrated into the real world. 
                
                My goal is to integrate AI Agents into our daily lives, harnessing their power within our regular routines, systems and interfaces.
                <br/><Text wrap="balance" color="accent-strong" onBackground="accent-medium" variant="heading-default-xl">  No one should be forced to waste time prompting chatbots ever again.</Text>
              </>
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
    </> // Close the fragment
  );
}
