import { useContext } from "react";
import { TrackerContext } from "../context/TrackerContext";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
	const { sortSearch } = useContext(TrackerContext);

	return (
		<nav className={styles.navContainer}>
			<div className={styles.navInnerContainer}>
				<div className={styles.navTitleWrap}>
					<h2 className={styles.navTitle}>GPU Tracker</h2>
				</div>
				<div className={styles.navSearchWrap}>
					<input
						type="text"
						placeholder="Hledejte..."
						className={styles.navSearchInput}
						onChange={(e) => sortSearch(e.target.value)}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
