// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface RequesBody{
  email: string,
  name: string,
  text: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const eventId = req.query.eventId;
  if(req.method === "POST"){
    const {email, name, text} = req.body as RequesBody;

    if(!email || !email.includes("@") || !name || name.trim().length === 0 || !text || text.trim().length === 0){
        return res.status(422).json("wrong user input");
    }

    return res.status(201).json({email,name,text, eventId})
  }


  if(req.method === "GET"){
    const dummy = [
        {id: "1", email: "schobsie@schwob.de", name: "schwobsie", text: "blablabla", eventId: "33"}
    ]

    return res.json(dummy)
  }
  
}
