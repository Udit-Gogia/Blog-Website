import Navbar from "../components/Navbar";
import LoginImg from "../assets/images/img-Login.png";
import Image from "next/image";
// import GoogleImg from "../assets/images/Google-icon.png";
import styles from "../styles/Login.module.css";

export default function Login() {
	return (
		<>
			<Navbar />
			<div className="flex w-screen justify-around ">
				<div className="flex flex-col justify-center p-10 ">
					<div className="">
						<h1 className="text-3xl oswald-semibold ">Start Sharing!</h1>
					</div>

					{/* <div className="mt-12 ml-12">
						<button>
							<div className={`${styles.box2} bg-lightblueish`}>
								<div
									className={`flex justify-center items-center ${styles.button} ${styles.btnTwo}  p-2`}
								>
									<span className="text-xl oswald-semibold tracking-wider">
										Done
									</span>
								</div>
							</div>
						</button> */}
					{/* </div> */}
				</div>

				<div className="xl:w-[40rem] sm:w-0">
					<Image src={LoginImg} width="650" height="650" alt="img-blog"></Image>
				</div>
			</div>
		</>
	);
}
