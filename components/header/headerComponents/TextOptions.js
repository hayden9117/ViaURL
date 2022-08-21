import { Box, Typography, ButtonBase } from "@mui/material";
import { signOut } from "next-auth/react";
export const TextOptions = (props) => {
  const { session } = props;
  return (
    <>
      <Box
        sx={{
          width: "100%",
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
    </>
  );
};
