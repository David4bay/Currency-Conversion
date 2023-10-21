/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    CurrencyInput,
} from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import { useDispatch } from "react-redux"
import debounce from 'lodash.debounce'

const ConvertedCurrency = ({newAmount, newCurrency, oldCurrency}) => {
    
    const dispatch = useDispatch()

    const handleNewCall = (value) => {
        let olderCurrency = newCurrency
        let newerCurrency = oldCurrency
        let newActive
        let oldActive
        return debounce((dispatch(fetchCurrency(value, olderCurrency, newerCurrency, newActive = true, oldActive = false))), 900, {leading:false, trailing:true})
    }

    const callForData = (value) => {
        dispatch({ type: "LOADING_FROM_NEW" })
        dispatch({ type: "OLD_INACTIVE" })
        return handleNewCall(value)
      }

    const handleNewCurrencyInput = (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CHANGE_NEW", payload:{[name]: value}})
        return callForData(value)
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