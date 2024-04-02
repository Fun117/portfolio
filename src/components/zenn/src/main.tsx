'use client';

import Image from "next/image";
import { ClientZennGetElements_articles } from "./client/main";
import { IsPC } from "@/components/client/main";

const config = require(`/zenn.config.ts`).default;

export function ZeneGETArticlesGroup() {
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
            <ClientZennGetElements_articles/>
        </>
    )
}