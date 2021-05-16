import "../styles/globals.scss";
import { TrackerProvider } from "../context/TrackerContext";

function MyApp({ Component, pageProps }) {
	return (
		<TrackerProvider>
			<Component {...pageProps} />
		</TrackerProvider>
	);
}

export default MyApp;
