'use client';

import Image from "next/image";
import { ClientZennGetElements_articles } from "./client/main";
import { IsPC } from "@/components/client/main";
import Link from "next/link";
import { navigationConfig } from "../_config";

const config = require(`/zenn.config.ts`).default;

export function ZeneGETArticlesGroup({ moreBtn, count }: { moreBtn?: boolean, count?: number }) {
    return (
        <>
            <div className="flex flex-col items-center mx-auto mb-5 px-5 select-none pointer-events-none">
                <div className="flex items-center">
                    <Image
                    src={`/brand/zenn/zenn.png`}
                    alt="Icon"
                    width={50}
                    height={50}
                    />
                    <h1 className="text-4xl font-bold text-center text-black">Zenn</h1>
                </div>
                <p className="text-center">{IsPC()?
                "カードを右クリックすることでメニューを表示します":
                "カードを長押しすることでメニューを表示します"
                }</p>
            </div>
            <ClientZennGetElements_articles count={count}/>
            {moreBtn &&
            <div className="flex flex-col justify-center items-center p-2 scroll-pt-10 transition-all duration-500 ease-in-out">
                <Link href={`${navigationConfig.site?.links.portfolio}`} className="w-full max-w-96">
                    <button className="w-full p-2 rounded-lg border shadow bg-neutral-200/20 border-blue-300/30 hover:bg-blue-500/80 hover:text-white hover:scale-[102%] hover:shadow-lg active:scale-[98%] active:opacity-70 transition-all duration-300 ease-in-out">
                        もっと表示
                    </button>
                </Link>
            </div>
            }
        </>
    )
}