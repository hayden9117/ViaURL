import { signOut } from "next-auth/react";

const handler = async (req, res) => {
  signOut();
};

export default handler;
