import { useEffect, useState } from "react";

const API_URL =
  "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json";

export default function Cat() {
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    async function fetchAdvice() {
      const res = await fetch(API_URL);
      const jsonResponse = await res.json();
      setImgurl(jsonResponse[0].url);
    }
    fetchAdvice();
  }, []);

  return (
    <div>
      <img className="memeimg" src={imgurl} alt="" />
    </div>
  );
}
