import style from '../styles/Navbar.module.css';

export default function Home() {
	return (
		<div className="flex justify-between border-b-2 border-b-lightpinkish py-4 shadow-sm ">
		  <div>
			<p className="text-2xl font-semibold ml-16 oswald-semibold tracking-wider">Project Title</p>
		  </div>

		  <div>
				<ul  className="flex px-4 oswald-reg tracking-wider">
				<li className={`text-lg px-3 border-l-4 border-lightpinkish ${style.button}`}>Home</li>
				<li className={`text-lg px-3 border-l-4 border-lightpinkish ${style.button}`}>New Blog</li>
				<li className={`text-lg px-3 border-l-4 border-lightpinkish ${style.button}`}>User</li>
				<li className={`text-lg px-3 border-l-4 border-lightpinkish ${style.button}`}>Developer</li>
			</ul>
		  </div>
	  </div>
	)
  }
  