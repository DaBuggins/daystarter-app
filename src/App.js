import "./styles.css";
import Advice from "./Advice";
import GameQuote from "./GameQuote";
import RandPics from "./RandPics";
import Grid from "@mui/material/Unstable_Grid2";
import Clock2 from "./Clock2";
import Comic2 from "./Comic2";
import CssBaseline from "@mui/material/CssBaseline";
import Currency from "./Currency";
import Title from "./Title";
import BodyColor from "./BodyColor";

// blah blah blah

export default function App() {

  return (
    < >
      <CssBaseline />
      <Grid container spacing={2} className="mainbody" >
        <Grid xs={12} sm={6} lg={4}   >
          <Title />
          <Advice />
          <Comic2 />
          <GameQuote />
          <Currency />
        </Grid>
        <Grid xs={12} sm={6} lg={4}  >
          <Clock2 />
          <RandPics />
        </Grid>
      </Grid>
    </>
  );
}
