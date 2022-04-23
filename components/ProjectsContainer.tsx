import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ProjectsContainer = ({ blok }) => {
	console.log(blok.body);
	return (
		<main {...storyblokEditable(blok)}>
			{blok.body.map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</main>
	);
};

export default ProjectsContainer;
