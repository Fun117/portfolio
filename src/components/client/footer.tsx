import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MyZoon } from "./svg";
import { NavigationConfig } from "../_config";
import { ContentTooltip } from "./main";

const navigationConfig: NavigationConfig = require(`/src/components/_config`).navigationConfig;
const footerConfig: FooterConfig[] = require(`/src/components/_config`).footerConfig;

export interface FooterConfig {
    title: string;
    contents: {
        label: string;
        url: string;
        target: "_blank" | "_self" | "_top" | "_parent";
    }[];
}

export default function Footer() {
    return (
        <>
        <footer className="bg-white flex flex-col w-full">
            <div className="flex justify-between flex-row flex-wrap px-5 md:px-20 py-5 md:py-10 transition-all duration-500 ease-in-out">
                <div className="flex flex-col gap-4 mr-5">
                    <Link href={`${navigationConfig.author?.socials.github}`} target="_block" className="flex items-center">
                        <Avatar className="text-[11px] border w-[40px] h-[40px] overflow-hidden rounded-full shadow-sm hover:scale-[102%] hover:shadow-lg active:scale-[98%] active:shadow transition-all duration-300 ease-in-out">
                            <AvatarImage alt={`${navigationConfig.username} icon`} src={`https://github.com/fun117.png`}/>
                            <AvatarFallback>IC</AvatarFallback>
                        </Avatar>
                        <p className="font-bold text-base ml-2 hover:text-neutral-500 transition-all duration-300 ease-in-out">{navigationConfig.username}</p>
                    </Link>
                    <div className="flex gap-2">
                        <ContentTooltip label="GitHub">
                            <Link aria-label="github" href={`${navigationConfig.author?.socials.github}`} target="_block" className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out">
                                <FaGithub className="text-xl"/>
                            </Link>
                        </ContentTooltip>
                        <ContentTooltip label="X(Twitter)">
                            <Link aria-label="twitter" href={`${navigationConfig.author?.socials.twitter}`} target="_block" className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out">
                                <FaTwitter className="text-xl"/>
                            </Link>
                        </ContentTooltip>
                        <ContentTooltip label="Zenn">
                            <Link aria-label="zenn" href={`${navigationConfig.author?.socials.zenn}`} target="_block" className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out">
                                <MyZoon className="text-xl" />
                            </Link>
                        </ContentTooltip>
                        <ContentTooltip label="Email">
                            <Link aria-label="email" href={`${navigationConfig.author?.socials.mailto}`} target="_block" className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out">
                                <MdAlternateEmail className="text-xl"/>
                            </Link>
                        </ContentTooltip>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 mt-5 md:mt-0">
                    {footerConfig.map((group: FooterConfig, index: number) => {
                        return (
                            <nav key={index} className="flex flex-col gap-4">
                                <h1 className="font-semibold text-base">{group.title}</h1>
                                <ul className="flex flex-col gap-2">
                                    {group.contents.map((content, index2: number) => {
                                        return (
                                            <li key={index2}>
                                                <Link href={content.url} target={content.target} className="text-neutral-800 hover:text-neutral-600/70 hover:underline transition-all duration-300 ease-in-out">
                                                {content.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        );
                    })}
                </div>
            </div>
            <div className="border-neutral-200 border-t flex items-center justify-center w-auto p-3 mx-[5%]">
                <Link className="text-neutral-800 hover:text-neutral-600/70 transition-all duration-300 ease-in-out" href={`${navigationConfig.author?.socials.github}`} target="_block">
                &copy; {navigationConfig.year} All Rights Reserved
                </Link>
            </div>
        </footer>
        </>
    )
}