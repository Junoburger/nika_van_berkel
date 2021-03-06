import Head from "next/head";

export default function MetaHead({ ...props }) {
	// FIXME: specify props
	return (
		<Head>
			<title>{props.title}</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="description" content="Nika van Berkel. Architecture." />
		</Head>
	);
}
