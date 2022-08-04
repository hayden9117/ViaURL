import SignUp from "../../components/signup/SignUp";
import addUser from "./Users/addUser";

export default function handler(req, res) {
  let data = await fetch("http://localhost:3000/api/Users/addUser", {
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

  res.status(200).json(data);


}
