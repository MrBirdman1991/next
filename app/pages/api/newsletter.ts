// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

interface RequesBody {
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body as RequesBody;
    console.log(email);
    if (!email || !email.includes("@"))
      return res.status(422).json("wrong user input");

    const client = await MongoClient.connect(
      "mongodb+srv://schwobsi:4forGlesa@cluster0.zxwti.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();
    await db.collection("emails").insertOne({ email });
    client.close()
    return res.status(201).json({ email });
  }
}
