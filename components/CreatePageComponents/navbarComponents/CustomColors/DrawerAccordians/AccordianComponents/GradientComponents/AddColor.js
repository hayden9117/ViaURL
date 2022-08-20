import React from "react";
import ListItem from "@mui/material/ListItem";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { AddCircleOutline } from "@mui/icons-material/";
import { Typography, ButtonBase, Box } from "@mui/material";
import GradientBar from "./GradientBar";

export function AddColor(props) {
  const { handleColorAdd, config, handleColorRemove, linearGradient } = props;
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <>
        <Typography sx={{ color: "black", paddingRight: 2 }}>
          add colors to create gradient background
        </Typography>
      </>
      <Box sx={{ display: "flex" }}>
        <ButtonBase onClick={() => handleColorRemove()}>
          <RemoveCircleOutlineIcon />
        </ButtonBase>
        <GradientBar linearGradient={linearGradient} />

        <ButtonBase
          onClick={() =>
            handleColorAdd(`${config.background}${config.opacity}`)
          }
        >
          <AddCircleOutline />
        </ButtonBase>
      </Box>
    </ListItem>
  );
}
