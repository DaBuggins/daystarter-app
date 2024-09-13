import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { hsvaToHex } from "@uiw/color-convert";
import Swatch from "@uiw/react-color-swatch";

export default function BodyColor() {
  const [hex, setHex] = useState("#fffff");
  const [fontHex, setFontHex] = useState("#000000");
  useEffect(() => {
    document.body.style.backgroundColor = hex;
  }, [hex]);
  useEffect(() => {
    document.body.style.color = fontHex;
  }, [fontHex]);

  choices = ["#000000", "#FFFFFF", "#37D67A", "#2CCCE4", "#F47373", "#ff8a65"];
  fchoices = ["#2CCCE4", "#F47373", "#ff8a65", "#37D67A", "#FFFFFF", "#000000"];

  return (
    <>
      <Accordion
        className="advice"
        style={{ backgroundColor: "transparent", color: fontHex }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="color-picker"
          id="panel1-header"
        >
          <Typography>
            <ColorLensIcon /> Colours
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ color: "black" }}>Background Color: {hex}</p>
          <Swatch
            colors={choices}
            color={hex}
            onChange={(hex) => {
              setHex(hsvaToHex(hex));
            }}
          />
          <p>Font Color: {fontHex}</p>
          <Swatch
            colors={fchoices}
            color={fontHex}
            onChange={(hex) => {
              setFontHex(hsvaToHex(hex));
            }}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
