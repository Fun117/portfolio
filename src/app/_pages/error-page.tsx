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

const navigationConfig: NavigationConfig = require(`/src/components/_config`).navigationConfig;

export default function PageClient_Error() {

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
									<Link href={`/`}>
										<h1 className="font-semibold text-2xl">Something went wrong!</h1>
										<p className="text-sm opacity-70"></p>
									</Link>
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

		</>
	)
}