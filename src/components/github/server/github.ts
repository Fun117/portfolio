import axios from 'axios';

// created: リポジトリの作成日時で並べ替えます。
// updated: リポジトリの最終更新日時で並べ替えます。
// pushed: リポジトリに最後にコミットされた日時で並べ替えます。
// full_name: リポジトリの名前でアルファベット順に並べ替えます。

export const GitHubServerAPIGet_UserRepository = async ( username: string, sort?: "created" | "updated" | "pushed" | "full_name" ): Promise<any> => {
    try {
        let apiUrl = `https://api.github.com/users/${username}/repos`;
        if (sort) {
            apiUrl += `?sort=${sort}`;
        }
        const response = await axios.get(apiUrl);
        const repositories = response.data;
        return repositories;
    } catch (error) {
        console.error('Error fetching user repositories:', error);
        return [];
    }
};
