const config = require(`/github.config.ts`).default;

const config_default: any = {
}

export function GithubConfigGET( key: string ){

    if ( config[key] ) {
        return config[key];
    } else if ( config_default[key] ) {
        return config_default[key];
    }

    throw new Error (`GithubConfigGET: ${key} not defined`)
}

export interface Github {
    username: string;
}