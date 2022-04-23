// import { useRouter } from "next/router";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Teaser from "../components/Teaser";
import Icon from "../components/Icon";
import ProjectsContainer from "../components/ProjectsContainer";
import Project from "../components/Project";
import { useEffect } from "react";

const components = {
	feature: Feature,
	grid: Grid,
	teaser: Teaser,
	projects_container: ProjectsContainer,
	project: Project,
	icon: Icon,
};

storyblokInit({
	accessToken: process.env.STORYBLOK_API_KEY,
	use: [apiPlugin],
	components,
});
function MyApp({ Component, pageProps }) {
	// const router = useRouter();

	useEffect(() => {
		const contextMenu = (ev) => {
			ev.preventDefault();
			console.log("contextmenu");
			return false;
		};
		document.addEventListener("contextmenu", contextMenu, false);
		return () => {
			document.removeEventListener("contextmenu", contextMenu, false);
		};
	}, []);

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
