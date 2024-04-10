'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { ServerZennGET_articles } from "../server/main";
import { ZennAPIGetArticle, ZennAPIGetArticleObj, ZennConfigGET } from "../config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ContextMenuItem,
} from "@/components/ui/context-menu"
import { EncodeString } from "@/components/main";
import { ContentMenu } from "@/components/client/main";
import { _locales } from "@/components/client/_locales";

function ClientZennFormatUpdateTime( updateTime: string ) {
    const currentDate = new Date();
    const lastUpdateTime = new Date(updateTime);
    const timeDiff = currentDate.getTime() - lastUpdateTime.getTime();
    const diffInHours = Math.floor(timeDiff / (1000 * 3600));
    const diffInDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (diffInHours < 1) {
        const diffInMinutes = Math.floor(timeDiff / (1000 * 60));
        if (diffInMinutes < 1) {
            return _locales(`たった今`);
        } else {
            return `${diffInMinutes}${_locales(`分前`)}`;
        }
    } else if (diffInDays < 1) {
        if (diffInHours === 1) {
            return _locales(`1時間前`);
        } else {
            return `${diffInHours}${_locales(`時間前`)}`;
        }
    } else if (diffInDays === 1) {
        return _locales(`昨日`);
    } else if (diffInDays < 30) {
        return `${diffInDays}${_locales(`日前`)}`;
    } else if (diffInDays < 270) {
        const diffInMonths = Math.floor(diffInDays / 30);
        return `${diffInMonths}${_locales(`ヶ月前`)}`;
    } else {
        const formattedDate = lastUpdateTime.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
        return formattedDate.replace(/\//g, '/');
    }
}

export function ClientZennGetElements_articles({ count }: { count?: number }) {

    const [zenn_articles, setZenn_articles] = useState<ZennAPIGetArticleObj | undefined>(undefined)

    useEffect(() => {
        try {
            const async = async () => {
                const res = await ServerZennGET_articles(ZennConfigGET(`username`),count);
                setZenn_articles(res.articles);
            };
            async();
        } catch (err) {
            console.error(`Error:`,err);
        }
    }, [])

    function ContentPulse() {
        return (
            <article className="w-full h-full snap-start animate-fade-up transition-all duration-500 ease-in-out">
                <div className="relative flex flex-col w-full h-full overflow-hidden rounded-[15px] shadow-sm hover:drop-shadow-lg hover:scale-[102%] active:shadow-sm active:drop-shadow-none active:scale-[98%] active:opacity-50 transition-all duration-300 ease-in-out bg-neutral-50 border-neutral-300/30 border">
                    <span className="flex flex-col">
                        <div className="flex justify-center py-[25px] bg-blue-300/50 animate-pulse">
                            <span className="ml-[0.05px] bg-neutral-200 rounded-full w-[69px] h-[69px]"/>
                        </div>  
                        <div className="flex pt-3 animate-pulse">
                            <h1 className="px-3 max-h-[4.55em] bg-neutral-200 rounded-lg w-[90%] h-5 ml-2"/>
                        </div>
                        <div className="px-[14px] pt-[10px] pb-[16px] text-[11px]">
                            <div className="animate-pulse">
                                <div className="flex items-center text-neutral-500">
                                    <span className="bg-neutral-200 rounded-lg w-[120px] h-5"/>
                                    <span className="inline-flex items-center ml-[6px] bg-neutral-200 rounded-lg w-[80px] h-5"/>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </article>
        )
    }

    if ( !Array.isArray(zenn_articles) ) {
        return (
            <>
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-[960px] p-2 mx-auto scroll-pt-10 transition-all duration-500 ease-in-out">
                <ContentPulse/>
                <ContentPulse/>
                <ContentPulse/>
                <ContentPulse/>
                <ContentPulse/>
                <ContentPulse/>
            </section>
            </>
        )
    }

    return (
        <>
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-[960px] p-2 mx-auto scroll-pt-10 transition-all duration-500 ease-in-out">
                {zenn_articles.map((content: ZennAPIGetArticle, index: number) => {
                    return (
                        <ContentMenu key={index} MenuContent={<> 
                            <ContextMenuItem>
                                <Link href={`https://twitter.com/intent/tweet?url=https://zenn.dev${content.path}&text=${EncodeString(`${content.title} | ${content.user.name}`)}&hashtags=zenn`} target="_block">
                                    {_locales(`X(Twitter)に投稿する`)}
                                </Link>
                            </ContextMenuItem>
                            <ContextMenuItem>
                                <Link href={`http://www.facebook.com/sharer.php?u=https://zenn.dev${content.path}`} target="_block">
                                    {_locales(`Facebookに投稿する`)}
                                </Link>
                            </ContextMenuItem>
                            <ContextMenuItem>
                                <Link href={`https://b.hatena.ne.jp/add?mode=confirm&url=https://zenn.dev${content.path}&title=${EncodeString(`${content.title} | ${content.user.name}`)}`} target="_block">
                                    {_locales(`はてなブックマークに登録`)}
                                </Link>
                            </ContextMenuItem>
                        </>}>
                            <article className="w-full h-full snap-start animate-fade-up transition-all duration-500 ease-in-out">
                                <div className="relative flex flex-col w-full h-full overflow-hidden rounded-[15px] shadow-sm hover:drop-shadow-lg hover:scale-[102%] active:shadow-sm active:drop-shadow-none active:scale-[98%] active:opacity-50 transition-all duration-300 ease-in-out bg-neutral-50 border-neutral-300/30 border">
                                    <Link className="absolute top-[12px] left-[12px] py-[3px] px-[6px] text-[10px] font-semibold text-white text-center uppercase bg-sky-500 rounded-full" href={`https://zenn.dev/tech-or-idea`} target="_block">
                                    {content.article_type}
                                    </Link>
                                    <Link className="flex flex-col" href={`https://zenn.dev${content.path}`} target="_block">
                                        <div className="flex justify-center py-[25px] text-[46px] bg-blue-300/50">
                                            <span className=" ml-[0.05px] overflow-hidden text-black whitespace-normal">{content.emoji}</span>
                                        </div>
                                        <div className="flex pt-3">
                                            <h1 className="px-3 text-base font-bold max-h-[4.55em] overflow-hidden truncate">{content.title}</h1>
                                        </div>
                                        {!content.publication &&
                                        <div className="px-[14px] pt-[10px] pb-[16px] text-[11px]">
                                            <div className="">
                                                <div className="flex items-center text-neutral-500">
                                                    <time dateTime={content.body_updated_at}>{ClientZennFormatUpdateTime(content.body_updated_at)}</time>
                                                    <span className="inline-flex items-center ml-[6px]"><Heart className="w-[13px] h-[13px] mr-[1px]"/>{content.liked_count}</span>
                                                </div>
                                            </div>
                                        </div>}
                                    </Link>
                                    {content.publication &&
                                    <div className="px-[14px] pt-[10px] pb-[16px] text-[11px]">
                                        <Link className="flex items-center text-[11px] text-neutral-600" href={`https://zenn.dev/p/${content.publication?.name}`} target="_block">
                                            <Avatar className="text-[11px] border w-6 h-6 overflow-hidden rounded-lg">
                                                <AvatarImage alt="IC" src={content.publication.avatar_small_url} className="w-6 h-6"/>
                                                <AvatarFallback>IC</AvatarFallback>
                                            </Avatar>
                                            <div className="ml-[7px]">
                                                <div className="flex mb-[2px]">
                                                    <div className="overflow-hidden truncate whitespace-normal">
                                                    {_locales("に投稿", content.publication.display_name)}
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-neutral-500">
                                                    <time dateTime={content.body_updated_at}>{ClientZennFormatUpdateTime(content.body_updated_at)}</time>
                                                    <span className="inline-flex items-center ml-[6px]"><Heart className="w-[13px] h-[13px] mr-[1px]"/>{content.liked_count}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>}
                                </div>
                            </article>
                        </ContentMenu>
                    );
                })}
            </section>
        </>
    )
}