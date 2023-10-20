import axios from 'axios'

export const fetchCurrency = (value, oldCurrency, newCurrency, newActive, oldActive) => async dispatch => {

try {
  const data = await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${oldCurrency}&amount=${value}`, {
      method: 'get',
      headers: {
        'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
    },
    })
    console.log(data)
    const response = await data.data
    console.log(response)
    console.log(response, newActive, oldActive)

    if (response && newActive) { 
      await dispatch(
        {
          type: "RESULT_NEW",
          payload: {
          currency_payload: response.new_amount,
          new_currencySymbol_payload: response.new_currency
        }
      })
      return await dispatch({type: "DONE_NEW"})
    }

      if (response && oldActive) {
        await dispatch(
          {
            type: "RESULT_OLD",
            payload: {
            currency_payload: response.new_amount, 
            old_currencySymbol_payload: response.new_currency
          }
        })
        return await dispatch({type: "DONE_OLD"})
    }

} catch(err) {
  console.error(err)
}
}