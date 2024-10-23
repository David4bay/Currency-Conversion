import { ChartContainer, ChartWrapper, Paragraph, SelectCurrencyContainer, StrongText
} from "../../util/styles/chartStyles"

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

import chartDataHandler from '../../util/chartDataHander/chartDataHandler'

ChartJS.register(ArcElement, Tooltip, Legend);

function RateBody() {

  const dispatch = useDispatch()

  const oldCurrency = useSelector((state) => state.oldCurrencyReducer.old_currency)

  const newCurrency = useSelector((state) => state.newCurrencyReducer.new_currency)

  const defaultRate = useSelector((state) => state.ratesReducer.defaultRate)

  const defaultTitle = useSelector((state) => state.ratesReducer.defaultTitle)

  const convertedTitle = useSelector((state) => state.ratesReducer.convertedTitle)

  const convertedRate = useSelector((state) => state.ratesReducer.convertedRate)

  const data = chartDataHandler(defaultTitle, convertedTitle, defaultRate, convertedRate)

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
              <ChartWrapper style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", minHeight: "30vh"}}>
                <ChartContainer>
                {defaultRate && convertedRate && <Pie data={data} />}
                  <Paragraph>
                    {defaultRate >= convertedRate ? 
                    <StrongText>
                      {defaultTitle} ({oldCurrency}) is worth {defaultRate?.toLocaleString("en-US", {
                      style: "currency",
                      currency: newCurrency
                    })} in {convertedTitle}
                    </StrongText> 
                    : 
                    <StrongText>
                      {convertedTitle} ({newCurrency}) is worth {convertedRate?.toLocaleString("en-US", {
                      style: "currency",
                      currency: oldCurrency
                    })} in {defaultTitle}
                    </StrongText>
                    }
                  </Paragraph>
                </ChartContainer>
                <SelectCurrencyContainer>
                  <SelectCurrency
                  oldCurrency={oldCurrency}
                  newCurrency={newCurrency}
                  currencyNames={currencyNames}
                  selectOldCurrency={selectOldCurrency}
                  selectNewCurrency={selectNewCurrency}
                  currencySymbols={currencySymbols}
                  />
                </SelectCurrencyContainer>
              </ChartWrapper>
              </div>
          <Footer />
        </div>
    )
}

export default RateBody;