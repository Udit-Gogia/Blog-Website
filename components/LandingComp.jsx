import Typewriter from "typewriter-effect";
import Blog from "../assets/images/Saly-10.png";
import Image from "next/image";
import Link from "next/link";

export default function LandingComp() {
	return (
		<div className="flex w-screen justify-around ">
			<div className="flex flex-col justify-center p-10 mt-28 lg:basis-3/5 lg:ml-10 sm:basis-full sm:pr-6 sm:ml-0 sm:mt-0">
				<div className="my-6 ">
					<h1 className="lg:text-6xl oswald-bold sm:text-3xl">
						Write what makes you
					</h1>
				</div>

				<div>
					<Typewriter
						className="Typewriter"
						options={{
							strings: ["happy.", "amused.", "sad.", "angry."],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>

				<div className="lg:mt-12 sm:mt-6">
					<p className="text-2xl oswald-semibold">
						Share your thoughts with the world.
					</p>
				</div>

				<div className="lg:mt-4 sm:mt-2">
					<Link href="../NewBlog">
						<div className="box-1">
							<div className="button btn-one">
								<span className="text-xl oswald-semibold tracking-widest sm:text-md">
									Get Started
								</span>
							</div>
						</div>
					</Link>
				</div>
			</div>

			<div className="xl:w-[40rem] sm:w-0 lg:basis-2/5 sm:basis-0">
				<Image src={Blog} width="650" height="650" alt="img-blog"></Image>
			</div>
		</div>
	);
}
