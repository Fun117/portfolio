'use client';

import Image from "next/image";
import { IsPC } from "@/components/client/main";
import { GitHubClientGetRepository } from "./client/github";
import Link from "next/link";
import { navigationConfig } from "../_config";
import { _locales } from "../client/_locales";

const config = require(`/zenn.config.ts`).default;

export function GitHubGetRepositoryGroup({ moreBtn, repositoryCount }: { moreBtn?: boolean, repositoryCount?: number }) {
    return (
        <>
            <div className="flex flex-col items-center mx-auto mb-5 px-5 select-none pointer-events-none">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold text-center text-black">{_locales(`ポートフォリオ`)}</h1>
                </div>
                <p className="text-center">{IsPC()?
                _locales(`カードを右クリックしてメニューを表示します。`):
                _locales(`カードを長押しするとメニューが表示されます。`)
                }</p>
            </div>
            <GitHubClientGetRepository repositoryCount={repositoryCount}/>
            {moreBtn &&
            <div className="flex flex-col justify-center items-center p-2 scroll-pt-10 transition-all duration-500 ease-in-out">
                <Link href={`${navigationConfig.site?.links.portfolio}`} className="w-full max-w-96">
                    <button className="w-full p-2 rounded-lg border shadow bg-neutral-200/20 border-blue-300/30 hover:bg-blue-500/80 hover:text-white hover:scale-[102%] hover:shadow-lg active:scale-[98%] active:opacity-70 transition-all duration-300 ease-in-out">
                        {_locales(`もっと見る`)}
                    </button>
                </Link>
            </div>
            }
        </>
    )
}