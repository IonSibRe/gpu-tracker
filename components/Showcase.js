import { useContext, useEffect, useState } from "react";
import { TrackerContext } from "../context/TrackerContext";
import styles from "../styles/Home.module.scss";
import ShowcaseItem from "./ShowcaseItem";

const Showcase = () => {
	const { currentCards, sortDefault } = useContext(TrackerContext);
	const [priceSortStatus, setPriceSortStatus] = useState("");

	if (!currentCards) {
		return (
			<div>
				<h1>Loading</h1>
			</div>
		);
	}

	useEffect(() => {
		if (priceSortStatus !== "") sortDefault(priceSortStatus);
	}, [priceSortStatus]);

	const sortPriceHeader = () => {
		switch (priceSortStatus) {
			case "price-low":
				setPriceSortStatus("price-high");
				break;
			case "price-high":
				setPriceSortStatus("price-low");
				break;
			default:
				setPriceSortStatus("price-low");
				break;
		}
	};

	return (
		<section className={styles.showcaseSection}>
			<div className={styles.showcaseInnerSection}>
				<div className={styles.showcaseHeadersContainer}>
					<h3
						className={`${styles.showcaseHeaderTitle} ${styles.showcaseHeaderTitleGPU}`}
					>
						GPU
					</h3>
					<h3
						className={`${styles.showcaseHeaderTitle} ${styles.showcaseHeaderTitleName}`}
					>
						Název
					</h3>
					<h3 className={styles.showcaseHeaderTitle}>Obchod</h3>
					<h3
						className={`${styles.showcaseHeaderTitle} ${styles.showcaseHeaderTitlePrice}`}
						onClick={sortPriceHeader}
					>
						Cena
					</h3>
					<h3 className={styles.showcaseHeaderTitle}>Na Skladě</h3>
				</div>
				<div className={styles.showcaseItemsContainer}>
					{currentCards.map((item) => {
						return <ShowcaseItem item={item} key={item.id} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Showcase;
