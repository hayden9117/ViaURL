import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });

  console.log(req);
  if (!session) {
    res.status(401).json({ error: "Unauthenticated User" });
  } else {
    res.status(200).json({ user: " User authenticated", session });
  }
};

export default handler;
