// import useViaToken from "../../components/UseViaToken";
// import useConfig from "../../components/CreatePageComponents/UseConfig";
import { configData, tokenData } from "../../dummyData/dummyData";

export default function handler(req, res) {
  const { username, password } = req.body;

  let response = {};
  let configID;
  tokenData.forEach((item) => {
    console.log(item.username === username && item.password === password);
    if (item.username === username && item.password === password) {
      response.token = { user_id: item.user_id, username: item.username };
      configID = item.config_id;
    }
  });

  configData.forEach((item) => {
    if (item.config_id === configID) {
      response.config = {
        links: { num: item.links, url: ["", ""] },
        avatars: item.avatars,
        background: item.background,
        opacity: item.opacity,
        template: item.template,
        brightness: item.brightness,
      };
    }
  });

  res.status(200).json(response);
}
