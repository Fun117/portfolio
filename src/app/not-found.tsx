
import PageClient_Home from "./_pages/home-page";
import PageClient_NotFound from "./_pages/not-found-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Page not found`
}

export default function Home() {

	return (
		<>
			<PageClient_NotFound/>
		</>
	);
}