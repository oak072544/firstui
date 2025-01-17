import clientPromise from "../../../lib/mongodb";
import { NextApiResponse, NextApiRequest } from 'next'

export default async function handler (_req: NextApiRequest,
    res: NextApiResponse) {
    try
    {

        const client = await clientPromise;
        const db = client.db("project");

        const users = await db.collection("user").find({}).toArray(); //ลบ .limit() ไป

        res.status(200).json(users);

    }
    catch (e : any)
    {

        console.error(e);
        throw new Error(e).message;
        res.status(404);
    }
}