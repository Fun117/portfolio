'use server';

export const BackendZennGET_articles = async (username: string): Promise<any> => {
    const response = await fetch(`https://zenn.dev/api/articles?username=${username}&order=latest`);
    const userData = await response.json();

    return userData;
};