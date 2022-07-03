import { Box, Button, Container } from "@mui/material";
import ViaLogin from "./ViaLogIn";
import useViaToken from "../components/UseViaToken";
import CreatePageNav from "../components/CreatePageComponents/CreatePageNav";
import { PageEditor } from "../components/CreatePageComponents/PageEditor";
import useConfig from "../components/CreatePageComponents/UseConfig";
import { bgColor } from "../components/CreatePageComponents/helperFunctions/helpers";

function CreatePage() {
  const { token, setToken } = useViaToken();
  const { config, setConfig } = useConfig();

  if (!token) {
    return (
      <Container
        id="page"
        sx={{
          bgcolor: "gray",
          display: "flex",
          width: "100%",
          height: "100%",
        }}
        maxWidth="lg"
        disableGutters={true}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <ViaLogin setToken={setToken} setConfig={setConfig} />
        </Box>
      </Container>
    );
  } else {
    let pageColor = bgColor(
      config.background,
      config.opacity,
      config.brightness
    );
    return (
      <Box>
        <CreatePageNav
          token={token}
          config={config}
          setConfig={setConfig}
          pageColor={pageColor}
        />
        <Container
          id="page"
          sx={{
            bgcolor: "gray",
            display: "flex",
          }}
          maxWidth="m"
          disableGutters={true}
        >
          <PageEditor
            config={config}
            setConfig={setConfig}
            pageColor={pageColor}
          />
        </Container>
      </Box>
    );
  }
}

export default CreatePage;
