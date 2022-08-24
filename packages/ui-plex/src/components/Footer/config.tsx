import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.plexfinance.us/contact-us/telegram",
      },
      {
        label: "Blog",
        href: "https://plexswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://twitter.com/LabsPlex",
      },
      {
        label: "WAYA",
        href: "https://docs.plexfinance.us/tokenomics/waya",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.plexfinance.us/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.plexfinance.us/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.plexfinance.us/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/symplexia",
      },
      {
        label: "Documentation",
        href: "https://docs.plexfinance.us",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@plexswap/",
      },
      {
        label: "Audits",
        href: "https://docs.plexfinance.us/audit",
      },
      {
        label: "Careers",
        href: "https://docs.plexfinance.us/hiring/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/LabsPlex",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/plexswap",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/RvtpWFRkhE",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://plexswap.medium.com/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
