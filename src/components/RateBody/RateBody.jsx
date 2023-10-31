import Footer from "../Footer/Footer"

import Nav from "../Navigation/Nav"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Pie } from 'react-chartjs-2'

import { useSelector, useDispatch } from 'react-redux'

import { useEffect } from 'react'

import currencyNames from '../../util/CurrencyNames/currencyNames'

import SelectCurrency from "../SelectCurrency/SelectCurrency"

import currencySymbols from 
'../../util/CurrencySymbols/currencySymbols'

import { fetchRates } from '../../util/fetchRates/fetchRates'

ChartJS.register(ArcElement, Tooltip, Legend);

function RateBody() {

  const dispatch = useDispatch()

  const oldCurrency = useSelector((state) => state.oldCurrencyReducer.old_currency)

  const newCurrency = useSelector((state) => state.newCurrencyReducer.new_currency)

  const defaultRate = useSelector((state) => state.ratesReducer.defaultRate)

  const defaultTitle = useSelector((state) => state.ratesReducer.defaultTitle)

  const convertedTitle = useSelector((state) => state.ratesReducer.convertedTitle)

  const convertedRate = useSelector((state) => state.ratesReducer.convertedRate)

const data = {
    labels: [`${oldCurrency}(valued in ${newCurrency})`, `${newCurrency}(valued in ${oldCurrency})`],
    datasets: [
      {
        label: 'Currency Rate(s)',
        data: [oldCurrency, newCurrency],
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
 dispatch(fetchRates(oldCurrency, newCurrency))
}, [dispatch, newCurrency, oldCurrency])

    function selectOldCurrency(e) {
      const value = e.target.value
      const name = e.target.name
      dispatch({ type: "CHANGE_OLD", payload: { [name]: value } })
  }

  function selectNewCurrency(e) {
      const value = e.target.value
      const name = e.target.name
      dispatch({ type: "CHANGE_NEW", payload: { [name]: value } })
  }

    return (
      <div>
          <div>
            <Nav />
              { /* React Charts JS Examples */}
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", minHeight: "100vh"}}>
              <div style={{width: "35%", color: "#ffffff", textAlign: "center"}}>
              {defaultRate && convertedRate && <Pie data={data} />}
              <p style={{marginTop: "50px"}}>
              {defaultRate >= convertedRate ? <strong>{oldCurrency}({defaultTitle}) is worth {defaultRate} in {convertedRate}({newCurrency})</strong> : <strong>{convertedTitle}({newCurrency}) is worth {convertedRate} in {defaultRate}({oldCurrency})</strong>}
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