/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { CurrencyInput } from '../../styles/BodyUtil'

import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'

// import throttle from "lodash.throttle"

const DefaultCurrency = ({oldAmount, oldCurrency, newCurrency}) => {

    const dispatch = useDispatch()

    const handleOldCall = async (value) => async dispatch => {
        let olderCurrency = oldCurrency
        let newerCurrency = newCurrency
        let newActive
        let oldActive
        dispatch(await fetchCurrency(value, olderCurrency, newerCurrency, newActive = false, oldActive = true))
    }

    const callForData = async (value) => {
        dispatch({ type: "LOADING_FROM_OLD" })
        dispatch({ type: "NEW_INACTIVE" })
        dispatch(await handleOldCall(value))
    }
    
    const handleOldCurrencyInput = async (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CHANGE_OLD", payload:{[name]: value}})
        await callForData(value)
    }

    return (
        <CurrencyInput type="number" name="old_amount" id="defaultTypeAmount" 
                value={oldAmount || ""}
                placeholder="0"
                onChange={handleOldCurrencyInput} 
                min={0}
                max={999999}
                step={0.5}
                />
    )
}

export default DefaultCurrency