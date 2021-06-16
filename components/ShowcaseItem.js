import { useContext } from "react";
import Link from "next/link";
import { TrackerContext } from "../context/TrackerContext";
import styles from "../styles/Home.module.scss";

const ShowcaseItem = ({ item }) => {
	const { formatter } = useContext(TrackerContext);
	const { name, store, price, link, inStock } = item;

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
				<Link href={link}>
					<a className={styles.showcaseItemDesc} target="_blank">
						{name}
					</a>
				</Link>
			</div>
			<div className={styles.showcaseItemInnerContainer}>
				<p className={styles.showcaseItemDesc}>{store}</p>
			</div>
			<div className={styles.showcaseItemInnerContainer}>
				<p className={styles.showcaseItemDesc}>
					{formatter.format(price)}
				</p>
			</div>
			<div className={styles.showcaseItemInnerContainer}>
				<p className={styles.showcaseItemDesc}>{inStock}</p>
			</div>
		</div>
	);
};

export default ShowcaseItem;
