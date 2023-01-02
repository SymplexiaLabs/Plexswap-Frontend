import { __spreadArray } from "tslib";
import { TwitterIcon, TelegramIcon, GithubIcon, DiscordIcon } from "../Svg";
export var footerLinks = [
    {
        label: "About",
        items: [
            {
                label: "Contact",
                href: "https://docs.plexfinance.us/contact-us/telegram"
            },
            {
                label: "Community",
                href: "https://twitter.com/plex_finance"
            },
            {
                label: "WAYA",
                href: "https://docs.plexfinance.us/technical-specs/waya"
            },
        ]
    },
    {
        label: "Help",
        items: [
            {
                label: "Customer",
                href: "Support https://docs.plexfinance.us/contact-us/customer-support"
            },
            {
                label: "Troubleshooting",
                href: "https://docs.plexfinance.us/help/troubleshooting"
            },
            {
                label: "Guides",
                href: "https://docs.plexfinance.us/get-started"
            },
        ]
    },
    {
        label: "Developers",
        items: [
            {
                label: "Github",
                href: "https://github.com/symplexia"
            },
            {
                label: "Documentation",
                href: "https://docs.plexfinance.us"
            },
            {
                label: "Bug Bounty",
                href: "https://app.gitbook.com/@plexswap/"
            },
            {
                label: "Audits",
                href: "https://docs.plexfinance.us/audit"
            },
            {
                label: "Careers",
                href: "https://docs.plexfinance.us/hiring/"
            },
        ]
    },
];
export var socials = [
    {
        label: "Twitter",
        icon: TwitterIcon,
        href: "https://twitter.com/plex_finance"
    },
    {
        label: "Github",
        icon: GithubIcon,
        href: "https://github.com/plexswap"
    },
    {
        label: "Discord",
        icon: DiscordIcon,
        href: "https://discord.gg/RvtpWFRkhE"
    },
    {
        label: "Telegram",
        icon: TelegramIcon,
        href: "https://t.me/plexswap_us",
    },
];
export var langs = __spreadArray([], Array(20), true).map(function (_, i) { return ({
    code: "en".concat(i),
    language: "English".concat(i),
    locale: "Locale".concat(i)
}); });
