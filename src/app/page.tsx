
import Link from "next/link";
import PageClient_Home from "./_pages/home-page";

export default function Home() {

	return (
		<>
			<PageClient_Home/>
		</>
	);
}

function COMING_COON() {
	return (
		<>
			<div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen css-selector select-none">
				<Link href={`https://github.com/Fun117`} className="bg-gray-200/20 rounded-md border border-gray-300/30 shadow-lg backdrop-blur-lg  p-5 text-center hover:scale-105 hover:drop-shadow-2xl active:scale-95 active:drop-shadow-md active:opacity-50 transition-all duration-300 ease-in-out">
					<h1 className="text-4xl">COMING COON</h1>
				</Link>
			</div>
		</>
	)
}