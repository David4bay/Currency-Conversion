import { useState, useEffect, useCallback } from "react"
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Nav from './components/Navigation/Nav';

function App() {

  const [convertedNumber, setConvertedNumber] = useState(null);
  const [currencyRate, setCurrencyRate] = useState(null)
  const [currency, setCurrency] = useState({
    defaultType: 'USD',
    defaultTypeAmount: 0,
    convertedType: 'EUR',
    convertedTypeAmount: 0
  })
  
  useEffect(() => {
    if (!currencyRate) {
      fetch('../data/currencyData.json').then((response) => {
        return response.json()
      }).then((data) => {
        for (const rate of data) {
          if (rate["exchange_rate"]) {
          setCurrencyRate(Math.floor(rate["exchange_rate"]))
        }
        }
      })
    }
  }, [currencyRate])

  useEffect(() => {
      setConvertedNumber(Number(currency.defaultTypeAmount * currencyRate))
      console.log(convertedNumber)
  }, [convertedNumber, currency.defaultAmount, currency.defaultTypeAmount, currencyRate])
  
  const changeCurrencyHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value.slice(0, 7);
    const type = e.target.name === "defaultTypeAmount" ? currency.defaultType : currency.convertedType
    setCurrency({ ...currency, [name]: Number(value.toLocaleString("en-US", { style: "currency", currency: type})) })
  }
  
  const swapCurrencies = useCallback(() => {
    const defaultTypes = currency.defaultType;
    const defaultAmounts = currency.defaultTypeAmount;
    const convertedTypes = currency.convertedType;
    const convertedTypeAmounts = currency.convertedTypeAmount;
  
    setCurrency({
        ...currency, 
        defaultType: convertedTypes, 
        defaultTypeAmount: convertedTypeAmounts, 
        convertedType: defaultTypes, 
        convertedTypeAmount: defaultAmounts
    })
  }, [currency])

  return (
    <div>
    <Nav />
    <main>
    <Header />
    <Body 
    currency={currency}
    convertedNumber={convertedNumber}
    swapCurrencies={swapCurrencies} 
    changeCurrencyHandler={changeCurrencyHandler}  
    />
    </main>
    </div>
  )
}

export default App;