import Navbar from "../components/Navbar";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import "animate.css";

export default function Login() {
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [story, setStory] = useState("");
	const [bloggerName, setbloggerName] = useState("");

	function handleTitleChange(e) {
		setTitle(e.target.value);
	}
	function handleStoryChange(e) {
		setStory(e.target.value);
	}
	function handleBloggerChange(e) {
		setbloggerName(e.target.value);
	}

	const blogs = collection(db, "Blogs");
	//Specifying the collection where each blog will be stored.

	function submit() {
		if (title != "" || story != "" || bloggerName != "") {
			setTitle("");
			setStory("");
			setbloggerName("");

			const d = new Date();
			const date = d.toDateString();

			// parametes it takes - 1. collection to be targeted -2 data that has to be added.
			addDoc(blogs, { title, story, bloggerName, date });
			Swal.fire({
				icon: "success",
				showDenyButton: true,
				title: "Your Blog has been shared.",
				width: 600,
				padding: "3em",
				backdrop: "rgba(0,0,0,0.4)",
				confirmButtonColor: "#c5352c",
				confirmButtonText: "See other Blogs.",
				denyButtonText: `Write another Blog`,
				iconColor: "#c5352c",
				color: "#c5352c",
				background: "#F1E4CD",
				showClass: {
					popup: "animate__backInRight animate__animated",
				},
			}).then((result) => {
				if (result.isConfirmed) {
					router.push("/Blog");
				}
			});
		} else {
			Swal.fire({
				icon: "info",
				title: "Please fill all the fields.",
				width: 600,
				padding: "3em",
				backdrop: "rgba(0,0,0,0.4)",
				confirmButtonColor: "#c5352c",
				iconColor: "#c5352c",
				color: "#c5352c",
				background: "#F1E4CD",
				showClass: {
					popup: "animate__backInRight animate__animated",
				},
			});
		}
	}

	return (
		<>
			<Navbar />

			<div className="flex items-center mt-2 justify-evenly sm:flex-col lg:flex-row">
				<div>
					<h1 className="lg:text-5xl oswald-bold text-center text-brickred bg-lightbeige sm:text-2xl p-4 stroke-lightpinkish">
						Start
						<br /> Sharing !
					</h1>
				</div>
				<div className="bg-lightpinkish flex flex-col basis-3/4 rounded-xl mt-4 justify-center ">
					<div>
						<form action="" method="post">
							<div className="flex items-center">
								<div className="flex  items-center my-4 mx-12 w-full sm:flex-col lg:flex-row">
									<div className="w-full h-40">
										<label className="relative cursor-pointer rounded-lg">
											<input
												type="text"
												placeholder="Title "
												className="w-full h-full p-4 oswald-semibold text-4xl text-brickred border-lightbeige border-4 rounded-xl border-opacity-70 outline-none focus:border-solid border-double placeholder-gray-300 placeholder-opacity-0 transition-duration-200 bg-transparent tracking-wider text-center "
												name="title"
												value={title}
												onChange={handleTitleChange}
												required
												// minLength={5}
											/>
											<span className="oswald-reg text-3xl text-brickred absolute left-5 -top-5 px-1 transition duration-300 input-text -mx-1 ">
												Title:
											</span>
										</label>
									</div>
									{/* <div className="flex items-center my-4 ml-[1.5vw] basis-1/3">
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
													<p className="mb-2 text-sm text-brickred dark:text-brickred px-4 text-center font-semibold">
														{imageTitle ? (
															imageTitle
														) : (
															<span>
																Cover Image
																<br />
																Click to upload
															</span>
														)}
													</p>
												</div>
												<input
													id="dropzone-file"
													type="file"
													className="hidden"
													onChange={handlefileUpload}
													// value={image}
												/>
											</label>
										</div>
									</div> */}
								</div>
							</div>

							<div className="flex items-center my-4 justify-center flex-col w-full">
								<label className="w-11/12 relative cursor-pointer">
									<textarea
										placeholder="Input"
										className="w-full h-[15rem] text-lg p-4 border-opacity-70 outline-none rounded-xl focus:border-darkpinkish bg-lightbeige text-brickred font-semibold placeholder-gray-300 placeholder-opacity-0 transition-duration-[300] resize-none"
										name="story"
										value={story}
										onChange={handleStoryChange}
										required
									/>
									<span className="oswald-reg text-3xl text-brickred absolute left-3 mt-4 px-1 transition duration-300 input-text tracking-wide">
										Story:
									</span>
								</label>

								<div className="flex w-full justify-between px-12 mt-4">
									<div className=" bg-brickred px-4 rounded-xl my-auto basis-1/2">
										<span className="text-lightbeige text-lg font-bold tracking-wider py-4">
											By:{" "}
										</span>

										<input
											type="text"
											value={bloggerName}
											onChange={handleBloggerChange}
											required
											className="w-11/12 bg-transparent border-b-2 focus:outline-none border-lightbeige tracking-wide text-lightbeige text-xl pb-1 teresa-semibold my-4 text-center"
										></input>
									</div>

									<p
										type="submit"
										className="bg-lightbeige text-brickred font-bold oswald-semibold p-4 rounded-xl text-2xl m-5 mr-0 tracking-wider basis-1/2 transition duration-300 hover:bg-brickred hover:text-lightbeige text-center"
										onClick={submit}
									>
										Done
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
