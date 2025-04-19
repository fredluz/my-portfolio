import { baseURL } from "@/app/resources";
import { contact } from "@/app/resources/content";
import { Button, Column, Flex, Heading, IconButton } from "@/once-ui/components";

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
          <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
            <Heading variant="display-strong-xl">{contact.title}</Heading>
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <p>{contact.description}</p>
            </Column>
          </Column>

          <Flex fillWidth wrap gap="8" horizontal="center">
            {contact.items.map((item) => (
              <>
                <Button
                  className="s-flex-hide"
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  label={item.name}
                  size="l"
                  variant="secondary"
                />
                <IconButton
                  className="s-flex-show"
                  size="l"
                  key={`${item.name}-icon`}
                  href={item.link}
                  icon={item.icon}
                  variant="secondary"
                />
              </>
            ))}
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
}
