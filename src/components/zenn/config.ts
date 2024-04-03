const config = require(`/zenn.config.ts`).default;

const config_default: any = {
}

export function ZennConfigGET( key: string ){

    if ( config[key] ) {
        return config[key];
    } else if ( config_default[key] ) {
        return config_default[key];
    }

    throw new Error (`ZennConfigGET: ${key} not defined`)
}

export interface Zenn {
    username: string;
}

export type ZennAPIGetArticleObj = ZennAPIGetArticle[]

export type ZennAPIGetArticle = {
    id: number;
    post_type: "Article";
    title: string;
    slug: string;
    published: boolean;
    comments_count: number;
    liked_count: number;
    body_letters_count: number;
    article_type: "tech" | "idea";
    emoji: string;
    is_suspending_private: boolean;
    published_at: string;
    body_updated_at: string;
    source_repo_updated_at: string;
    path: string;
    user: User;
    publication: Publication | null;
};

type User = {
    id: number;
    username: string;
    name: string;
    avatar_small_url: string;
};

type Publication = {
    id: number;
    name: string;
    avatar_small_url: string;
    display_name: string;
    beta_stats: boolean;
    avatar_registered: boolean;
};