import { connectToDatabase } from "../../../util/mongodb";
import Pages from "../../../models/pages";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addPage(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectToDatabase();

    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    console.log(req.body.pageName);

    const config = req.body.config;

    const pageData = {
      pageName: req.body.pageName,
      email: req.body.email,
      links: config.links.url,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: config.colorList,
      gradient: config.gradient,
    };
    console.log(pageData);
    const addPage = await Pages.create(pageData);
    console.log("CREATED DOCUMENT");

    res.json({ addPage });
  } catch (error) {
    res.json({ error });
  }
}
