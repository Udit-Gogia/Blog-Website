import style from "../styles/Navbar.module.css";
import Link from "next/link";

function Home() {
	return (
		<div className="flex justify-between border-b-2 border-b-brickred py-4 shadow-sm bg-lightbeige">
			<div>
				<p className="text-2xl ml-[6.3rem] oswald-bold tracking-wider text-brickred">
					Blog<span className="text-black">Spot</span>
				</p>
			</div>

			<div className="mr-[6.3rem]">
				<ul className="flex px-4 oswald-reg tracking-wider">
					<li
						className={`text-lg px-3 border-l-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}
					>
						<Link href="/">Home</Link>
					</li>
					<li
						className={`text-lg px-3 border-l-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}
					>
						<Link href="/Blog">Blogs</Link>
					</li>
					<li
						className={`text-lg px-3 border-l-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}
					>
						<Link href="/NewBlog">New Blog</Link>
					</li>
					<li
						className={`text-lg px-3 border-x-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}
					>
						<a
							href="https://udit-gogia.github.io/Portfolio-Website/"
							target="_blank"
							rel="noreferrer"
						>
							Developer
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Home;
