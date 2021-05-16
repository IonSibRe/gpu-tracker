import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>GPU Tracker</title>
				<meta name="description" content="GPU Tracker" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>{children}</main>
		</>
	);
};

export default Layout;
