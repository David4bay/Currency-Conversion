import React, { useState, useEffect, useCallback } from "react"
const Body = React.lazy(() => import("./components/Body/Body"))
const Header = React.lazy(() => import("./components/Header/Header"))
const Nav = React.lazy(() => import("./components/Navigation/Nav"))

function App() {

  const [defaultNumber, setDefaultNumber] = useState(null);
  const [convertedNumber, setConvertedNumber] = useState(null);
  const [currencyRate, setCurrencyRate] = useState(null);
  const [currency, setCurrency] = useState({
    defaultType: 'USD',
    defaultTypeAmount: 0,
    convertedType: 'NGN',
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

  useEffect(() => {
    setDefaultNumber(Number(currency.convertedTypeAmount / currencyRate))
    console.log(defaultNumber)
  }, [currency.convertedTypeAmount, currencyRate, defaultNumber])
  
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

  // throw new Error("HAHAHAHAHAHA")

  return (
    <div>
      <React.Suspense fallback={<h1>Loading...</h1>}>
    <Nav />
    <main>
    <Header />
    <Body 
    defaultNumber={defaultNumber}
    currency={currency}
    convertedNumber={convertedNumber}
    swapCurrencies={swapCurrencies} 
    changeCurrencyHandler={changeCurrencyHandler}  
    />
    </main>
    </React.Suspense>
    </div>
  )
}

export default App;