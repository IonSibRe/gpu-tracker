import styles from "../styles/Home.module.scss";

const ShowcaseItem = ({ item }) => {
	const { name, store, price, inStock } = item;

	return (
		<div className={styles.showcaseItem}>
			<div
				className={`${styles.showcaseItemInnerContainer} ${styles.showcaseItemImgContainer}`}
			>
				<img
					src="/assets/img/GPU-Icon.png"
					alt="GPU - Icon"
					className={styles.showcaseItemImg}
				/>
			</div>
			<div
				className={`${styles.showcaseItemInnerContainer} ${styles.showcaseItemNameContainer}`}
			>
				<p className={styles.showcaseItemDesc}>{name}</p>
			</div>
			<div className={styles.showcaseItemInnerContainer}>
				<p className={styles.showcaseItemDesc}>{store}</p>
			</div>
			<div className={styles.showcaseItemInnerContainer}>
				<p className={styles.showcaseItemDesc}>{price} CZK</p>
			</div>
			<div className={styles.showcaseItemInnerContainer}>
				<p className={styles.showcaseItemDesc}>{inStock}</p>
			</div>
		</div>
	);
};

export default ShowcaseItem;
