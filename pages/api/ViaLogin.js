// import useViaToken from "../../components/UseViaToken";
// import useConfig from "../../components/CreatePageComponents/UseConfig";
import { configData, tokenData } from "../../dummyData/dummyData";
import { connectToDatabase } from "../../util/mongodb";
import ViaLogin from "../ViaLogIn";
import { VideoSettingsOutlined } from "@mui/icons-material";

export default async function handler(req, res) {
  // const { email, password } = req.body;
  console.log(req);
  let bodyObject = { email: email, password: password };
  let data = await fetch("http://localhost:3000/api/Users/getUser", {
    credentials: "include",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify(req.body),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });

  res.status(200).json(req);
}
