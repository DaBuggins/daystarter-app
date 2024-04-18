import { useState, useEffect } from "react";
const API_URL = "https://api.sunrisesunset.io/json?lat=51.3026&lng=-0.7939&timezone=GMT&date=today";

export default function Sunrise() {
  const [sun, setSun] = useState("");
  useEffect(() => {
    async function fetchSun() {
      const response = await fetch(API_URL);
      const jres = await response.json();
      setSun(jres.results)
    }
    fetchSun();
  }, []);


  return <>
    <p className="sunrise" style={{ fontSize: "small" }}>☀️  {sun.sunrise} - 🌃 {sun.sunset}</p>
  </>;
}
