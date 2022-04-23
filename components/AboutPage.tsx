import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useEffect } from "react";
import styled from "styled-components";
import { render, MARK_BOLD, MARK_LINK } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

export function RichText({ document }) {
	// document is the rich text object you receive from Storyblok,
	// in the form { type: "doc", content: [ ... ] }
	return (
		<div>
			{render(document, {
				markResolvers: {
					[MARK_LINK]: (children, props) => {
						const { href, target, linktype } = props;

						if (linktype === "email") {
							// Email links: add `mailto:` scheme and map to <a>
							return <a href={`mailto:${href}`}>{children}</a>;
						}
						if (href.match(/^(https?:)?\/\//)) {
							// External links: map to <a>
							return (
								<a href={href} target={target}>
									{children}
								</a>
							);
						}
						// Internal links: map to <Link>
						return (
							<Link href={href}>
								<a>{children}</a>
							</Link>
						);
					},
				},
			})}
		</div>
	);
}

const AboutPage = ({ blok }) => {
	return (
		<AboutPageContainer {...storyblokEditable(blok)}>
			<div>{blok.instagram}</div>
			<br />
			<br />

			<div>{blok.email}</div>
			<br />
			<br />
			<div>{blok.phone}</div>
			<br />
			<Paragraph>
				<RichText document={blok.body} />
			</Paragraph>
			<span>Publications:</span>
			<RichText document={blok.project_list} />
		</AboutPageContainer>
	);
};

export default AboutPage;

const AboutPageContainer = styled.div`
	text-align: left;
	margin-top: -15%;
	margin-left: -50%;
	padding: 25px;
	a {
		color: blue;
	}
`;

const Paragraph = styled.div`
	width: 28rem;
`;
