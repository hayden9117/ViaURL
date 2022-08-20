import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Typography, Box, Switch } from "@mui/material";
import BgSlider from "../../BgSliders.js/BgSliders";
import ColorMenu from "../../BgSliders.js/ColorMenu";
import OpacitySlider from "../../BgSliders.js/opacity/OpacitySlider";
import LightDark from "../../BgSliders.js/opacity/LightDark";
import { ColorList } from "./GradientComponents/ColorList";
import { AddColor } from "./GradientComponents/AddColor";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
export const ColorCreator = (props) => {
  const { color, setColor, config, setConfig, switchGradient, linearGradient } =
    props;

  const [newColorList, setNewColorList] = useState(config.colorList);

  if (!config) return <div>Loading...</div>;
  useEffect(() => {}, [config]);

  const checkColor = (colorCheck) => {
    if (config.colorList.length === 3) return false;
    config.colorList.forEach((c) => {
      if (c === colorCheck) return true;
      return false;
    });
  };

  const arr = [];
  console.log(config);
  for (let i = 0; i < config.colorList.length; i++) {
    arr.push(config.colorList[i]);
  }

  const handleColorAdd = (newColor) => {
    if (config.colorList.length >= 5) {
      alert("only 5 colors can be added");
      return 0;
    }

    arr.push(newColor);
    setConfig({
      links: config.links,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: [...arr],
      gradient: config.gradient,
    });
  };
  const handleColorRemove = () => {
    arr.pop();
    setConfig({
      links: config.links,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: [...arr],
      gradient: config.gradient,
    });
  };
  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Box
          sx={{
            height: 100,
            display: "flex",
            justifySelf: "center",
            alignSelf: "center",
          }}
        >
          <ColorMenu color={color} setColor={setColor} />
        </Box>
        <Divider />
        <Box sx={{ width: 50 }}>
          {" "}
          <ThemeProvider theme={theme}>
            <Typography color={config.background}>
              {`Edit selected color`}
            </Typography>
            <Typography color={config.background}>
              {`Hex: ${config.background}${config.opacity}`}
            </Typography>
          </ThemeProvider>
        </Box>

        <BgSlider
          color={color}
          setColor={setColor}
          config={config}
          setConfig={setConfig}
        />

        <Typography>Opacity</Typography>
        <OpacitySlider
          color={color}
          setColor={setColor}
          config={config}
          setConfig={setConfig}
        />
        <Typography>Brightness</Typography>
        <LightDark
          color={color}
          setColor={setColor}
          config={config}
          setConfig={setConfig}
        />
      </ListItem>
      <Divider />
      {config.gradient ? (
        <>
          <AddColor
            linearGradient={linearGradient}
            handleColorAdd={handleColorAdd}
            config={config}
            handleColorRemove={handleColorRemove}
          />
          <ColorList
            linearGradient={linearGradient}
            config={config}
            setConfig={setConfig}
          />
        </>
      ) : null}
    </>
  );
};
