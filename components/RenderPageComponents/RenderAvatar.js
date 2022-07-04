import React from "react";
import {
  Box,
  Avatar,
  ListItem,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { useState } from "react";

export default function RenderAvatar(props) {
  const { config } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
      }}
    >
      <Box alignSelf={"center"}>
        <Avatar
          variant="circular"
          sx={{
            maxHeight: "40vh ",
            maxWidth: "40vh ",
            minHeight: "40vh ",
            minWidth: "40vh ",
          }}
        />
      </Box>
    </Box>
  );
}
