'use client'

import { redirect } from 'next/navigation'
import Header from "@/components/client/header";
import Footer from "@/components/client/footer";
import { Loading, NetworkOffline } from '@/components/client/status';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const config: links_config = require(`/src/app/links/links.config.ts`).default;

export interface links_config {
    [key: string]: string;
}

export default function PageClient_Links({ id }: { id: string }) {

	if(config[id]){
		redirect(config[id])
	}

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
							<div className="flex flex-col gap-2 w-full px-5 py-5 text-center text-neutral-50">
								<div>
									<h1 className="font-semibold text-2xl">Fun117&apos;s Portfolio & Profile</h1>
									<p className="text-sm opacity-70">URLが無効です！既に廃止または変更された可能性があります。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>}
			/>
		</main>
		<Footer/>
		</>
	);
};