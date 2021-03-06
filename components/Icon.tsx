import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Icon = ({ blok }) => {
	const [displayTitle, setDisplayTitle] = useState(false);

	return (
		<ProjectContainer>
			<Link href={`/projects/${blok.url_parameter}`}>
				<div id="ICON_WRAPPER">
					{blok.icon.filename ? (
						<ProjectEntryPointWrapper
							isBookholder={blok.project_name.toLowerCase().includes("bookholder")} // TODO: Ask Nika for a correctly sized image
						>
							<img
								onMouseOut={() => setDisplayTitle(false)}
								onMouseEnter={() => setDisplayTitle(true)}
								src={blok.icon.filename}
								alt={blok.icon.alt}
								width={250}
								height={250}
							/>

							<Title displayTitle={displayTitle}>{blok.project_name}</Title>
						</ProjectEntryPointWrapper>
					) : (
						<div style={{ fontSize: "200%" }}>
							Something went wrong, please contact Nika.
						</div>
					)}
				</div>
			</Link>
		</ProjectContainer>
	);
};

export default Icon;

const ProjectEntryPointWrapper = styled.div<{ isBookholder: boolean }>`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	img {
		cursor: pointer;
		max-width: 12.5rem;
		max-height: 12.5rem;
		margin: 2.5rem;
		${(props) =>
			props.isBookholder // FIXME: this is a hack to get the bookholder to be the same size as the other projects
				? css`
						object-fit: cover;
				  `
				: css`
						object-fit: contain;
				  `}
	}
`;

const Title = styled.div<{ displayTitle: boolean }>`
	color: ${(props) => (props.displayTitle ? "black" : "white")};
`;

const ProjectContainer = styled.div`
	display: flex;
`;
