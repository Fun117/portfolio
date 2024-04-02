'use server';

export const ServerZennGET_articles = async (username: string): Promise<any> => {
    const response = await fetch(`https://zenn.dev/api/articles?username=${username}&order=latest`);
    const userData = response.json();
    return userData;
};