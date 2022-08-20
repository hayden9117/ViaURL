import RenderAvatar from "../../components/RenderPageComponents/RenderAvatar";
import RenderLinkList from "../../components/RenderPageComponents/RenderLinkList";
import { bgColor } from "../../components/CreatePageComponents/helperFunctions/helpers";
import { Box, Avatar, Stack, Container } from "@mui/material";

export default function RenderPage(props) {
  const config = props.response.config;

  if (!config) return <div>Loading..</div>;
  let pageColor = bgColor(config.background, config.opacity, config.brightness);
  return (
    <Box
      sx={{
        background: config.gradient
          ? `Linear-gradient(${config.colorList.map((c) => c)})`
          : pageColor.color,
        minHeight: "100vh",
        minWidth: "100vw",
        maxHeight: "100vh",
        maxWidth: "100vw",
        display: "flex",

        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          minHeight: "90vh",
          minWidth: "90vw",
          maxHeight: "90vh",
          maxWidth: "90vw",
          display: "flex",

          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack alignItems={"center"} spacing={5} direction={config.template}>
          {config.avatars === 1 ? <RenderAvatar config={config} /> : null}
          {config.links.num > 0 ? <RenderLinkList config={config} /> : null}
        </Stack>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  //   const router = useRouter();
  //   let page = router.pathname;
  //   console.log(context.params.viaPages);
  //   let config = {
  //     links: { num: 2, url: ["test", "test"] },
  //     avatars: 1,
  //     background: "#FFFF00",
  //     opacity: "00",
  //     template: "column",
  //     brightness: "0",
  //     colorList: [],
  //     gradient: false,
  //   };
  let bodyObj = { pageName: context.params.viaPages };
  let data = await fetch("http://localhost:3000/api/Pages/getPages", {
    credentials: "include",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify(bodyObj),
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((res) => res.json())
    .then((res) => res);
  console.log(data);
  if (data) {
    return { props: data };
  }
}
