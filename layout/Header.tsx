import Link from "next/link";
import styled from "styled-components";
import { Story } from "../pages";

export default function Header({ story }: { story: Story }) {
	return (
		<HeaderContainer>
			<Title>
				<Link href={`/`}>Nika van Berkel</Link>
			</Title>
			<Link href={"/about/detail"}>
				<Title>About</Title>
			</Link>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 0 5px;
`;

const Title = styled.p`
	cursor: pointer;
	margin: 15px 5px;
	a:hover {
		color: black;
	}
`;
