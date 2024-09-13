import Advice from "./Advice";
import GameQuote from "./GameQuote";
import RandPics from "./RandPics";
import Grid from "@mui/material/Grid2";
import Clock2 from "./Clock2";
import Comic2 from "./Comic2";
import Currency from "./Currency";
import Title from "./Title";
import BodyColor from "./BodyColor";
import Footer from "./Footers/Footer";

export default function Daystarter() {
  return (
    <>
      <Grid container spacing={2} className="mainbody">
        <Grid xs={12} sm={6} lg={4}>
          <Title />
          <Advice />
          <Comic2 />
          <GameQuote />
        </Grid>
        <Grid xs={12} sm={6} lg={4}>
          <Clock2 />
          <RandPics />
          <Currency />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
