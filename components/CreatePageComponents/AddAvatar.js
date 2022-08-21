import React, { useState } from "react";
import { Box, Avatar, ButtonBase } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ThemeProvider, styled } from "@mui/material/styles";
import NoSsr from "@mui/material/NoSsr";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { ViaAvatar } from "./edit_components/ViaEditables";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const customTheme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[400],
    },
  },
});

export default function AddAvatar(props) {
  const { config, setConfig, token } = props;
  const [open, setOpen] = useState(false);
  const handleConfigRemove = () => {
    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatarImg: config.avatarImg,
      avatarImgs: config.avatarImgs,
      avatars: config.avatars - 1,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: config.colorList,
      gradient: config.gradient,
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
      }}
    >
      <Box alignSelf={"flex-end"}>
        <ButtonBase onClick={() => handleConfigRemove()}>
          <RemoveCircleOutlineIcon />
        </ButtonBase>
        <ButtonBase onClick={() => setOpen(true)}>
          <MoreVertIcon />
        </ButtonBase>
      </Box>
      <Box sx={{ padding: 5 }} alignSelf={"center"}>
        <NoSsr>
          <MuiThemeProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
              <ViaAvatar
                open={open}
                setOpen={setOpen}
                config={config}
                setConfig={setConfig}
              />
            </ThemeProvider>
          </MuiThemeProvider>
        </NoSsr>
      </Box>
    </Box>
  );
}
