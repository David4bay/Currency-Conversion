import axios from 'axios'

export const fetchRates = (oldCurrency, newCurrency) => async dispatch => {

  const options1 = {
    method: 'GET',
    url: 'https://exchange-rate-by-api-ninjas.p.rapidapi.com/v1/exchangerate',
    params: {pair: `${oldCurrency}_${newCurrency}`},
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
      'X-RapidAPI-Host': `${import.meta.env.VITE_API_KEY3}`
    }
  };

  try {

    const defaultAmount = await axios.request(options1)

    await dispatch({type: "OLD_RATES_LOADED", payload: defaultAmount.data.exchange_rate})

  } catch(err) {
    console.log(err)
  }

  const options2 = {
    method: 'GET',
    url: 'https://exchange-rate-by-api-ninjas.p.rapidapi.com/v1/exchangerate',
    params: {pair: `${newCurrency}_${oldCurrency}`},
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
      'X-RapidAPI-Host': `${import.meta.env.VITE_API_KEY3}`
    }
  };

  try {

    const convertedAmount = await axios.request(options2)
  
    await dispatch({type: "NEW_RATES_LOADED", payload: convertedAmount.data.exchange_rate})

  } catch(err) {
    console.log(err)
  }

}