/* eslint-disable react/prop-types */
import {
    CurrencyInput,
} from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import { useSelector, useDispatch } from "react-redux"
import { useRef } from "react"
import debounce from 'lodash.debounce'

const ConvertedCurrency = ({newAmount, newCurrency, oldCurrency}) => {

    const converted = useSelector((state) => state.payloadReducer.converted)

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const callForData = debounce((value) => {
        let olderCurrency = newCurrency
        let newerCurrency = oldCurrency
        dispatch({type: "LOADING"})
        dispatch(fetchCurrency(value, olderCurrency, newerCurrency, converted))
      }, 100)

    const handleInput = (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CONVERT"})
        dispatch({type: "CHANGE", [name]: value})
        return callForData(value)
    }

    return (
        <CurrencyInput ref={inputRef} type="number" name="new_amount" id="convertedTypeAmount"
        value={!converted ? "" : newAmount || ""}
        placeholder="0"
        onChange={handleInput}
        min={0}
        max={999999}
        step={0.5}
        />
    )
}

export default ConvertedCurrency