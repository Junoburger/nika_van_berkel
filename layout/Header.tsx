import Link from "next/link";
import { Story } from "../pages";

export default function Header({ story }: { story: Story }) {
	return (
		<header>
			<Link href={`/`}>
				<h6>Nika van Berkel</h6>
			</Link>
		</header>
	);
}
