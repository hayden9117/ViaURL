import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";

export const ColorList = (props) => {
  const { config, linearGradient } = props;

  console.log(linearGradient);
  return (
    <List>
      {config.colorList.map((_color, index) => (
        <ListItem disablePadding sx={{ display: "block" }}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "black", paddingRight: 2 }}>
              {`${index + 1} : ${config.colorList[index]} `}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignSelf: "end",
                width: "15px",
                height: "15px",
                backgroundColor: config.colorList[index],
              }}
            />
          </Box>
        </ListItem>
      ))}

      <Box
        sx={{
          width: "150px",
          height: "150px",
          border: "solid",
          justifySelf: "center",
          alignSelf: "center",

          background: linearGradient,
        }}
      />
    </List>
  );
};
