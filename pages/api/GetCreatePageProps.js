import CreatePage from "../CreatePage";

export default function handler(req, res) {
  // Fetch data from external API
  const data = req.body.token;
  console.log(data);
  res.status(200).json(data);
  // Pass data to the page via props
  return <CreatePage props={data} />;
}
