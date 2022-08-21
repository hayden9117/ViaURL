import { ThemeProvider, styled } from "@mui/material/styles";
import {
  DialogTitle,
  Avatar,
  Dialog,
  Button,
  Box,
  Input,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Container } from "@mui/system";
import { CssBaseline } from "@mui/material";
const DialogAvatar = (props) => {
  const { open, setOpen, img, setImg, config, setConfig } = props;

  const handleChange = (event) => {
    setImg(event.target.value);
    setConfig({
      links: config.links,
      avatarImg: event.target.value,
      avatarImgs: config.avatarImgs,
      avatars: config.avatars,
      background: config.background,
      opacity: config.opacity,
      template: config.template,
      brightness: config.brightness,
      colorList: config.colorList,
      gradient: config.gradient,
    });
  };
  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <CssBaseline />
      <DialogTitle>Avatar options</DialogTitle>
      <Container maxWidth="sm" sx={{ padding: 5 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>use a currently saved image</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={img}
              onChange={handleChange}
            >
              {config.avatarImgs.map((img) => {
                return (
                  <MenuItem value={img}>
                    <img src={img} srcSet={img} referrerPolicy="no-referrer" />
                  </MenuItem>
                );
              })}
            </Select>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Upload an Image</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="raised" component="span">
                  Upload
                </Button>
              </label>

              <Box
                sx={{
                  width: "90%",
                  height: "150px",
                  border: "dashed",
                  justifySelf: "center",
                  alignSelf: "center",
                }}
              >
                {" "}
                <Typography>Drag Image to Upload</Typography>{" "}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Dialog>
  );
};
export const ViaAvatar = (props) => {
  const { open, setOpen, config, setConfig } = props;
  const [img, setImg] = useState(config.avatarImg);
  console.log(img);
  const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.3);
    }
    `}
  `;

  return (
    <>
      <StyledAvatar
        variant="circular"
        srcSet={config.avatarImg}
        src={config.avatarImg}
        sx={{
          minHeight: "20vh",
          minWidth: "20vh",
          mAxHeight: "40vh",
          mAxWidth: "40vh",
        }}
      />
      <DialogAvatar
        open={open}
        setOpen={setOpen}
        img={img}
        setImg={setImg}
        config={config}
        setConfig={setConfig}
      />
    </>
  );
};
