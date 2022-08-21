import { connectToDatabase } from "../../../util/mongodb";
import User from "../../../models/users.js";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function saveUser(req, res) {
  try {
    const config = req.body.config;
    const query = { email: req.body.token.email };
    const update = {
      links: config.links.url,
      avatarImg: config.avatarImg,
      avatarImgs: config.avatarImgs,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: config.colorList,
      gradient: config.gradient,
    };
    const { db } = await connectToDatabase();

    const user = await db
      .collection("users")
      .updateOne(query, { $set: update }, { multi: false });

    console.log(user);

    // let response = {};

    // response.token = { user_id: user._id.toString(), email: user.email };
    // response.config = {
    //   links: { num: user.links.length, url: user.links },
    //   avatars: user.avatars,
    //   background: user.background,
    //   opacity: user.opacity,
    //   template: user.template,
    //   brightness: user.brightness,
    // };
    console.log(user);
    res.json({ user });
  } catch (error) {
    res.json({ error });
  }
}
