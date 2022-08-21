import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useState, forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PublishDialog(props) {
  const { open, setOpen, config, setConfig, token } = props;
  const [pageName, setPageName] = useState("");

  console.log(pageName);
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

    let item = { config: config, pageName: pageName, email: token.email };
    console.log(item.config);
    return fetch("http://localhost:3000/api/Pages/addPage", {
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
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Publish ViaUrls Page"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          What would you like to name your page?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <TextField
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
        ></TextField>

        <Button onClick={() => handleSave()}>Publish</Button>
      </DialogActions>
    </Dialog>
  );
}
