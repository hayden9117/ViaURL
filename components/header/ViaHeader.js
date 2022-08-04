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
import { signOut } from "next-auth/react";

import ViaHeaderSVG from "./headerSVG/ViaHeaderSVG";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "#CDCDCD",
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
  const { session, status } = props;
  let headerLinks = [
    { label: "Create a personal viaURL page", id: 1, url: "CreatePage" },

    { label: "View a demo page", id: 2, url: "demo" },
  ];
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <StyledToolbar>
          {" "}
          <Box sx={{ mt: "auto", mb: "auto" }}>
            <ViaHeaderSVG width="500" height="500" />
          </Box>
          <Box
            sx={{
              display: "Flex",
              padding: 5,
              flexDirection: "column",

              alignSelf: "center",
            }}
            direction="column"
            alignItems="center"
            spacing={5}
          >
            {session ? (
              <Typography
                variant="h3"
                color="#3F3D3D"
                sx={{ p: 2 }}
              >{`Welcome ${session.user.name}!`}</Typography>
            ) : null}

            {session ? (
              <ButtonBase href={`CreatePage`}>
                <Typography variant="h3" color="#3F3D3D">
                  Edit your personal viaUrl page
                </Typography>
              </ButtonBase>
            ) : (
              <ButtonBase href="demo">
                <Typography variant="h3" color="#3F3D3D">
                  View and edit a viaUrl demo page before signing up
                </Typography>
              </ButtonBase>
            )}

            {session ? (
              <ButtonBase onClick={() => signOut()}>
                <Typography variant="h3" color="#3F3D3D">
                  sign out
                </Typography>
              </ButtonBase>
            ) : (
              <ButtonBase href="auth/signin">
                <Typography variant="h3" color="#3F3D3D">
                  sign in
                </Typography>
              </ButtonBase>
            )}
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};
