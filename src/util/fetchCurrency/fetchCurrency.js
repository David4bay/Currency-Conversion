export const fetchCurrency = async (value, oldCurrency, newCurrency, converted) => async dispatch => {

        const data = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${oldCurrency}&amount=${value}`, {
            method: 'get',
            headers: {
              'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
          },
          })

        const response = await data.json()

        if (response) {
          await dispatch({type: "RESOLVED"})
          switch(converted) {
            case true:
            await dispatch({
              type: "FETCH_CONVERTED",
              payload: {
              payload_amount: response.new_amount,
              payload_currency: response.new_currency
              }
              })
              break;
            case false:
            await dispatch({
              type: "FETCH_DEFAULT",
              payload: {
              payload_amount: response.new_amount,
              payload_currency: response.new_currency
              }
            })
            break;
          }
        }
}