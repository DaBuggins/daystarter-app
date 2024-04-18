import { useEffect, useState } from "react";

const API_URL = "https://randomfox.ca/floof";

export default function Fox() {
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    async function fetchAdvice() {
      const res = await fetch(API_URL);
      const jsonResponse = await res.json();
      setImgurl(jsonResponse.image);
    }
    fetchAdvice();
  }, []);

  return (
    <div>
      <img style={{}} className="memeimg" src={imgurl} alt="" />
    </div>
  );
}
