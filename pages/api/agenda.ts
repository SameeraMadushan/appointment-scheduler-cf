// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query.mentor || 1;

    const response = await fetch(
      `https://private-37dacc-cfcalendar.apiary-mock.com/mentors/${id}/agenda`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(301).json({ error: "Unexpected error" });
  }
}
