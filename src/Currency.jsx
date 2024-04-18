import { useEffect, useState } from "react"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const API_URL = "https://open.er-api.com/v6/latest/GBP"

export default function Currency() {
    const [rates, setRates] = useState({ USD: 0 })
    useEffect(() => {
        async function getCurrency() {
            const res = await fetch(API_URL)
            const jres = await res.json()
            setRates(jres.rates)
        }
        getCurrency();
    }, [])
    return <div className="advice">

        <h3>
            <p>      <CurrencyExchangeIcon /> GBP Exchange Rates - £1.00 </p> </h3>
        <ul>
            <li> USD: ${rates.USD}</li>
            <li> EUR: €{rates.EUR}</li>
            <li> YEN: ¥{rates.JPY}</li>
            <li> AUD: ${rates.AUD}</li>
        </ul>

    </div>
}