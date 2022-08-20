import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { SwipeableDrawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import { IconButton, Stack, Typography } from "@mui/material";

import { ColorCreator } from "./DrawerAccordians/AccordianComponents/ColorCreator";
import { ColorList } from "./DrawerAccordians/AccordianComponents/GradientComponents/ColorList";
import {
  ArrowCircleLeftOutlined,
  ArrowLeftOutlined,
} from "@mui/icons-material";
import AccordionBar from "./DrawerAccordians/AccordianBar";

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  width: 240,

  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(SwipeableDrawer, {
  shouldForwardProp: (prop) => prop !== true,
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function TopDrawer(props) {
  const { openTop, setOpenTop, config, setConfig } = props;
  const [color, setColor] = useState(config.background);
  const [newColorList, setNewColorList] = useState(config.colorList);

  if (!config) return <div>Loading...</div>;

  return (
    <Drawer BackdropProps={{ invisible: true }} anchor={"top"} open={openTop}>
      <DrawerHeader sx={{ width: 240 }}>
        <IconButton sx={{ color: "black" }} onClick={() => setOpenTop(false)}>
          <ArrowCircleLeftOutlined />
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ mt: 5 }} />

      <AccordionBar
        color={color}
        setColor={setColor}
        config={config}
        setConfig={setConfig}
      />
    </Drawer>
  );
}
