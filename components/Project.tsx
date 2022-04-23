import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
// import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Project = ({ blok }) => {
	const mainRef = useRef(null);
	const [nextImage, setNextImage] = useState(0);

	useEffect(() => {
		const updateCarousel = () => {
			nextImage !== blok.images.length && setNextImage(nextImage + 1);
			nextImage === blok.images.length && setNextImage(0);
		};

		mainRef.current?.addEventListener("click", updateCarousel, false);

		return () => mainRef.current?.removeEventListener("click", updateCarousel, false);
	}, [nextImage]);

	return (
		<MainContainer {...storyblokEditable(blok)} ref={mainRef}>
			<>
				<ContentWrapper>
					{nextImage === blok.images.length && (
						<>
							<Content>
								<h3>{blok.header}</h3>
								{blok.article.content[0].content.map((entry) => {
									return entry.text;
								})}

								<span>{blok.subtext}</span>
							</Content>
						</>
					)}
					{blok.images[nextImage] !== undefined && nextImage !== blok.images.length && (
						<>
							<img
								src={blok.images[nextImage].filename}
								alt={blok.images[nextImage].alt}
								width={500}
								height={700}
							/>
							<h3>{blok.header}</h3>
						</>
					)}
				</ContentWrapper>
			</>
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
	width: 500px;
	height: 700px;
`;

const Content = styled.div`
	margin: 50% 0; ;
`;
