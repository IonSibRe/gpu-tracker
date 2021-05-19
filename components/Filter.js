import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TrackerContext } from "../context/TrackerContext";
import styles from "../styles/Home.module.scss";

const Filter = () => {
	const {
		allCards,
		formatter,
		currentMinPrice,
		currentMaxPrice,
		manufacturersChecked,
		storesChecked,
		sortPrice,
		sortStore,
		sortManufacturer,
	} = useContext(TrackerContext);

	const [currentMaxPriceUI, setCurrentMaxPriceUI] = useState(currentMaxPrice);
	const [currentMinPriceUI, setCurrentMinPriceUI] = useState(currentMinPrice);

	const stores = ["all", ...new Set(allCards.map((item) => item.store))];
	const manufacturers = [
		"all",
		...new Set(allCards.map((item) => item.manufacturer)),
	];

	useEffect(() => {
		setCurrentMaxPriceUI(currentMaxPrice);
		setCurrentMinPriceUI(currentMinPrice);
	}, [currentMaxPrice, currentMinPrice]);

	return (
		<section className={styles.filterSection}>
			<div className={styles.filterContainer}>
				<div className={styles.filterTitleWrap}>
					<h2 className={styles.filterTitle}>Třídit podle</h2>
				</div>

				{/* Store */}
				<div className={styles.filterItem}>
					<h3 className={styles.filterItemTitle}>Obchodu</h3>
					{stores.map((store) => {
						return (
							<div
								className={styles.filterItemInputWrap}
								key={uuidv4()}
							>
								<input
									type="checkbox"
									className={styles.filterItemInput}
									checked={storesChecked.includes(store)}
									onChange={() => sortStore(store)}
								/>
								<span className={styles.filterItemDesc}>
									{store === "all" ? "vše" : store}
								</span>
							</div>
						);
					})}
				</div>

				{/* Price */}
				<div className={styles.filterItem}>
					<h3 className={styles.filterItemTitle}>Ceny</h3>
					<div className={`${styles.filterItemPriceInputWrap}`}>
						<p className={styles.filterItemPriceDesc}>
							{formatter.format(currentMinPriceUI)} -{" "}
							{formatter.format(currentMaxPriceUI)}
						</p>
						<input
							type="range"
							min={currentMinPrice}
							max={currentMaxPrice}
							defaultValue={currentMaxPrice}
							onChange={(e) => {
								sortPrice(e.target.value);
								setCurrentMaxPriceUI(e.target.value);
							}}
							className={styles.filterItemPriceInput}
						/>
					</div>
				</div>

				{/* Name */}
				<div className={styles.filterItem}>
					<h3 className={styles.filterItemTitle}>Výrobce</h3>
					{manufacturers.map((manufacturer) => {
						return (
							<div
								className={styles.filterItemInputWrap}
								key={uuidv4()}
							>
								<input
									type="checkbox"
									className={styles.filterItemInput}
									checked={manufacturersChecked.includes(
										manufacturer
									)}
									onChange={() =>
										sortManufacturer(manufacturer)
									}
								/>
								<span className={styles.filterItemDesc}>
									{manufacturer === "all"
										? "vše"
										: manufacturer}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Filter;
