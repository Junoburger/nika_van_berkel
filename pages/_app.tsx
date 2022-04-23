// import { useRouter } from "next/router";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Grid from "../components/Grid";
import Icon from "../components/Icon";
import ProjectsContainer from "../components/ProjectsContainer";
import Project from "../components/Project";
import { useEffect } from "react";
import BasicLayout from "../layout/Basic";
import Page from "../components/Page";

const components = {
	page: Page,
	grid: Grid,
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
		<BasicLayout>
			<Component {...pageProps} />
		</BasicLayout>
	);
}

export default MyApp;
