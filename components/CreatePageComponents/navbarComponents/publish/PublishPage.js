import { Button } from "@mui/material";
import { useState } from "react";
import PublishDialog from "./PublishDialog";

export const PublishPage = (props) => {
  const { config, setConfig, token } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={() => handleOpen()}>Publish your Creation</Button>
      <PublishDialog
        open={open}
        setOpen={setOpen}
        config={config}
        setConfig={setConfig}
        token={token}
      />
    </>
  );
};
