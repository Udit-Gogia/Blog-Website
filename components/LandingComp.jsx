import Typewriter from "typewriter-effect";
import Blog from "../assets/images/Saly-10.png";
import Image from "next/image";
import Link from "next/link";

export default function LandingComp() {
	return (
		<div className="flex w-screen justify-around ">
			<div className="flex flex-col justify-center p-10 mt-28">
				<div className="my-6">
					<h1 className="text-7xl oswald-bold ">Write what makes you</h1>
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

				<div className="mt-12">
					<p className="text-xl  oswald-reg tracking-wider">
						Share your thoughts with the world.
					</p>
				</div>

				<div className="mt-6">
					<Link href="../Blog">
						<div className="box-1">
							<div className="button btn-one">
								<span className="text-xl oswald-semibold tracking-widest">
									Get Started
								</span>
							</div>
						</div>
					</Link>
				</div>
			</div>

			<div className="xl:w-[35rem] sm:w-0">
				<Image src={Blog} width="650" height="650" alt="img-blog"></Image>
			</div>
		</div>
	);
}
