import { Button, Snackbar } from "@mui/material";
import { useState } from "react";
import { createPage } from "../../api";
import { SaveSvg } from "../tool-icons/NavSVGS";
export const SavePage = (props) => {
  const { config, setConfig, originalConfig, setOriginalConfig, token } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    setConfig({
      links: { num: config.links.num, url: config.links.url },
      avatarImg: config.avatarImg,
      avatarImgs: config.avatarImgs,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: config.colorList,
      gradient: config.gradient,
    });
    setOriginalConfig({
      links: { num: config.links.num, url: config.links.url },
      avatarImg: config.avatarImg,
      avatarImgs: config.avatarImgs,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: config.colorList,
      gradient: config.gradient,
    });

    let item = { token: token, config: config };
    console.log(item.config);
    return fetch("http://localhost:3000/api/Users/saveUser", {
      credentials: "include",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        handleClose();
      });
  };

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        id="demo-customized-Button"
        aria-haspopup="true"
        disableElevation
        onClick={handleClick}
      >
        <SaveSvg />
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="are you sure you want to save?"
        action={
          <>
            <Button
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleSave}
            >
              Yes
            </Button>
            <Button
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              No
            </Button>
          </>
        }
      />
    </>
  );
};
