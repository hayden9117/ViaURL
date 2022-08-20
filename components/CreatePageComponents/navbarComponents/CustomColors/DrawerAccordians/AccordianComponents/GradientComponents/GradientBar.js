import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const GradientBar = (props) => {
  const { linearGradient } = props;

  return (
    <>
      <Box
        sx={{
          width: "150px",
          p: 1,
          borderRadius: "16px",
          border: "solid",
          background: linearGradient.replace("(", "( to left, "),
        }}
      ></Box>
    </>
  );
};

GradientBar.propTypes = {};

export default GradientBar;
