import {
  Box,
  List,
  ListItem,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  styled,
  Button,
  ButtonBase,
  Stack,
} from "@mui/material";

import { TextOptions } from "./headerComponents/TextOptions";

import ViaHeaderSVG from "./headerSVG/ViaHeaderSVG";

const StyledToolbar = styled(Toolbar)(({ theme, colors }) => ({
  background: colors
    ? `linear-gradient(217deg ,${colors.baseColor.hsl}, ${colors.thirdColor.hsl}, ${colors.secondColor.hsl}), linear-gradient(127deg ,${colors.baseColor.hsl}, ${colors.secondColor.hsl}, ${colors.thirdColor.hsl}), linear-gradient(336deg,${colors.secondColor.hsl}, ${colors.thirdColor.hsl}, ${colors.baseColor.hsl})`
    : "#CDCDCD",
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: "100vh",
    paddingLeft: 0,
    paddingTop: 0,
  },
}));

export const ViaHeader = (props) => {
  const { session, status, theme } = props;

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <StyledToolbar colors={theme}>
          {" "}
          <Box
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              minWidth: "50%",
              minHeight: "50%",
              mt: "auto",
              mb: "auto",
              display: "flex",
            }}
          >
            <ViaHeaderSVG width="500" height="500" />
            <TextOptions session={session} />
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};
