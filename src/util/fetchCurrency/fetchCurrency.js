/* eslint-disable no-undef */
import axios from 'axios'

export const fetchCurrency = (value, oldCurrency, newCurrency, newActive, oldActive) => async dispatch => {
console.log("value", value, "oldCurrency", oldCurrency, "newCurrency", newCurrency, "newActive", newActive, "oldActive", oldActive)
try {
  const currencyInfo = await axios.get(`https://hexarate.paikama.co/api/rates/latest/${oldCurrency}?target=${newCurrency}`,
).catch((e) => {
    console.error(e)
    return
  })

    const response = await currencyInfo.data.data
  console.log("response from currency call", response)
    if (response && newActive) { 
       dispatch(
        {
          type: "RESULT_NEW",
          payload: {
          currency_payload: parseInt(response.mid * value, 10),
          new_currencySymbol_payload: response.target
        }
      })
       dispatch({type: "DONE_NEW"})
    }

      if (response && oldActive) {
         dispatch(
          {
            type: "RESULT_OLD",
            payload: {
            currency_payload: parseInt(response.mid * value, 10),
            old_currencySymbol_payload: response.target
          }
        })
         dispatch({type: "DONE_OLD"})
    }

} catch(err) {
  console.error(err)
}
}