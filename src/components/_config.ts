import { FooterConfig } from "./client/footer";
import { HeaderConfig } from "./client/header";

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