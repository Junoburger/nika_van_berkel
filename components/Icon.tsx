import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Icon = ({ blok }) => {
	const [displayTitle, setDisplayTitle] = useState(false);

	return (
		<div>
			<Link href={`/projects/${blok.url_parameter}`}>
				<div>
					{blok.icon.filename ? (
						<Link href={`/projects/${blok.url_parameter}`}>
							<div>
								<ImageWrapper>
									<Image
										src={blok.icon.filename}
										alt={blok.icon.alt}
										width={250}
										height={250}
										onMouseOut={() => setDisplayTitle(false)}
										onMouseEnter={() => setDisplayTitle(true)}
									/>
									{displayTitle && (
										<Title displayTitle={displayTitle}>
											{blok.project_name}
										</Title>
									)}
								</ImageWrapper>
							</div>
						</Link>
					) : (
						<div>placeholder</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default Icon;

const ImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	text-align: center;
	height: 80%;
	min-width: 25%;
	justify-content: center;
	text-align: center;
	img {
		/* border: 5px solid black;
		max-width: 15rem;
		max-height: 15rem;
		margin: 3rem; */
	}
`;

const ProjectWrapper = styled.div`
	position: relative;
`;

export const Title = styled.div<{ displayTitle: boolean }>`
	/* display: none; */
	/* color: white; */
	${ProjectWrapper}:hover & {
		/* color: ${(props) => (props.displayTitle ? "black" : "white")}; */
	}
`;
