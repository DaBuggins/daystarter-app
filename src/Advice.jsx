import { useEffect, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const API_URL = "https://api.adviceslip.com/advice";

export default function Advice() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    async function fetchAdvice() {
      const res = await fetch(API_URL);
      const jsonResponse = await res.json();
      setAdvice(jsonResponse.slip.advice);
    }
    fetchAdvice();
  }, []);



  return (

    <div className="advice">
      <h2>
        <TipsAndUpdatesIcon /> <u>Tip of the Day</u>
      </h2>
      <h3>
        <i>"{advice}"</i>
      </h3>
    </div>
  );
}
