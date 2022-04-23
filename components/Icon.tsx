import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Icon = ({ blok }) => {
	const [displayTitle, setDisplayTitle] = useState(false);

	return (
		<ProjectContainer>
			<Link href={`/projects/${blok.url_parameter}`}>
				<div>
					{blok.icon.filename ? (
						<div>
							{/* <ImageWrapper> */}
							<img
								onMouseOut={() => setDisplayTitle(false)}
								onMouseEnter={() => setDisplayTitle(true)}
								src={blok.icon.filename}
								alt={blok.icon.alt}
								width={250}
								height={250}
							/>

							<Title displayTitle={displayTitle}>{blok.project_name}</Title>
							{/* </ImageWrapper> */}
						</div>
					) : (
						<div>placeholder</div>
					)}
				</div>
			</Link>
		</ProjectContainer>
	);
};

export default Icon;

const ImageWrapper = styled.div`
	/* display: flex; */
	/* flex-direction: column; */
	/* flex-wrap: wrap; */
	/* text-align: center; */
	/* height: 115%; */
	/* width: 110%; */
	/* justify-content: center; */
	/* text-align: center; */
	img {
		/* border: 5px solid black; */
		/* max-width: 15rem;
		max-height: 15rem;
		margin: 3rem; */
	}
`;

export const Title = styled.div<{ displayTitle: boolean }>`
	color: ${(props) => (props.displayTitle ? "black" : "white")};
`;

const ProjectContainer = styled.div``;
