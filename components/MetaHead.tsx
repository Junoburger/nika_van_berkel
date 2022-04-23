import Head from "next/head";

export default function MetaHead({ ...props }) {
	// FIXME: speficy props
	return (
		<Head>
			<title>{props.title}</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
