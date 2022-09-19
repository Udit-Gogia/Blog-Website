import style from "../styles/Navbar.module.css";
import Link from "next/link";

function Home() {
	return (
		<div className="flex justify-between border-b-2 border-b-brickred py-4 shadow-sm bg-lightbeige flex-col lg:flex-row">
			<div>
				<p className="text-2xl ml-[6.3vw] oswald-bold tracking-wider text-brickred sm:text-center sm:mb-4">
					Blog<span className="text-black">Spot</span>
				</p>
			</div>

			<div className="lg:mr-[3rem]">
				<ul className="flex px-4 oswald-reg tracking-wider sm:px-2 justify-center ">
					<li
						className={`lg:text-lg px-3 lg:border-l-4 border-darkpinkish font-semibold lg:tracking-wider ${style.button} sm:text-md sm:border-l-2`}
					>
						<Link href="/">Home</Link>
					</li>
					<li
						className={`lg:text-lg px-3 lg:border-l-4 border-darkpinkish font-semibold lg:tracking-wider ${style.button} sm:text-md sm:border-l-2`}
					>
						<Link href="/Blog">Blogs</Link>
					</li>
					<li
						className={`lg:text-lg px-3 lg:border-l-4 border-darkpinkish font-semibold lg:tracking-wider ${style.button} sm:text-md sm:border-l-2`}
					>
						<Link href="/NewBlog">New Blog</Link>
					</li>
					<li
						className={`lg:text-lg px-3 lg:border-x-4 border-darkpinkish font-semibold lg:tracking-wider ${style.button} sm:text-md sm:border-x-2`}
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
