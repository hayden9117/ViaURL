import { Button, Snackbar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import Router from "next/router";

const haveSameData = function (obj1, obj2) {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};

export const BackToHome = (props) => {
  const { config, originalConfig } = props;
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [same, setSame] = useState(false);

  const handleOpen = () => {
    if (haveSameData(config, originalConfig)) {
      setSame(true);
    } else {
      setOpen(true);
    }
  };
  const handleOpenTwo = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleHome = () => {
    Router.push("/");
  };
  if (same) handleHome();
  return (
    <>
      <IconButton
        id="demo-customized-Button"
        aria-haspopup="true"
        onClick={() => handleOpen()}
        disableElevation
      >
        Return
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="would you like to save your progress before exiting?"
        action={
          <>
            <Button
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleOpenTwo}
            >
              No
            </Button>
            <Button
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              Yes
            </Button>
          </>
        }
        s
      />
      <Snackbar
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose}
        message="are you sure?"
        action={
          <>
            <Button
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleHome}
            >
              Yes
            </Button>
            <Button
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              No, id like to save my progress
            </Button>
          </>
        }
      />
    </>
  );
};
