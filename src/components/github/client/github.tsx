'use client'

import { useEffect, useState } from "react"
import { GitHubServerAPIGet_UserRepository } from "../server/github"
import { GithubConfigGET } from "../config"
import { ContentMenu } from "@/components/client/main";
import { ContextMenuItem } from "@/components/ui/context-menu";
import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";
import { FrameworkIcon } from "@/components/client/framework";
import { portfolio_contents } from "@/components/_config";
import { EncodeString } from "@/components/main";
import { _locales } from "@/components/client/_locales";

export interface __portfolio_contents {
    username: string;
    service: string;
    framework: string;
    name: string;
    html_url: string;
    language: string;
    updated_at: string;
    image_url?: string;
}

export function GitHubClientGetRepository({ repositoryCount }: { repositoryCount?: number }) {

    const [repositories, setRepositories] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null); // エラーの状態を管理

    useEffect(() => {
        const fetchData = async () => {
            try {
                const repos = await GitHubServerAPIGet_UserRepository(GithubConfigGET('username'), 'updated');
                if (repositoryCount) {
                    setRepositories(repos.slice(0, repositoryCount));
                } else {
                    setRepositories(repos);
                }
            } catch (error) {
                setError('リポジトリを取得できませんでした'); // エラーメッセージを設定
            }
        };

        fetchData();
    }, [repositoryCount]);

    // エラーが発生した場合の代替コンテンツ
    if (error) {
        return (
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-[960px] p-2 mx-auto scroll-pt-10 transition-all duration-500 ease-in-out">
            {portfolio_contents.map((repo, index) => (
                <ContentMenu key={index} MenuContent={
                    <ContextMenuItem>
                        <Link href={`https://twitter.com/intent/tweet?url=${repo.html_url}&text=${EncodeString(`${repo.name} | ${repo.username}`)}&hashtags=github`} target="_block">
                        {_locales(`X(Twitter)に投稿する`)}
                        </Link>
                    </ContextMenuItem>
                }>
                    <article className="snap-start place-self-auto animate-fade-up transition-all duration-500 ease-in-out">
                        <div className="relative flex flex-col overflow-hidden rounded-[15px] shadow-sm hover:drop-shadow-lg hover:scale-[102%] active:shadow-sm active:drop-shadow-none active:scale-[98%] active:opacity-50 transition-all duration-300 ease-in-out bg-neutral-50 border-neutral-300/30 border">
                            <Link className="flex flex-col" href={repo.html_url} target="_block">
                                <div className="flex justify-center py-[25px] text-[46px] bg-blue-300/50">
                                    <span className=" ml-[0.05px] overflow-hidden text-black whitespace-normal"><FrameworkIcon framework={repo.service}/></span>
                                </div>
                                <div className="flex pt-3">
                                    <h1 className="px-3 text-base font-bold max-h-[4.55em] overflow-hidden truncate text-blue-500">{repo.username}<span className="mx-1 text-neutral-600">/</span> {repo.name}</h1>
                                </div>
                                <div className="px-[14px] pt-[10px] pb-[16px] text-[11px]">
                                    <div className="">
                                        <div className="flex items-center text-neutral-500">
                                            <time dateTime={repo.updated_at}/>
                                            <span className="inline-flex items-center ml-[6px]"><FrameworkIcon className="font-bold text-base mr-1" framework={repo.framework}/>{repo.language}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </article>
                </ContentMenu>
            ))}
            </section>
        );
    }

    return (
        <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-[960px] p-2 mx-auto scroll-pt-10 transition-all duration-500 ease-in-out">
        {repositories.map((repo, index) => (
            <ContentMenu key={index} MenuContent={
                <ContextMenuItem>
                    <Link href={`https://twitter.com/intent/tweet?url=${repo.html_url}&text=${EncodeString(`${repo.name} | ${repo.owner.login}`)}&hashtags=github`} target="_block">
                    {_locales(`X(Twitter)に投稿する`)}
                    </Link>
                </ContextMenuItem>
            }>
                <article className="snap-start place-self-auto animate-fade-up transition-all duration-500 ease-in-out">
                    <div className="relative flex flex-col overflow-hidden rounded-[15px] shadow-sm hover:drop-shadow-lg hover:scale-[102%] active:shadow-sm active:drop-shadow-none active:scale-[98%] active:opacity-50 transition-all duration-300 ease-in-out bg-neutral-50 border-neutral-300/30 border">
                        <Link className="flex flex-col" href={repo.html_url} target="_block">
                            <div className="flex justify-center py-[25px] text-[46px] bg-blue-300/50">
                                <span className=" ml-[0.05px] overflow-hidden text-black whitespace-normal"><FrameworkIcon framework="github"/></span>
                            </div>
                            <div className="flex pt-3">
                                <h1 className="px-3 text-base font-bold max-h-[4.55em] overflow-hidden truncate text-blue-500">{repo.owner.login}<span className="mx-1 text-neutral-600">/</span> {repo.name}</h1>
                            </div>
                            <div className="px-[14px] pt-[10px] pb-[16px] text-[11px]">
                                <div className="">
                                    <div className="flex items-center text-neutral-500">
                                        <time dateTime={repo.updated_at}/>
                                        <span className="inline-flex items-center ml-[6px]"><BiCodeAlt className=" font-bold text-base mr-1"/>{repo.language}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </article>
            </ContentMenu>
        ))}
        </section>
    )
}
