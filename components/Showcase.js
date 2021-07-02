import { useState, useEffect, useRef, useContext } from "react";
import { TrackerContext } from "../context/TrackerContext";
import styles from "../styles/Home.module.scss";
import ShowcaseItem from "./ShowcaseItem";

const Showcase = () => {
	const { renderCards, sortDefault } = useContext(TrackerContext);
	const [priceSortStatus, setPriceSortStatus] = useState("");
	const arrowIcon = useRef(null);

	if (!renderCards) {
		return (
			<div className={styles.loaderContainer}>
				<img src="/assets/img/loader-spinner.gif" alt="#" />
			</div>
		);
	}

	useEffect(() => {
		if (priceSortStatus !== "") sortDefault(priceSortStatus);
	}, [priceSortStatus]);

	useEffect(() => {
		arrowIcon.current.style.transform = "rotate(90deg)";
	}, []);

	const sortPriceHeader = () => {
		switch (priceSortStatus) {
			case "price-low":
				arrowIcon.current.style.transform = "rotate(0)";
				setPriceSortStatus("price-high");
				break;
			case "price-high":
				setPriceSortStatus("price-low");
				arrowIcon.current.style.transform = "rotate(180deg)";
				break;
			default:
				setPriceSortStatus("price-low");
				arrowIcon.current.style.transform = "rotate(180deg)";
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
						Cena{" "}
						<img
							src="/assets/img/arrow-icon.png"
							alt="Arrow Icon"
							ref={arrowIcon}
							className={styles.arrowIcon}
						/>
					</h3>
					<h3 className={styles.showcaseHeaderTitle}>Na Skladě</h3>
				</div>
				<div className={styles.showcaseItemsContainer}>
					{renderCards.map((item) => {
						return <ShowcaseItem item={item} key={item.id} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Showcase;
