import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
export const ViaLoading = (props) => {
  const { status } = props;
  if (status === "loading")
    return (
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
          maxWidth: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <CircularProgress color="inherit" />
      </Box>
    );
};
