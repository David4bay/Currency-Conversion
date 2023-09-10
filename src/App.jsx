import React, { useState, useEffect, useCallback } from "react"
import Footer from "./components/Footer/Footer"
const Body = React.lazy(() => import("./components/Body/Body"))
const Header = React.lazy(() => import("./components/Header/Header"))
const Nav = React.lazy(() => import("./components/Navigation/Nav"))
import LoadingState from "./util/LoadingState/LoadingState"

function App() {

  const [swap, setSwap] = useState(true)
  const [defaultNumber, setDefaultNumber] = useState(0)
  const [convertedNumber, setConvertedNumber] = useState(null)
  const [currencyRate, setCurrencyRate] = useState(null)
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
      }).catch((error) => console.error(error))
    }
  }, [currency.convertedTypeAmount, currencyRate])

  useEffect(() => {
    if (swap) {
      setConvertedNumber(Number(currency.defaultTypeAmount * currencyRate))
    }
    if (currency.convertedTypeAmount) {
      setDefaultNumber(Number(currency.convertedTypeAmount / currencyRate))
    }
  }, [convertedNumber, currency.defaultAmount, currency.defaultTypeAmount, currency.convertedTypeAmount, currencyRate, swap])
  
  const changeCurrencyHandler = (e) => {
    const name = e.target.name
    const value = e.target.value.slice(0, 7)
    const type = e.target.name === "defaultTypeAmount" ? currency.defaultType : currency.convertedType
    setCurrency({ ...currency, [name]: Number(value.toLocaleString("en-US", { style: "currency", currency: type})) })
  }
  
  const swapCurrencies = useCallback(() => {
    const defaultTypes = currency.defaultType
    const defaultAmounts = currency.defaultTypeAmount
    const convertedTypes = currency.convertedType
    const convertedTypeAmounts = currency.convertedTypeAmount
  
    setSwap(!swap)
    setCurrency({
        ...currency, 
        defaultType: convertedTypes, 
        defaultTypeAmount: convertedTypeAmounts, 
        convertedType: defaultTypes, 
        convertedTypeAmount: defaultAmounts
    })
  }, [currency, swap])

  return (
      <React.Suspense fallback={<LoadingState />}>
    <div>
    <Nav />
    <main>
    <Header />
    <Body 
    currency={currency}
    convertedNumber={convertedNumber}
    swapCurrencies={swapCurrencies} 
    changeCurrencyHandler={changeCurrencyHandler}
    defaultNumber={defaultNumber}
    />
    <Footer />
    </main>
    </div>
    </React.Suspense>
  )
}

export default App