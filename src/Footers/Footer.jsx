import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Popup from "./Popup";
import Gitpop from "./Gitpop";
import Linkpop from "./Linkpop";
import { useState } from "react";

export default function Footer() {
  const [value, setValue] = useState(0);

  return (
    <Box className="botnav" sx={{ width: 500, flexGrow: 1, margin: "auto" }}>
      <BottomNavigation
        style={{ backgroundColor: "transparent" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Popup />
        <Gitpop />
        <Linkpop />
      </BottomNavigation>
    </Box>
  );
}
