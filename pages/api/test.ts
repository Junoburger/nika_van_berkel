export default async function test(req, res) {
	return await res.status(200).json({ message: "Hello World" });
}
