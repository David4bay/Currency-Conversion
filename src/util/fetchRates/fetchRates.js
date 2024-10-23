import axios from 'axios'

export const fetchRates = (oldCurrency, newCurrency) => async dispatch => {

  const options1 = {
    method: 'GET',
    url: `https://hexarate.paikama.co/api/rates/latest/${oldCurrency}?target=${newCurrency}`
  };

  try {

    let defaultAmount = await axios.request(options1)
    console.log("defaultAmount", defaultAmount.data.data)
    defaultAmount = defaultAmount.data.data
    await dispatch({type: "OLD_RATES_LOADED", payload: { defaultRate: defaultAmount.mid, defaultTitle: defaultAmount.base, convertedTitle: defaultAmount.target }})

  } catch(err) {
    console.log(err)
  }

  const options2 = {
    method: 'GET',
    url: `https://hexarate.paikama.co/api/rates/latest/${newCurrency}?target=${oldCurrency}`
  };

  try {

    let convertedAmount = await axios.request(options2)
    console.log("convertedAmount", convertedAmount.data.data)
    convertedAmount = convertedAmount.data.data
    await dispatch({type: "NEW_RATES_LOADED", payload: { convertedRate: convertedAmount.mid}})

  } catch(err) {
    console.log(err)
  }

}