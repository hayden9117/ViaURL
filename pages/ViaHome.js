import {
  Box,
  List,
  ListItem,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  styled,
  Stack,
} from "@mui/material";
import { AboutProject } from "../components/about/AboutProject";
import { ViaHeader } from "../components/header/ViaHeader";

const ViaHome = () => {
  return (
    <Box>
      <CssBaseline />
      <Stack spacing={2}>
        <ViaHeader />
        <AboutProject />
      </Stack>
    </Box>
  );
};

export default ViaHome;
