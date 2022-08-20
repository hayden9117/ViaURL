import React from "react";
import { Input, Button, Box, Typography } from "@mui/material";
export default function BgImage() {
  console.log("TESTSTSTST");
  return (
    <Box>
      <Input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span">
          Upload
        </Button>
      </label>

      <Box
        sx={{
          width: "90%",
          height: "150px",
          border: "dashed",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        {" "}
        <Typography>Drag Image to Upload</Typography>{" "}
      </Box>
    </Box>
  );
}
