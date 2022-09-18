import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
	return (
		<motion.div
			key={router.route}
			initial="out"
			animate="in"
			variants={{
				out: {
					opacity: 0,
					y: 40,
					transition: {
						duration: 0.75,
					},
				},
				in: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.75,
						delay: 0.5,
					},
				},
			}}
		>
			<Component {...pageProps} />;
		</motion.div>
	);
}

export default MyApp;
