import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useEffect } from "react";

const Page = ({ blok }) => {
	return (
		<div {...storyblokEditable(blok)}>
			{blok.body.content.map((nestedContent) => {
				console.log(nestedContent.content);
				return nestedContent.content ? (
					<span>{nestedContent.content.map((item) => item.text)}</span>
				) : (
					<span>
						<br />
					</span>
				);
			})}
		</div>
	);
};

export default Page;
