import Dog from "./Dog";
import Cat from "./Cat";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

export default function RandPics() {
  const pics = [<Cat />, <Dog />];

  return (
    <div className="randpics">
      <PetsOutlinedIcon />
      {pics.map((pic) => (
        <div className="memeimg" key={Math.random()}>
          {pic}
        </div>
      ))}
    </div>
  );
}
