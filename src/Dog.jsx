import { useEffect, useState } from "react";

const API_URL = "https://random.dog/woof.json";

export default function Dog() {
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    async function fetchAdvice() {
      const res = await fetch(API_URL);
      const jsonResponse = await res.json();
      setImgurl(jsonResponse.url);
    }
    fetchAdvice();
  }, []);

  return (
    <div>
      <img className="memeimg" src={imgurl} alt="" />
    </div>
  );
}
