export const fetchCurrency = (value, oldCurrency, newCurrency, converted) => async dispatch => {

        const data = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${oldCurrency}&amount=${value}`, {
            method: 'get',
            headers: {
              'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
          },
          })

        const response = await data.json()

        console.log(response)

        if (response) {
          dispatch({type: "RESOLVED"})
          switch(converted) {
            case true:
            return dispatch({
              type: "FETCH_CONVERTED",
              amount: response.new_amount,
              currency: response.new_currency
              })
            case false:
            return dispatch({
              type: "FETCH_DEFAULT",
              amount: response.new_amount,
              currency: response.new_currency
            })
          }

        }

}