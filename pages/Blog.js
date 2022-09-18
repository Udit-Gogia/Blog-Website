import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Blog() {
	const [blogs, setBlogs] = useState([]);
	const blogsCollectionRef = collection(db, "Blogs");

	useEffect(() => {
		const getBlogs = async () => {
			const collection = await getDocs(blogsCollectionRef);
			const documents = collection.docs.map((document) => document.data());
			setBlogs(documents);
		};

		getBlogs();
	});

	return (
		<div>
			<Navbar />

			<div className="flex flex-wrap flex-col-reverse items-center">
				{blogs.map((blog, index) => {
					return (
						<div
							key={index}
							className="bg-brickred p-4 m-4 rounded-xl shadow-2xl lg:h-[40vh] sm:h-[vh] max-w-6xl flex flex-col justify-between cursor-default"
						>
							<h1 className="text-3xl text-lightbeige font-bold text-center my-4 underline">
								{blog.title}
							</h1>

							<p className="text-lightbeige oswald-reg text-xl tracking-wide my-4">
								{blog.story}
							</p>
							<div className="flex justify-between mt-4 bg-lightbeige text-brickred p-2 rounded-lg ">
								<p className=" oswald-semibold text-lg pr-4">
									By <span className="underline">{blog.bloggerName}</span>
								</p>
								<p className=" oswald-semibold text-lg pl-4">{blog.date}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
