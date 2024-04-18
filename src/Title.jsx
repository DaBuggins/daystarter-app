import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Title() {
  const [name, setName] = useState("")

  useEffect(() => {
    const savedName = JSON.parse(localStorage.getItem('name'));
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  const updateText = (evt) => {
    setName(evt.target.value)
  }
  const updateName = (evt) => {
    evt.preventDefault();
    setName(text)
  }

  return <>
    <div >
      <Accordion className="advice">
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <span> <FaceRetouchingNaturalIcon /> </span>   <Typography>Welcome to your day, {name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off"    >
            <i> Change username </i> <TextField onKeyDown={e => e.key === 'Enter' && e.preventDefault()} noValidate value={name} onChange={updateText} onSubmit={updateName} placeholder="Enter Name" className="nameinput" id="outlined-basic" variant="outlined" />
          </Box>
        </AccordionDetails>
      </Accordion>

    </div>
  </>
}
