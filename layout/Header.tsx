import Link from "next/link";
import styled from "styled-components";
import { Story } from "../pages";

export default function Header({ story }: { story: Story }) {
	return (
		<header>
			<Link href={`/`}>
				<Title>Nika van Berkel</Title>
			</Link>
		</header>
	);
}

const Title = styled.p`
	cursor: pointer;
	margin: 15px;
`;
