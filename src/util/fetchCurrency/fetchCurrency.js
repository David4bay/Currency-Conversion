export const fetchCurrency = (value, oldCurrency, newCurrency) => async dispatch => {
    console.log(oldCurrency, newCurrency, value)
        const data = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${oldCurrency}&amount=${value}`, {
            method: 'get',
            headers: {
              'X-Api-Key': `${import.meta.env.VITE_API_KEY}`
          },
          })
        const response = await data.json()
        console.log(response)
        dispatch({type: "FETCH", ...response})
}