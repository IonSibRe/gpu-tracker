import { useContext, useEffect } from "react";
import { TrackerContext } from "../context/TrackerContext";
import { data } from "../data";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Showcase from "../components/Showcase";
import styles from "../styles/Home.module.scss";

export default function Home() {
	const { allCards, setAllCards } = useContext(TrackerContext);

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
				<Showcase data={data} />
			</section>
		</Layout>
	);
}
