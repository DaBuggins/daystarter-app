import { useEffect, useState } from "react";
import Weather from "./Weather";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TIME_API = "https://worldtimeapi.org/api/timezone/Europe/London";

let now = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
let currentTime = new Date().toLocaleTimeString();

export default function Clock2() {
  const [time, setTime] = useState({});

  useEffect(() => {
    async function fetchInitialTime() {
      let rez = await fetch(TIME_API);
      let jrez = await rez.json();
      setTime(jrez);
    }
    fetchInitialTime();
  }, []);

  return (
    <div className="advice">
      <h3>  <AccessTimeIcon /> {currentTime} // {now} {time.timezone} </h3>
      <Weather />
    </div>
  );
}
