import { Box, Avatar, Stack, Container } from "@mui/material";
import AddAvatar from "../viaUrl/components/CreatePageComponents/AddAvatar";
import LinkList from "../viaUrl/components/CreatePageComponents/LinkList";
import RenderAvatar from "../viaUrl/components/RenderPageComponents/RenderAvatar";
import RenderLinkList from "../viaUrl/components/RenderPageComponents/RenderLinkList";
import { bgColor } from "../viaUrl/components/CreatePageComponents/helperFunctions/helpers";
export default function RenderPage(props) {
  const { config } = props;
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
