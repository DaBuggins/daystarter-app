import Fox from "./Fox";
import Dog from "./Dog";
import Cat from "./Cat";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

export default function RandPics() {
  const pics = [<Fox />, <Dog />, <Cat />];

  return (
    <div className="randpics">
      <PetsOutlinedIcon />
      {pics.map((pic) => (
        <h2 className="memeimg" key={Math.random()}>
          {pic}
        </h2>
      ))}
    </div>
  );
}

