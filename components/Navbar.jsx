import style from '../styles/Navbar.module.css';

export default function Home() {
	return (
		<div className="flex justify-between border-b-2 border-b-brickred py-4 shadow-sm bg-lightbeige">
		  <div>
					<p className="text-2xl ml-16 oswald-bold tracking-wider text-brickred">Blogs<span className="text-black">Page</span></p>
		  </div>

		  <div>
				<ul  className="flex px-4 oswald-reg tracking-wider">
				<li className={`text-lg px-3 border-l-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}>Home</li>
				<li className={`text-lg px-3 border-l-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}>New Blog</li>
				<li className={`text-lg px-3 border-l-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}>User</li>
				<li className={`text-lg px-3 border-x-4 border-darkpinkish font-semibold tracking-wider ${style.button}`}>Developer</li>
			</ul>
		  </div>
	  </div>
	)
  }
  