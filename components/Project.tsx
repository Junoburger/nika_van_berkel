import { storyblokEditable } from "@storyblok/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Project = ({ blok }) => {
	const mainRef = useRef(null);
	const [nextImage, setNextImage] = useState(0);

	useEffect(() => {
		const updateCarousel = () => {
			// Increase images index
			if (nextImage !== blok.images.length) {
				setNextImage(nextImage + 1);
			}
			// IF about text was the previous "blok" then go back to index 0
			if (nextImage === blok.images.length) {
				setNextImage(0);
			}
		};

		mainRef.current?.addEventListener("click", updateCarousel, false);

		return () => mainRef.current?.removeEventListener("click", updateCarousel, false);
	}, [nextImage]);

	return (
		<MainContainer {...storyblokEditable(blok)} ref={mainRef}>
			<ContentWrapper>
				{nextImage === blok.images.length && (
					<Content>
						<Title isHeader>{blok.header}</Title>
						{blok.article.content[0].content.map((entry) => {
							return entry.text;
						})}
						<br />
						<br />
						<span>{blok.subtext}</span>
						<span>{blok.subtext_author}</span>
					</Content>
				)}
				{blok.images[nextImage] !== undefined && nextImage !== blok.images.length && (
					<>
						<AnimatedImage
							src={blok.images[nextImage].filename}
							alt={blok.images[nextImage].alt}
						/>
						<Title>{blok.header}</Title>
					</>
				)}
			</ContentWrapper>
		</MainContainer>
	);
};

export default Project;

const MainContainer = styled.div`
	* {
		user-select: none;
	}
`;

const ContentWrapper = styled.div`
	margin-top: -10%;
`;

const AnimatedImage = styled.img`
	max-width: 700px;
	max-height: 700px;

	cursor: pointer;
`;

const Content = styled.div`
	margin: 50% 0;
	display: flex;
	flex-direction: column;
	text-align: left;
	cursor: pointer;
	width: 526px;
`;

const Title = styled.p<{ isHeader?: boolean }>`
	text-align: ${(props) => (props.isHeader ? "left" : "center")};
	margin-left: ${(props) => (props.isHeader ? "-15px" : "0")};
	padding: 2%;
	font-size: 10pt;
`;
