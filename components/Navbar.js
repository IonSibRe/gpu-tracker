import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navContainer}>
			<div className={styles.navInnerContainer}>
				<div className={styles.navTitleWrap}>
					<h2 className={styles.navTitle}>GPU Tracker</h2>
				</div>
				<div className={styles.navSearchWrap}>
					<input
						type="text"
						placeholder="Search..."
						className={styles.navSearchInput}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
