import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
export { };

const { useState, useEffect } = require("react");
const RANDOM_QUOTE_URL = "https://www.ultima.rest/api/random";

export default function GameQuote() {
  const [quote, setQuote] = useState({ quote: "", title: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      const res = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await res.json();
      const randomQuote = jsonResponse;
      setQuote(randomQuote);
      setIsLoading(false);
    }
    fetchQuote();
  }, []);

  return (
    <div className={`${isLoading ? "loader" : "advice"} `} >
      <h2 >
        <SportsEsportsIcon /> {quote.title} ({quote.release})
      </h2>
      <h3>
        "{quote.quote}"
      </h3>
      <i>
        <h3 className="Character" style={{ opacity: isLoading ? 0 : 1 }}>
          - {quote.character}
        </h3>
      </i>
    </div>
  );
}
