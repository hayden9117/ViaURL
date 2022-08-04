import { Box, Avatar, Stack, Container } from "@mui/material";

import RenderAvatar from "../components/RenderPageComponents/RenderAvatar";
import RenderLinkList from "../components/RenderPageComponents/RenderLinkList";
import { bgColor } from "../components/CreatePageComponents/helperFunctions/helpers";
import useConfig from "../components/CreatePageComponents/UseConfig";

export default function RenderPage() {
  const { config } = useConfig();
  if (!config) return <div>Loading..</div>;
  let pageColor = bgColor(config.background, config.opacity, config.brightness);
  return (
    <Box
      bgcolor={pageColor.color}
      sx={{
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
