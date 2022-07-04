import { Box, Stack, Typography } from "@mui/material";
import AboutProjectSVG from "./aboutSVGS/AboutProjectSVG";

export const AboutProject = () => {
  return (
    <Box
      id="aboutMe"
      sx={{
        bgcolor: "background.paper",
        width: "85%",
        height: "100vh",
        mt: 5,
        ml: "auto",
        mr: "auto",
        padding: "10px 10px 10px 10px",
      }}
    >
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h2"
          paragraph={true}
          sx={{
            padding: "10px 10px 10px 10px",
            textAlign: "center",
            ml: "auto",
            mr: "auto",
          }}
        >
          Inspiration
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <Box>
            <AboutProjectSVG />
          </Box>

          <Typography
            variant="h5"
            paragraph={true}
            sx={{
              padding: "10px 10px 10px 10px",
              textAlign: "left",
              " @media screen and (max-width: 650px)": {
                textAlign: "center",
                ml: "auto",
                mr: "auto",
              },
            }}
          >
            I really wanted to challenge myself with this one; I picked a
            long-term project which would inevitably lead me down a path of
            trying to find the answers to questions that may not be readily
            available. This project will force me to re-frame my approach to
            researching information and writing code.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
