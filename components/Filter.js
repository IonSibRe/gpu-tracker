import styles from "../styles/Home.module.scss";

const Filter = () => {
	return (
		<section className={styles.filterSection}>
			<div className={styles.filterContainer}>
				<div className={styles.filterTitleWrap}>
					<h2 className={styles.filterTitle}>Filter By</h2>
				</div>

				{/* Store */}
				<div className={styles.filterItem}>
					<h3 className={styles.filterItemTitle}>Store</h3>
					<div className={styles.filterItemInputWrap}>
						<input
							type="checkbox"
							className={styles.filterItemInput}
						/>
						<span className={styles.filterItemDesc}>Alza</span>
					</div>
					<div className={styles.filterItemInputWrap}>
						<input
							type="checkbox"
							className={styles.filterItemInput}
						/>
						<span className={styles.filterItemDesc}>CZC</span>
					</div>
					<div className={styles.filterItemInputWrap}>
						<input
							type="checkbox"
							className={styles.filterItemInput}
						/>
						<span className={styles.filterItemDesc}>TSBohemia</span>
					</div>
				</div>

				{/* Price */}
				<div className={styles.filterItem}>
					<h3 className={styles.filterItemTitle}>Price</h3>
					<div className={`${styles.filterItemPriceInputWrap}`}>
						<p className={styles.filterItemPriceDesc}>$0 - $100</p>
						<input
							type="range"
							className={styles.filterItemPriceInput}
						/>
					</div>
				</div>

				{/* Name */}
				<div className={styles.filterItem}>
					<h3 className={styles.filterItemTitle}>Name</h3>
					<div className={styles.filterItemInputWrap}>
						<input
							type="checkbox"
							className={styles.filterItemInput}
						/>
						<span className={styles.filterItemDesc}>
							GTX 1660Ti
						</span>
					</div>
					<div className={styles.filterItemInputWrap}>
						<input
							type="checkbox"
							className={styles.filterItemInput}
						/>
						<span className={styles.filterItemDesc}>
							RTX 2080Ti
						</span>
					</div>
					<div className={styles.filterItemInputWrap}>
						<input
							type="checkbox"
							className={styles.filterItemInput}
						/>
						<span className={styles.filterItemDesc}>GT 710</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Filter;
