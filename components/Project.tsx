import { storyblokEditable } from "@storyblok/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Project = ({ blok }) => {
	const mainRef = useRef(null);
	const [nextImage, setNextImage] = useState(0);
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		const updateCarousel = () => {
			if (nextImage !== blok.images.length) {
				setAnimate(true);
				setTimeout(() => {
					setNextImage(nextImage + 1);
					setAnimate(false);
				}, 500);
			}
			if (nextImage === blok.images.length) {
				setAnimate(true);
				setTimeout(() => {
					setNextImage(0);
					setAnimate(false);
				}, 500);
			}
		};

		mainRef.current?.addEventListener("click", updateCarousel, false);

		return () => mainRef.current?.removeEventListener("click", updateCarousel, false);
	}, [nextImage]);

	return (
		<MainContainer {...storyblokEditable(blok)} ref={mainRef}>
			<>
				<ContentWrapper animateImageFade={animate}>
					{nextImage === blok.images.length && (
						<>
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
							<Title>{blok.header}</Title>
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

const ContentWrapper = styled.div<{ animateImageFade: boolean }>`
	height: 100%;
	margin-top: -10%;
	img {
		cursor: pointer;
		animation: ${(props) =>
			props.animateImageFade ? "fadeOut forwards 0.25s" : "fadeIn forwards 0.25s"};
	}

	@keyframes fadeOut {
		from {
			visibility: visible;
			opacity: 1;
			transition: opacity 0.5s linear;
		}

		to {
			visibility: hidden;
			opacity: 0;
			transition: visibility 0s 0.5s, opacity 0.5s linear;
		}
	}
	@keyframes fadeIn {
		from {
			visibility: hidden;
			opacity: 0;
			transition: visibility 0s 0.2s, opacity 0.2s linear;
		}
		to {
			visibility: visible;
			opacity: 1;
			transition: opacity 0.2s linear;
		}
	}
`;

const Content = styled.div`
	margin: 50% 0;
	display: flex;
	flex-direction: column;
	text-align: left;
	cursor: pointer;
`;

const Title = styled.p<{ isHeader?: boolean }>`
	text-align: ${(props) => (props.isHeader ? "left" : "center")};
	margin-left: ${(props) => (props.isHeader ? "-15px" : "0")};
	padding: 2%;
	font-size: 10pt;
`;
