import axios from 'axios'

export const fetchRates = (oldCurrency, newCurrency) => async dispatch => {
  const defaultAmount = await axios.get(`https://api.api-ninjas.com/v1/exchangerate?pair=${oldCurrency}_${newCurrency}`, {
        method: 'get',
        headers: {
          'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
      }
})

await dispatch({type: "OLD_RATES_LOADED", payload: defaultAmount.data.exchange_rate})

  const convertedAmount = await axios.get(`https://api.api-ninjas.com/v1/exchangerate?pair=${newCurrency}_${oldCurrency}`, {
    method: 'get',
    headers: {
        'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
    }
})

await dispatch({type: "NEW_RATES_LOADED", payload: convertedAmount.data.exchange_rate})
}