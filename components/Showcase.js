import styles from "../styles/Home.module.scss";
import ShowcaseItem from "./ShowcaseItem";

const Showcase = ({ data }) => {
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
						Name
					</h3>
					<h3 className={styles.showcaseHeaderTitle}>Store</h3>
					<h3 className={styles.showcaseHeaderTitle}>Price</h3>
					<h3 className={styles.showcaseHeaderTitle}>In Stock</h3>
				</div>
				<div className={styles.showcaseItemsContainer}>
					{Object.entries(data).map((item) => {
						return <ShowcaseItem item={item} key={item[1].id} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Showcase;
