import { Box, Avatar, Stack, Container } from "@mui/material";

import AddAvatar from "./AddAvatar";
import { getPosition } from "./helperFunctions/getPosition";
import LinkList from "./LinkList";

export const PageEditor = (props) => {
  const { config, setConfig, pageColor, token } = props;
  console.log(config.colorList.length);
  console.log(config.gradient);
  return (
    <Box
      bgcolor="gray"
      height={"100vh"}
      width={"100vw"}
      sx={{ position: "fixed" }}
    >
      <Box
        sx={{
          background:
            config.gradient && config.colorList.length !== 1
              ? `Linear-gradient(${config.colorList.map((c) => c)})`
              : pageColor.color,
          minHeight: "80vh",
          minWidth: "50vw",
          maxHeight: "80vh",
          maxWidth: "50vw",
          ml: "auto",
          mr: "auto",
          mt: "15vh",
          overflow: "auto",
          position: "relative",
          ...(config.template === "row" && { alignItems: "center" }),
        }}
      >
        <Box height={"80vh"} width={"50vw"}>
          <Box sx={{ display: "contents" }}>
            <Stack
              sx={{
                alignItems: "center",
              }}
              spacing={5}
              direction={config.template}
            >
              {config.avatars === 1 ? (
                <AddAvatar
                  config={config}
                  setConfig={setConfig}
                  token={token}
                />
              ) : null}
              {config.links.num > 0 ? (
                <LinkList config={config} setConfig={setConfig} />
              ) : null}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
