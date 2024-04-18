import { useEffect, useState } from "react";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";


export default function Comic2() {
  const [comic, setComic] = useState("");

  useEffect(() => {
    async function fetchComic() {
      const randIdx = Math.floor(Math.random() * 100);
      const ref = await fetch("https://api.imgflip.com/get_memes");
      const jref = await ref.json();
      setComic(jref?.data?.memes[`${randIdx}`]);
    }
    fetchComic();
  }, []);

  return (
    <div className="advice">
      <SentimentVerySatisfiedOutlinedIcon />
      <p>     <img className="comicimg" src={comic.url} alt="" /> </p>
      <p> {comic.name} </p>
    </div>
  );
}

