import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ColorCreator } from "./AccordianComponents/ColorCreator";
import GradientSwitch from "./AccordianComponents/GradientSwitch";
import { useState } from "react";
import BgImage from "./AccordianComponents/bgImages/bgImage";
export default function AccordionBar(props) {
  const { color, setColor, config, setConfig } = props;
  const [switchGradient, setSwitchGradient] = useState(() => config.gradient);
  const linearGradient = `Linear-gradient(${config.colorList.map((c) => c)})`;
  console.log(switchGradient);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Apply a background Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GradientSwitch
            switchGradient={switchGradient}
            setSwitchGradient={setSwitchGradient}
            linearGradient={linearGradient}
            color={color}
            config={config}
            setConfig={setConfig}
          />

          <ColorCreator
            color={color}
            setColor={setColor}
            config={config}
            setConfig={setConfig}
            switchGradient={switchGradient}
            linearGradient={linearGradient}
          />
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
          <BgImage />
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
