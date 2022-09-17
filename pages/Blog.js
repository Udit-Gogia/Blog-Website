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
			// console.log(documents);
			setBlogs(documents);
		};

		getBlogs();
	});

	return (
		<div>
			<Navbar />

			<div className="flex flex-wrap justify-center ">
				{blogs.map((blog, index) => {
					return (
						<div
							key={index}
							className="bg-brickred p-4 m-6 rounded-xl shadow-2xl basis-[40%] "
						>
							<h1 className="text-3xl text-lightbeige font-bold text-center">
								{blog.title}
							</h1>

							<p className="text-lightbeige oswald-reg text-lg my-4">
								{blog.story}
							</p>
							<div className="flex justify-between mt-4 bg-lightbeige text-brickred p-2 rounded-lg ">
								<p className=" oswald-semibold text-lg">
									By <span className="underline">{blog.bloggerName}</span>
								</p>
								<p className=" oswald-semibold text-lg">{blog.date}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
