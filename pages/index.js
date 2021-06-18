import { useContext, useEffect } from "react";
import SockJsClient from "react-stomp";
import { TrackerContext } from "../context/TrackerContext";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Showcase from "../components/Showcase";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";

export default function Home({ data }) {
	const { setAllCards } = useContext(TrackerContext);

	// Set data when they change
	useEffect(() => {
		setAllCards(data);
	}, [data]);

	return (
		<Layout>
			<Navbar />
			<SockJsClient
				url="https://gpu.zahrajto.wtf/api/ws"
				topics={["/updates"]}
				onMessage={(msg) => {
					console.log(msg);
				}}
			/>
			<section
				className={`${styles.trackerDisplaySection} ${styles.sectionCenter}`}
			>
				<Filter />
				<Showcase />
			</section>
			<Footer />
		</Layout>
	);
}

export async function getServerSideProps() {
	const url = "https://gpu.zahrajto.wtf/api/v1/";

	const res = await fetch(`${url}/gpu/all`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
