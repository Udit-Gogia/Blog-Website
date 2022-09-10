import Typewriter from 'typewriter-effect';
import Blog from "../assets/images/Saly-10.png"
import Image from 'next/image';

export default function LandingComp() {
  return (
		<div className="flex w-screen justify-around">

		<div className="flex flex-col justify-center p-10">
			<div classNae="my-6">
				<h1 className="text-7xl oswald-bold ">Write what makes you</h1>
			</div>

			<div>
				<Typewriter className="Typewriter"
				options={{
					strings: ['happy.', 'amused.', 'sad.', 'angry.'],
					autoStart: true,
					loop: true,
				}}
				/>
			</div>

			<div className="mt-6">
					<p className="text-xl">Share your thoughts with the world.</p>
			</div>

			<div className="mt-16">
				{/* <a href="#" className="text-darkpinkish p-4 rounded-xl text-2xl border-brickred px-12 border-2 ">Get Started</a>  */}

				<div class="box-1">
					<div class="button btn-one">
						<span className="text-xl oswald-reg tracking-wider">Get Started</span>
					</div>
				</div>
			</div>
		</div>

			<div className="w-[35rem]">
				<Image src={Blog} width="650" height="650" alt="img-blog" ></Image>
		</div>

	</div>
  )
}
