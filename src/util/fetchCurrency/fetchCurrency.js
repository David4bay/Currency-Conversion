/* eslint-disable no-undef */
import axios from 'axios'

export const fetchCurrency = (value, oldCurrency, newCurrency, newActive, oldActive) => async dispatch => {

try {
  const data = await axios.get(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency`, {
      method: 'get',
      params: {
        have: oldCurrency,
        want: newCurrency,
        amount: value
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
        'X-RapidAPI-Host': `${import.meta.env.VITE_API_KEY2}`
    },
    })

    const response = await data.data
  console.log("response", response)
    if (response && newActive) { 
       dispatch(
        {
          type: "RESULT_NEW",
          payload: {
          currency_payload: response.new_amount,
          new_currencySymbol_payload: response.new_currency
        }
      })
       dispatch({type: "DONE_NEW"})
    }

      if (response && oldActive) {
         dispatch(
          {
            type: "RESULT_OLD",
            payload: {
            currency_payload: response.new_amount, 
            old_currencySymbol_payload: response.new_currency
          }
        })
         dispatch({type: "DONE_OLD"})
    }

} catch(err) {
  console.error(err)
}
}

/* 
// will be used when api rate limit is dropped
const options = {
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    params: {
      have: oldCurrency,
      want: newCurrency,
      amount: value
    },
    headers: {
      'X-RapidAPI-Key': '2fbd437326mshe1b848dbb10ad9cp1036a8jsndd2700e4a42d',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
  }
    
  let response = await axios.request(options)

*/