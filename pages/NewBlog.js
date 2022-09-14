import Navbar from "../components/Navbar";

export default function Login({ setIsAuth }) {
	return (
		<>
			<Navbar />
			{/* <div className="flex w-screen justify-around ">
				<div className="flex flex-col justify-center p-10 ">
					<div className="">
						<h1 className="text-3xl oswald-bold text-center ">
							Start Sharing!
						</h1>
					</div>
					<div className="flex flex-col rounded-xl m-6 lg:p-10 sm:p-10 lg:px-16 bg-[#ff676633] ">
						<div className="flex justify-center items-center mt-2 mx-5">
							<label className="relative cursor-pointer bg-brickred rounded-lg">
								<input
									type="text"
									placeholder="Title "
									className="lg:w-[40rem] sm:w-[30rem] h-[6rem] oswald-bold p-4 text-4xl text-lightbeige border-brickred focus:border-2  rounded-lg border-opacity-50 outline-none focus:border-darkpinkish placeholder-gray-300 placeholder-opacity-0 transition-duration-200 bg-transparent"
								/>
								<span className=" text-4xl text-lightbeige text-opacity-100 absolute left-3 top-7 px-1 transition duration-300 input-text -mx-1">
									Title:
								</span>
							</label>
						</div>
						<div className="flex lg:flex-row flex-col items-center">
							<div className="flex items-center mt-10 mx-5 ">
								<label className="relative cursor-pointer">
									<textarea
										placeholder="Input"
										className="lg:w-[20rem] h-[15rem] p-4 text-2xl border-brickred focus:border-2 rounded-lg border-opacity-50 outline-none focus:border-darkpinkish bg-lightbeige text-darkpinkish font-bold placeholder-gray-300 placeholder-opacity-0 transition-duration-[300] resize-none"
									/>
									<span className="oswald-semibold text-2xl text-darkpinkish absolute left-3 top-5 px-1 transition duration-300 input-text tracking-wide">
										Story:
									</span>
								</label>
							</div>
							<div className="flex items-center mt-10 mx-5 ">
								<div className="flex justify-center items-center w-full">
									<label
										for="dropzone-file"
										className="flex flex-col justify-center items-center w-full h-64 bg-lightbeige rounded-lg border-2 border-brickred border-dashed cursor-pointer"
									>
										<div className="flex flex-col justify-center items-center pt-5 pb-6">
											<svg
												aria-hidden="true"
												className="mb-3 w-10 h-10 text-brickred"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
												></path>
											</svg>
											<p className="mb-2 text-sm text-brickred dark:text-brickred px-4">
												<span className="font-semibold">Click to upload</span>{" "}
												or drag and drop
											</p>
											<p className="text-xs text-brickred dark:text-bricked px-4">
												SVG, PNG, JPG or GIF
											</p>
										</div>
										<input id="dropzone-file" type="file" className="hidden" />
									</label>
								</div>
							</div>
						</div>
					</div> */}

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
						</button>
					</div> */}
			{/* </div>

				<div className="xl:w-[40rem] sm:w-0">
					<Image src={LoginImg} width="650" height="650" alt="img-blog"></Image>
				</div>
			</div> */}

			<div className=" flex flex-col items-center mt-6 justify-center">
				<div className="">
					<h1 className="text-3xl oswald-bold text-center ">Start Sharing!</h1>
				</div>
				<div className="bg-lightpinkish flex flex-col w-[70vw] rounded-xl mt-6 justify-center">
					<div>
						<div className="flex items-center">
							<div className="flex justify-between items-center my-4 mx-12 w-full">
								<div>
									<label className="relative cursor-pointer rounded-lg mx-6">
										<input
											type="text"
											placeholder="Title "
											className="lg:w-[40vw] h-40 sm:w-[30rem] p-4 oswald-semibold text-4xl m-2 text-brickred border-brickred border-4 rounded-xl border-opacity-70 outline-none focus:border-solid border-double placeholder-gray-300 placeholder-opacity-0 transition-duration-200 bg-transparent tracking-wider text-center"
										/>
										<span className="text-3xl text-brickred absolute left-5 -top-5 px-1 transition duration-300 input-text -mx-1">
											Title:
										</span>
									</label>
								</div>
								<div className="flex items-center my-4 mx-auto w-1/5">
									<div className="flex justify-center items-center w-full">
										<label className="flex flex-col justify-center items-center w-full h-40 bg-lightbeige  rounded-lg cursor-pointer">
											<div className="flex flex-col justify-center items-center pt-5 pb-6">
												<svg
													aria-hidden="true"
													className="mb-3 w-10 h-10 text-brickred"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
													></path>
												</svg>
												<p className="mb-2 text-sm text-brickred dark:text-brickred px-4">
													<span className="font-semibold">Cover Image</span>
												</p>
												<p className="mb-2 text-sm text-brickred dark:text-brickred px-4">
													<span>Click to upload</span>
												</p>
											</div>
											<input
												id="dropzone-file"
												type="file"
												className="hidden"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center my-4 justify-center ">
							<label className="relative cursor-pointer">
								<textarea
									placeholder="Input"
									className="lg:w-[65vw] h-[15rem] text-2xl p-4 border-opacity-70 outline-none rounded-xl focus:border-darkpinkish bg-lightbeige text-darkpinkish font-semibold placeholder-gray-300 placeholder-opacity-0 transition-duration-[300] resize-none"
								/>
								<span className="text-3xl text-darkpinkish absolute left-3  top-5 px-1 transition duration-300 input-text tracking-wide">
									Story:
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
