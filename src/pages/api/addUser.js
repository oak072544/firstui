import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("project");

    const {
      username,
      role,
    } = req.body;

    const service = await db.collection("user").insertOne({
      username,
      role,
    });

    res.status(201).json(service);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
