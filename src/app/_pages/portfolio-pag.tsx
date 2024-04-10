'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/client/header";
import Footer from "@/components/client/footer";
import { LanguageSkill, LanguageSkillGroup } from "@/components/client/skil";
import { ZeneGETArticlesGroup } from "@/components/zenn/main";
import { Loading, NetworkOffline } from "@/components/client/status";
import { ContentTooltip } from "@/components/client/main";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MyZoon } from "@/components/client/svg";
import { MdAlternateEmail } from "react-icons/md";
import { NavigationConfig } from "@/components/_config";

import { BsArrowDownCircle } from "react-icons/bs";
import { GitHubGetRepositoryGroup } from "@/components/github/main";
import { _locales } from "@/components/client/_locales";

const navigationConfig: NavigationConfig = require(`/src/components/_config`).navigationConfig;

export default function PageClient_Portfolio() {

	const [NetworkStatus, setNetworkStatus] = useState<boolean>(true);
	const [isPageLoaded, setPageLoaded] = useState(false);
	useEffect(() => {
        const PageLoaded = async () => {
            try {
                if (typeof window !== 'undefined') {
					window.addEventListener("offline", (e) => {
						setNetworkStatus(false)
					});
					window.addEventListener("online", (e) => {
						setNetworkStatus(true)
					});
				}
                setPageLoaded(true);
            } catch (error) {
                console.error('PageLoaded:', error);
            }
        };

        if (!isPageLoaded) {
            PageLoaded();
        }
    }, [isPageLoaded]);

	if (!NetworkStatus) {
		return <NetworkOffline/>;
	}

	if (!isPageLoaded) {
        return <Loading />;
    }

	return (
		<>
		<main className="w-full h-full min-h-screen transition-all duration-300 ease-in-out">
			<Header isScrolledCss topImageHtml={
				<div className="relative w-full max-h-96 h-screen bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(/brand/fun117/fun117_fullscreen_1920x1080.webp)`}}>
					<div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
						<div className='flex justify-center items-center w-full px-2'>
							<div className="relative flex items-center rounded-lg border w-full min-w-44 max-w-xl h-full bg-neutral-200/20 border-neutral-300/30 backdrop-blur backdrop-brightness-50 shadow-lg">
								<div className="flex flex-col gap-2 w-full px-5 py-10 text-center text-neutral-50">
									<h1 className="font-semibold text-2xl">{_locales(`ポートフォリオ`)}</h1>
								</div>
							</div>
						</div>
					</div>
				</div>}
			/>
			<Page/>
		</main>
		<Footer/>
		</>
	);
}

function Page() {
	return (
		<>
		<div className="flex flex-col pt-10 bg-slate-100">
			<div className="flex flex-col py-10 border-y-2 bg-sky-100/80 border-white/30">
				<GitHubGetRepositoryGroup/>
			</div>
			<div className="flex flex-col py-10">
				<ZeneGETArticlesGroup/>
			</div>
		</div>
		</>
	)
}