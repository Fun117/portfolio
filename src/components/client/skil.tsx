'use client';

import Link from "next/link";
import { ContextMenuItem } from "../ui/context-menu";
import { FrameworkIcon } from "./framework";
import { ContentMenu, ContentSkillAboutDialog, ContentTooltip } from "./main";
import { _locales } from "./_locales";

export function LanguageSkillGroup({ children }: { children: React.ReactNode }) {
    return (
        <>
            <span className="flex flex-col items-center mx-auto mb-5 px-5 select-none pointer-events-none">
                <h1 className="text-4xl font-bold text-center text-black">{_locales(`スキル`)}</h1>
                <p className="text-center">{_locales(`カードをクリックすると詳細が表示されます。`)}</p>
            </span>
            <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2 md:gap-3 max-w-[960px] p-2 mx-auto scroll-pt-10 transition-all duration-500 ease-in-out">
                {children}
            </section>
        </>
    )
}

export function LanguageSkill({ language, point }: { language: string, point: number }) {
    let skillLevel;
    let skillComment;

    if (point >= 0 && point <= 19) {
        skillLevel = _locales(`初級`);
        skillComment = _locales(`基本的な文法と概念を理解している。`);
    } else if (point >= 20 && point <= 39) {
        skillLevel = _locales(`初級から中級`);
        skillComment = _locales(`基本的な文法や概念に加え、いくつかの高度な機能を使うことができる。`);
    } else if (point >= 40 && point <= 59) {
        skillLevel = _locales(`中級`);
        skillComment = _locales(`基本的な文法や概念だけでなく、より高度な機能やライブラリも扱える。`);
    } else if (point >= 60 && point <= 79) {
        skillLevel = _locales(`中級から上級`);
        skillComment = _locales(`複雑な問題を解決する技術に精通しているが、まだすべての機能や概念を理解していない可能性がある。`);
    } else if (point >= 80 && point <= 100) {
        skillLevel = _locales(`上級`);
        skillComment = _locales(`言語のほぼすべての機能と概念に熟達し、高度な問題を解決できる。`);
    } else {
        skillLevel = _locales(`不明`);
        skillComment = _locales(`不明なレベル。0～100の間で指定してください。`);
    }

    return (
        <div>
            <ContentMenu MenuContent={<>
                <ContextMenuItem>
                    <Link href={`https://www.google.com/search?q=${language}`} target="_block">
                    {_locales(`Googleで検索`)}
                    </Link>
                </ContextMenuItem>
            </>}>
                <ContentSkillAboutDialog language={language} point={point} skillComment={skillComment}>
                    <div role="button" aria-label="skill card" className="animate-fade-up transition-all duration-500 ease-in-out select-none">
                        <div className="flex flex-col border rounded-[15px] shadow-sm hover:drop-shadow-lg hover:scale-[102%] active:shadow-sm active:drop-shadow-none active:scale-[98%] active:opacity-50 transition-all duration-300 ease-in-out bg-neutral-50 border-neutral-300/30">
                            <div className="flex flex-col">
                                <div className="flex justify-center py-[25px] px-10 text-[46px] rounded-t-[15px] bg-blue-300/50 select-none pointer-events-none">
                                    <span className="ml-[0.05px] text-black whitespace-normal"><FrameworkIcon framework={language}/></span>
                                </div>
                                <div className="flex justify-center items-center py-3">
                                    <h1 className="px-3 text-base font-bold max-h-[4.55em] overflow-hidden truncate">{skillLevel}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSkillAboutDialog>
            </ContentMenu>
        </div>
    );
}