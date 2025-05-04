import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Determine if we're in the Portuguese locale
  let pathname = "";
  if (typeof window !== "undefined") {
    pathname = window.location.pathname;
  }
  const isPt =
    pathname.endsWith("/pt") ||
    pathname.includes("/pt/") ||
    pathname === "/pt";
  const privacyLink = `/legal/privacy-policy${isPt ? "/pt" : ""}`;
  const termsLink = `/legal/terms-conditions${isPt ? "/pt" : ""}`;

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            / Build your portfolio with{" "}
            <SmartLink
              style={{ marginLeft: "-0.125rem" }}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex
        maxWidth="m"
        paddingY="4"
        paddingX="16"
        gap="16"
        horizontal="center"
        vertical="center"
      >
        <Link href={privacyLink}>Privacy Policy / Política de Privacidade</Link>
        <Link href={termsLink}>Terms & Conditions / Termos e Condições</Link>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
