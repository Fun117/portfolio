import { Metadata } from "next";
import PageClient_Portfolio from "../_pages/portfolio-pag";

export const metadata: Metadata = {
    title: `Portfolio`
}

export default function Home() {

	return (
		<>
			<PageClient_Portfolio/>
		</>
	);
}