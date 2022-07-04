import { Box, Avatar, Stack, Container } from "@mui/material";

import RenderAvatar from "../components/RenderPageComponents/RenderAvatar";
import RenderLinkList from "../components/RenderPageComponents/RenderLinkList";
import { bgColor } from "../components/CreatePageComponents/helperFunctions/helpers";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function RenderPage(props) {
  const { data, error } = useSWR("/api/RenderPage", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  let pageColor = bgColor(
    data.configData.background,
    data.configData.opacity,
    data.configData.brightness
  );
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
        <Stack
          alignItems={"center"}
          spacing={5}
          direction={data.configData.template}
        >
          {data.configData.avatars === 1 ? (
            <RenderAvatar config={data.configData} />
          ) : null}
          {data.configData.links.num > 0 ? (
            <RenderLinkList config={data.configData} />
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
}
