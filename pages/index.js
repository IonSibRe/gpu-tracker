import { useContext, useEffect } from "react";
import { TrackerContext } from "../context/TrackerContext";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Showcase from "../components/Showcase";
import styles from "../styles/Home.module.scss";

export default function Home({ data }) {
	const { setAllCards } = useContext(TrackerContext);

	// Set data when they change
	useEffect(() => {
		setAllCards(data);
	}, [data]);

	return (
		<Layout>
			<Navbar />
			<section
				className={`${styles.trackerDisplaySection} ${styles.sectionCenter}`}
			>
				<Filter />
				<Showcase />
			</section>
		</Layout>
	);
}

export async function getServerSideProps() {
	const url = "https://zahrajto.wtf:8443/api/v1";

	const res = await fetch(`${url}/gpu/all`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
