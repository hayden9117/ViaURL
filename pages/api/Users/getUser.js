import { connectToDatabase } from "../../../util/mongodb";
import User from "../../../models/users.js";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getUser(req, res) {
  try {
    const { db } = await connectToDatabase();

    const user = await db
      .collection("users")
      .findOne({ email: req.body.email });

    console.log(req.body);

    let response = {};

    response.token = {
      user_id: user._id.toString(),
      email: user.email,
      avatarImg: req.body.image,
    };
    response.config = {
      links: { num: user.links.length, url: user.links },
      avatars: user.avatars,
      background: user.background,
      opacity: user.opacity,
      template: user.template,
      brightness: user.brightness,
      colorList: user.colorList,
      gradient: user.gradient,
      hasPublished: user.hasPublished,
    };
    console.log(response);
    res.json({ response });
  } catch (error) {
    res.json({ error });
  }
}
