import { Box, Avatar, Stack, Container } from "@mui/material";

import RenderAvatar from "../components/RenderPageComponents/RenderAvatar";
import RenderLinkList from "../components/RenderPageComponents/RenderLinkList";
import { bgColor } from "../components/CreatePageComponents/helperFunctions/helpers";
import { getSession, useSession } from "next-auth/react";

export default function RenderPage(props) {
  const config = props.response.config;
  const user = props.response.token;
  if (!config && !user) return <div>Loading..</div>;
  let pageColor = bgColor(config.background, config.opacity, config.brightness);
  return (
    <Box
      sx={{
        background: config.gradient
          ? `Linear-gradient(${config.colorList.map((c) => c)})`
          : pageColor.color,
        minHeight: "100vh",
        minWidth: "100vw",
        maxHeight: "110vh",
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
          mt: "15vh",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack alignItems={"center"} spacing={5} direction={config.template}>
          {config.avatars === 1 ? (
            <RenderAvatar config={config} src={user.avatarImg} />
          ) : null}
          {config.links.num > 0 ? <RenderLinkList config={config} /> : null}
        </Stack>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/ViaLogIn",
        permanent: false,
      },
    };
  }
  console.log(session);
  let bodyObject = {
    email: session.user.email,
    password: "password1",
    image: session.user.image,
  };

  console.log(session.user.email);

  let data = await fetch("http://localhost:3000/api/Users/getUser", {
    credentials: "include",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify(bodyObject),
  })
    .then((res) => res.json())
    .then((res) => res);
  console.log(data);
  if (session) {
    return { props: data };
  }
}
