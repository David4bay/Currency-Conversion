/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    CurrencyInput,
} from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import { useDispatch } from "react-redux"
// import throttle from 'lodash.throttle'

const ConvertedCurrency = ({newAmount, newCurrency, oldCurrency}) => {
    
    const dispatch = useDispatch()

    const handleNewCall = async (value) => async dispatch => {
        let olderCurrency = newCurrency
        let newerCurrency = oldCurrency
        let newActive
        let oldActive
        dispatch(await fetchCurrency(value, olderCurrency, newerCurrency, newActive = true, oldActive = false))
    }

    const callForData = async (value) => {
        dispatch({ type: "LOADING_FROM_NEW" })
        dispatch({ type: "OLD_INACTIVE" })
        dispatch(await handleNewCall(value))
      }

    const handleNewCurrencyInput = async (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CHANGE_NEW", payload:{[name]: value}})
        await callForData(value)
    }

    return (
        <CurrencyInput type="number" name="new_amount" id="convertedTypeAmount"
        value={newAmount || ""}
        placeholder="0"
        onChange={handleNewCurrencyInput}
        min={0}
        max={999999}
        step={0.5}
        />
    )
}

export default ConvertedCurrency