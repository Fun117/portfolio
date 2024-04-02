'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/client/header";
import Footer from "@/components/client/footer";
import { LanguageSkill, LanguageSkillGroup } from "@/components/client/skil";
import { ZeneGETArticlesGroup } from "@/components/zenn/src/main";
import { Loading, NetworkOffline } from "@/components/client/status";
import { ContentTooltip } from "@/components/client/main";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MyZoon } from "@/components/client/svg";
import { MdAlternateEmail } from "react-icons/md";
import { NavigationConfig } from "@/components/_config";

import { BsArrowDownCircle } from "react-icons/bs";

const navigationConfig: NavigationConfig = require(`/src/components/_config`).navigationConfig;

export default function PageClient_Home() {

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
				<div className="relative w-full h-screen bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(/brand/fun117/fun117_fullscreen_1920x1080.webp)`}}>
					<div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
						<div className='flex justify-center items-center w-full px-2'>
							<div className="relative flex items-center rounded-lg border w-full min-w-44 max-w-xl h-full bg-neutral-200/20 border-neutral-300/30 backdrop-blur backdrop-brightness-50 shadow-lg">
								<Image
									src={`/icons/fun117/fun117_1080x1080.webp`}
									alt="Fun117 Icon"
									width={100}
									height={100}
									priority
									className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-16 rounded-full border-4 border-white/80"
								/>
								<div className="flex flex-col gap-2 w-full px-5 pt-10 pb-5 text-center text-neutral-50">
									<div>
										<h1 className="font-semibold text-2xl">Fun117</h1>
										<p className="text-sm opacity-70">A passionate Programmer from Japan</p>
									</div>
									<div className="flex justify-center items-center gap-2">
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
								<div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-60">
									<BsArrowDownCircle className="animate-bounce w-6 h-6 text-neutral-50"/>
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
		<div className="flex flex-col pt-10">
			<div className="flex flex-col py-5">
				<div className="flex flex-col justify-center items-center mb-5 px-5 select-none pointer-events-none">
					<div className="relative flex items-center overflow-hidden rounded-lg border w-full min-w-44 max-w-xl h-20 bg-neutral-200/50 border-neutral-300/30">
						<Image
						src={`/icons/fun117/fun117_1080x1080.webp`}
						alt="Fun117 Icon"
						width={100}
						height={100}
						priority
						className="absolute left-[-15px] rounded-full"
						/>
						<div className="pl-24 md:pl-28 pr-2">
							<h1 className="font-semibold">Fun117</h1>
							<p className="text-sm opacity-70">ポートフォリオとプロフィール</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col py-5">
				<LanguageSkillGroup>
					<LanguageSkill language="Nextjs" point={80}/>
					<LanguageSkill language="TypeScript" point={75}/>
					<LanguageSkill language="React" point={70}/>
					<LanguageSkill language="HTML" point={60}/>
					<LanguageSkill language="CSS" point={60}/>
					<LanguageSkill language="JavaScript" point={65}/>
					<LanguageSkill language="Nodejs" point={50}/>
					<LanguageSkill language="RESTful API" point={55}/>
					<LanguageSkill language="Git" point={70}/>
					<LanguageSkill language="Python" point={25}/>
					<LanguageSkill language="Ruby" point={10}/>
					<LanguageSkill language="Mysql" point={20}/>
					<LanguageSkill language="Java" point={30}/>
				</LanguageSkillGroup>
			</div>
			<div className="flex flex-col bg-slate-100 py-10">
				<ZeneGETArticlesGroup/>
			</div>
		</div>
		</>
	)
}