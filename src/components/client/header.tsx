'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavigationConfig } from "../_config";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";
import { _locales } from "./_locales";


const navigationConfig: NavigationConfig = require(`/src/components/_config`).navigationConfig;
const headerConfig: HeaderConfig = require(`/src/components/_config`).headerConfig;

export interface HeaderConfig {
    mode: "fixed" | "sticky";
    logo?: string | null;
    title: string;
    contents: contents[];
}
type contents = {
    label: string;
    url: string;
    target: "_blank" | "_self" | "_top" | "_parent";
}

interface _SheetContents_config {
    title: string;
    description?: string | null;
}
const SheetContents_config: _SheetContents_config = {
    "title": _locales(`ポートフォリオとプロフィール`),
}

export default function Header({ topImageHtml, isScrolledCss, topImageSetCss, topImageLabel }: { topImageHtml?: React.ReactNode | null, isScrolledCss?: boolean, topImageSetCss?: string | null, topImageLabel?: string | null }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                const scrollY = window.scrollY;
                if (scrollY >= 60) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            handleScroll();
        };
    }, []);

    return (
        <>
        <header className={`${headerConfig.mode === "fixed" ? `fixed ${!isScrolled ? `bg-white/0 border-none` : `backdrop-blur-md bg-white/95 border-b`}` : `sticky backdrop-blur-md bg-white border-b`} top-0 z-[49] flex flex-row justify-between items-center w-full h-16 px-3 md:px-8 py-5 transition-all duration-300 ease-in-out border-neutral-300/50 ${isScrolledCss && !isScrolled ? `text-neutral-100`:`text-neutral-900`}`}>
            <Link href={`${navigationConfig.site?.links.home}`} className={`${isScrolledCss && !isScrolled ? `hover:text-neutral-300/80`:`hover:text-neutral-800/80`}`}>
                <h1 className="font-bold text-lg transition-all duration-300 ease-in-out">{headerConfig.title}</h1>
            </Link>
            <div className="flex items-center gap-4">
                <nav className="hidden md:block">
                    <ul className="flex flex-row gap-3">
                        {headerConfig.contents.map((content, index: number) => {
                            return (
                                <li key={index}>
                                    <Link href={content.url} target={content.target} className={`${isScrolledCss && !isScrolled ? `hover:text-neutral-300/80`:`hover:text-neutral-800/80`} hover:underline transition-all duration-300 ease-in-out`}>
                                    {content.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div>
                    <SheetContents/>
                </div>
            </div>
        </header>
        <div className="w-full h-full">
            {topImageHtml?<>
            {topImageHtml}
            </>:<>
                <div className={topImageSetCss? topImageSetCss : `relative w-full h-auto min-h-80 md:min-h-auto md:min-h-96 bg-cover bg-top bg-no-repeat`} style={{ backgroundImage: `url(/brand/fun117/fun117_fullscreen_bgnone_1683x1080.webp)`}}>
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full backdrop-blur-sm">
                        <div className="bg-neutral-200/50">
                            <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">{topImageLabel}</h1>
                        </div>
                    </div>
                </div>
            </>}
        </div>
        </>
    )
}

function SheetContents() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button aria-label={_locales(`メニュー`)} className={`flex justify-center items-center w-11 h-11 p-2 border rounded-lg bg-neutral-200/20 border-neutral-300/30 hover:bg-neutral-200/60 hover:shadow-md active:opacity-70 active:scale-[98%] transition-all duration-300 ease-in-out`}><AlignJustify className="font-bold text-lg"/></button>
            </SheetTrigger>
            <SheetContent className="px-0">
                <SheetHeader className="px-6">
                    <SheetTitle>{SheetContents_config.title}</SheetTitle>
                    <SheetDescription>{SheetContents_config.description}</SheetDescription>
                </SheetHeader>
                <div className="py-2">
                    <div className="block md:hidden">
                        <nav className="flex w-full justify-start">
                            <ul className="flex flex-col items-start gap-3 w-full pr-2">
                                {headerConfig.contents.map((content, index: number) => {
                                    return (
                                        <li key={index} className="flex w-full max-w-[90%] sm:max-w-[80%] truncate">
                                            <Link href={content.url} target={content.target} className="truncate rounded-r-lg w-full px-2 py-1 text-left border border-l-0 bg-neutral-100 border-neutral-300/30 text-neutral-800 hover:bg-neutral-200 transition-all duration-300 ease-in-out">
                                            {content.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                <SheetFooter className="px-6">
                    <SheetClose asChild>
                        <Button>{_locales(`閉じる`)}</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

function DropdownMenuContents({ isScrolled }: { isScrolled: boolean }) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex justify-center items-center w-11 h-11 p-2 border rounded-lg bg-white/50 text-black border-neutral-300/30 hover:bg-white hover:shadow-md active:opacity-70 active:scale-[98%] transition-all duration-300 ease-in-out"><AlignJustify className="font-bold text-lg"/></button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem>
                            New Team
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuItem disabled>API</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}