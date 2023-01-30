import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	ISbStoriesParams,
} from "@storyblok/react";
import MetaHead from "../components/MetaHead";
import Header from "../layout/Header";

export type Story = {
	alternates: any; // array of ?
	content: {
		_uid: string;
		body: any; // string  ?
		component: string;
		_editable: any; // boolean ?
	};
	created_at: string;
	default_full_slug: any; // string ?
	first_published_at: string;
	full_slug: string;
	group_id: string;
	id: number;
	is_startpage: boolean;
	lang: string;
	meta_data: any; // figure out the type(s)
	name: string;
	parent_id: number;
	path: string;
	position: number;
	published_at: string;
	release_id: any; // number ?
	slug: string;
	sort_by_date: any; // boolean ?
	tag_list: any; // array of ?
	translated_slugs: any;
	uuid: string;
};

export default function Home({ story, preview }: { story: any; preview: boolean }) {
	if (preview) {
		story = useStoryblokState(story);
	}

	return (
		<>
			<MetaHead title={story.name} />
			<Header story={story} />
			<StoryblokComponent blok={story?.content} />
		</>
	);
}

export async function getServerSideProps(context) {
	// get the query object
	const insideStoryblok = context.query._storyblok;
	const shouldLoadDraft = context.preview || insideStoryblok;

	let slug = "home";

	let sbParams: ISbStoriesParams = {
		// version: "published", // or 'draft'
		token: process.env.STORYBLOK_API_KEY,
	};

	if (shouldLoadDraft) {
		sbParams.version = "draft";
	}

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			preview: shouldLoadDraft || false,
		},
	};
}
