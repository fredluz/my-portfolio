import { baseURL } from "@/app/resources";
import { contact } from "@/app/resources/content";
import { Button, Column, Flex, Heading, IconButton } from "@/once-ui/components";
import styles from './contact.module.scss';

export async function generateMetadata() {
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(contact.title)}`;

  return {
    title: contact.title,
    description: contact.description,
    openGraph: {
      title: contact.title,
      description: contact.description,
      type: "website",
      url: `https://${baseURL}/contact`,
      images: [
        {
          url: ogImage,
          alt: contact.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: contact.title,
      description: contact.description,
      images: [ogImage],
    },
  };
}

export default function Contact() {
  return (
    <Column maxWidth="m">
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column maxWidth={40}>
          <Column fillWidth minHeight="160" vertical="center" marginBottom="16">
            <Heading variant="display-strong-xl">{contact.title}</Heading>
            <Column textVariant="body-default-l" fillWidth gap="m" marginTop='16' marginBottom="xl">
              <p>{contact.description}</p>
            </Column>
          </Column>          <Flex fillWidth direction="column" gap="16" horizontal="start">
             {contact.items.map((item) => (
               <div key={item.name} style={{ width: '100%' }}>
                <Button
                  className={`s-flex-hide ${styles.contactButton}`}
                   href={item.link}
                   prefixIcon={item.icon}
                   label={item.name}
                   size="l"
                   variant="secondary"
                   fillWidth
                 />                <IconButton
                  className={`s-flex-show ${styles.contactButton}`}
                   size="l"
                   key={`${item.name}-icon`}
                   href={item.link}
                   icon={item.icon}
                   variant="secondary"
                 />
               </div>
             ))}
           </Flex>
        </Column>
      </Flex>
    </Column>
  );
}
