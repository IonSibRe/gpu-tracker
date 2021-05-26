import styles from "../styles/Footer.module.scss";

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.innerFooterWrap}>
					<div className={styles.footerContentWrap}>
						<div className={styles.footerContactWrap}>
							<h3 className={styles.footerContactTitle}>
								Kontaktujte nás
							</h3>
							<p className={styles.footerContactItem}>
								<strong>Email: </strong> example@example.com
							</p>
						</div>
						<div className={styles.footerDonateWrap}>
							<div className={styles.footerDonateTitleWrap}>
								<h3 className={styles.footerDonateTitle}>
									Crypto Donate
								</h3>
							</div>
							<div className={styles.footerDonateItem}>
								<h4 className={styles.footerDonateCoinTitle}>
									Ethereum:
								</h4>
								<p className={styles.footerDonateText}>
									0x05655E6A90E07D7aC7e93Ac8770D11E195019726
								</p>
							</div>
							<div className={styles.footerDonateItem}>
								<h4 className={styles.footerDonateCoinTitle}>
									Cardano:
								</h4>
								<p className={styles.footerDonateText}>
									addr1vxlt2mtpxpt8m93fy9sg9a8004fccz3z6j7g7u7lewrg8dsz7k84x
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className={styles.footerFinal}>
				<div className={styles.footerFinalWrap}>
					<p className={styles.footerFinalText}>
						Tato stránka byla vytvořena pro ulehčení hledání
						grafických karet na největších obchodech v česku.
					</p>
					<p className={styles.footerFinalText}>
						Prosím nežalujte nás :)
					</p>
					<p className={styles.footerFinalText}>
						Copyright &copy;2021. Všechna práva vyhrazena.
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
