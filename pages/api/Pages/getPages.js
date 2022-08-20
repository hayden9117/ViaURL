import { connectToDatabase } from "../../../util/mongodb";
import Pages from "../../../models/users.js";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getUser(req, res) {
  try {
    console.log("asdasdasdsd" + req.body.pageName);
    const { db } = await connectToDatabase();

    const Pages = await db
      .collection("pages")
      .findOne({ pageName: req.body.pageName });

    let response = {};

    response.config = {
      links: { num: Pages.links.length, url: Pages.links },
      avatars: Pages.avatars,
      background: Pages.background,
      opacity: Pages.opacity,
      template: Pages.template,
      brightness: Pages.brightness,
      colorList: Pages.colorList,
      gradient: Pages.gradient,
    };
    console.log(response);
    res.json({ response });
  } catch (error) {
    res.json({ error });
  }
}
