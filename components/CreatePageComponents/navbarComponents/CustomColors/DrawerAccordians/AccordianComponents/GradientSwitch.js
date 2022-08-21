import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const MaterialUISwitch = styled(Switch)(({ theme, linearGradient }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8," height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          linearGradient
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },

      "& + .MuiSwitch-track": {
        opacity: 1,
        background: "linear-gradient(#003892, #aab4be)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    background: theme.palette.mode === "dark" ? "#000000" : linearGradient,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    background: theme.palette.mode === "dark" ? linearGradient : "#000000",
    borderRadius: 20 / 2,
  },
}));

export default function GradientSwitch(props) {
  const {
    switchGradient,
    setSwitchGradient,
    linearGradient,
    config,
    setConfig,
  } = props;

  const handleSwitch = (e) => {
    setConfig({
      links: config.links,
      avatarImg: config.avatarImg,
      avatarImgs: config.avatarImgs,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: config.colorList,
      gradient: e.target.checked,
    });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            onChange={(e) => handleSwitch(e)}
            sx={{ m: 1 }}
            Checked={switchGradient}
            linearGradient={linearGradient}
            controlled
          />
        }
        label="Gradient background"
      />
    </FormGroup>
  );
}
