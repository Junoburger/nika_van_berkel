import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styled from "styled-components";

const ProjectsContainer = ({ blok }) => {
	return (
		<MainContainer {...storyblokEditable(blok)}>
			{blok.body.map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</MainContainer>
	);
};

export default ProjectsContainer;

const MainContainer = styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
`;
