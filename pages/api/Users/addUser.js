import { connectToDatabase } from "../../../util/mongodb";
import User from "../../../models/users.js";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectToDatabase();

    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    console.log(req.body);
    let userData = req.body;
    userData.links = [];
    userData.avatars = 1;
    userData.background = "#ff85ad";
    userData.opacity = "ff";
    userData.template = "column";
    userData.brightness = 0;
    userData.colorList = [];
    userData.gradient = false;
    const addUser = await User.create(userData);
    console.log("CREATED DOCUMENT");

    res.json({ addUser });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
