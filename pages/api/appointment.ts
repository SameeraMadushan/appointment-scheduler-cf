// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { writeFileSync } from "fs";

export default async function handlerPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405);
  }
  const uuid = Math.random().toString(26).slice(2);
  const data = { ...req.body, createdDate: new Date().toISOString() };

  writeFileSync(`./public/db/${uuid}.json`, JSON.stringify(data));

  res.status(201).json({ uuid });
}
