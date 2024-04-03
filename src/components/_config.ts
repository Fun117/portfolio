import { FooterConfig } from "./client/footer";
import { HeaderConfig } from "./client/header";
import { __portfolio_contents } from "./github/client/github";

export interface NavigationConfig {
    logo_url?: string | null;
    username: string;
    year: number;
    author?: keyProps | null;
    site?: keyProps | null;
};
interface keyProps {
    [key: string]: { [key: string]: string };
};

export const navigationConfig: NavigationConfig = {
    "username": "Fun117",
    "year": 2024,
    "site": {
        "links": {
            "home": "/",
            "portfolio": "/portfolio",
        },
    },
    "author": {
        "socials": {
            "mailto": "/links/mailto",
            "github": "/links/github",
            "twitter": "/links/twitter",
            "zenn": "/links/zenn",
        },
    },
};

export const headerConfig: HeaderConfig = {
    "mode": "fixed",
    "title": "Fun117",
    "contents": [
        {
            "label": "Home",
            "url": "/",
            "target": "_self",
        },
        {
            "label": "Portfolio",
            "url": "/portfolio",
            "target": "_self",
        },
    ],
};

export const footerConfig: FooterConfig[] = [
    {
        "title": "Socials",
        "contents": [
            {
                "label": "ORCiD",
                "url": "/links/orcid",
                "target": "_blank",
            },
            {
                "label": "Npm",
                "url": "/links/npm",
                "target": "_blank",
            },
            {
                "label": "Youtube",
                "url": "/links/youtube",
                "target": "_blank",
            },
            {
                "label": "Discord",
                "url": "/links/discord",
                "target": "_blank",
            },
            {
                "label": "Scratch",
                "url": "/links/scratch",
                "target": "_blank",
            },
        ],
    },
    {
        "title": "Development",
        "contents": [
            {
                "label": "Repository",
                "url": "https://github.com/Fun117/portfolio",
                "target": "_blank",
            },
        ],
    },
];

export const portfolio_contents: __portfolio_contents[] = [
    {
        "username": "Fun117",
        "service": "github",
        "framework": "nextjs",
        "name": "scratch-building",
        "html_url": "https://github.com/selcold/scratch-building",
        "language": "TypeScript",
        "updated_at": "024-04-02T09:28:41Z",
    },
    {
        "username": "Fun117",
        "service": "npm",
        "framework": "react",
        "name": "scratch-auth-react",
        "html_url": "https://www.npmjs.com/package/scratch-auth-react",
        "language": "TypeScript",
        "updated_at": "024-04-02T09:28:41Z",
    },
    {
        "service": "github",
        "username": "Fun117",
        "name": "portfolio",
        "html_url": "https://github.com/Fun117/portfolio",
        "framework": "nextjs",
        "language": "TypeScript",
        "updated_at": "024-04-02T09:28:41Z",
    },
];
