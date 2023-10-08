export const fetchCurrency = async (value, oldCurrency, newCurrency, newActive, oldActive) => async dispatch => {

        const data = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${oldCurrency}&amount=${value}`, {
            method: 'get',
            headers: {
              'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
          },
          })

        const response = await data.json()
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
          await dispatch({type: "DONE_NEW"})
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
            await dispatch({type: "DONE_OLD"})
        }
}