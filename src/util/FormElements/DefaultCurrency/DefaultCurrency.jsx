/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { CurrencyInput } from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'

import debounce from "lodash.debounce"

const DefaultCurrency = ({oldAmount, oldCurrency, newCurrency}) => {

    const dispatch = useDispatch()

    const handleOldCall = (value) => {
        let olderCurrency = oldCurrency
        let newerCurrency = newCurrency
        let newActive
        let oldActive
        try {
            return dispatch(debounce(fetchCurrency(value, olderCurrency, newerCurrency, newActive = false, oldActive = true)), 900, { leading: false, trailing: true })
        } catch(err) {
            console.clear(err)
        }
    }

    const callForData = (value) => {
        dispatch({ type: "LOADING_FROM_OLD" })
        dispatch({ type: "NEW_INACTIVE" })
        return handleOldCall(value)
    }
    
    const handleOldCurrencyInput = (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CHANGE_OLD", payload:{[name]: value}})
        return callForData(value)
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