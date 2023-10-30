import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Navigation/Nav"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import currencyNames from '../../util/CurrencyNames/currencyNames'
import SelectCurrency from "../../components/SelectCurrency/SelectCurrency"
import currencySymbols from 
'../../util/CurrencySymbols/currencySymbols'

ChartJS.register(ArcElement, Tooltip, Legend);

function RateBody() {

  const dispatch = useDispatch()

    const [values, setValues] = useState({
        from: null,
        to: null
    })

    const oldCurrency = useSelector((state) => state.oldCurrencyReducer.old_currency)

    const newCurrency = useSelector((state) => state.newCurrencyReducer.new_currency)
  

const data = {
    labels: [`${oldCurrency}(valued in ${newCurrency})`, `${newCurrency}(valued in ${oldCurrency})`],
    datasets: [
      {
        label: 'Currency Rate(s)',
        data: [values.from, values.to,],
        backgroundColor: [ 
          'rgba(255, 29, 132, 1)',
          'rgba(54, 122, 235, 2)',
        ],
        borderColor: [
          'rgba(255, 29, 132, 1)',
          'rgba(54, 122, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

useEffect(() => {
  const fetchRates = () => {
    fetch(`https://api.api-ninjas.com/v1/exchangerate?pair=${oldCurrency}_${newCurrency}`, {
        method: 'get',
        headers: {
          'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
      }
}).then((res) => res.json()).then((data) => setValues((values) => {
    return {
        ...values, from: data.exchange_rate
    }
}))
fetch(`https://api.api-ninjas.com/v1/exchangerate?pair=${newCurrency}_${oldCurrency}`, {
    method: 'get',
    headers: {
        'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
    }
}).then((res) => res.json()).then((data) => setValues((values) => {
  return {
      ...values, to: data.exchange_rate
  }
}))
}
fetchRates()
    }, [newCurrency, oldCurrency])

    function selectOldCurrency(e) {
      const value = e.target.value
      const name = e.target.name
      dispatch({ type: "CHANGE_OLD", payload: { [name]: value } })
  }

  function selectNewCurrency(e) {
      const value = e.target.value
      const name = e.target.name
      console.log(e.target)
      dispatch({ type: "CHANGE_NEW", payload: { [name]: value } })
  }

    return (
      <div>
        <div>
        <Nav />
        { /* React Charts JS Examples */}
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", minHeight: "100vh"}}>
        <div style={{width: "45%", color: "#ffffff", textAlign: "center"}}>
        {values.from && values.to && <Pie data={data} />}
        <p style={{marginTop: "100px"}}>
        {values.from >= values.to ? <strong>{oldCurrency} is worth {values.from} in {newCurrency}</strong> : <strong>{newCurrency} is worth {values.to} in {oldCurrency}</strong>}
        </p>
        </div>
        <div>
        <SelectCurrency
        oldCurrency={oldCurrency}
        newCurrency={newCurrency}
        currencyNames={currencyNames}
        selectOldCurrency={selectOldCurrency}
        selectNewCurrency={selectNewCurrency}
        currencySymbols={currencySymbols}
        />
        </div>
        </div>
        </div>
        <div>
        </div>
        <Footer />
        </div>
    )
}

export default RateBody;