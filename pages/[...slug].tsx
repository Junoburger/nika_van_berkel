import styles from "../styles/Home.module.css";
import * as storyblock from "@storyblok/react";
import MetaHead from "../components/MetaHead";
import Header from "../layout/Header";

export default function Page({ story }) {
	story = storyblock.useStoryblokState(story);

	return (
		<>
			<MetaHead title={story.name} />
			<Header story={story} />
			<div className={styles.container}>
				<storyblock.StoryblokComponent blok={story.content} />
			</div>
		</>
	);
}

export async function getStaticProps({ params }) {
	let slug = params.slug ? params.slug.join("/") : "home";

	let sbParams: storyblock.ISbStoriesParams = {
		version: "draft", // or 'published'
	};

	const storyblokApi = storyblock.getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
		},
		revalidate: 3600,
	};
}

export async function getStaticPaths() {
	const storyblokApi = storyblock.getStoryblokApi();
	let { data } = await storyblokApi.get("cdn/links/");
	let paths = [];
	Object.keys(data.links).forEach((linkKey) => {
		if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
			return;
		}

		const slug = data.links[linkKey].slug;
		let splittedSlug = slug.split("/");

		paths.push({ params: { slug: splittedSlug } });
	});

	return {
		paths: paths,
		fallback: false,
	};
}
