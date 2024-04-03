'use server';

export const ServerZennGET_articles = async ( username: string, count?: number ): Promise<any> => {
    const response = await fetch(`https://zenn.dev/api/articles?username=${username}&order=latest${count? `&count=${count}`:``}`);
    const userData = response.json();
    return userData;
};