// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb"


interface RequesBody {
  email: string;
  name: string;
  text: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await MongoClient.connect(
    "mongodb+srv://schwobsi:4forGlesa@cluster0.zxwti.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const {eventid} = req.query
  if (req.method === "POST") {
    const { email, name, text } = req.body as RequesBody;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim().length === 0 ||
      !text ||
      text.trim().length === 0
    ) {
      return res.status(422).json("wrong user input");
    }

    const createdComment = await db.collection("comments").insertOne({email, name, text, eventid})

    return res.status(201).json({ ...createdComment });
  }

  if (req.method === "GET") {
    const dummy = [
      {
        id: "1",
        email: "schobsie@schwob.de",
        name: "schwobsie",
        text: "blablabla",
        eventId: "33",
      },
    ];

    return res.json(dummy);
  }

  client.close();
}
