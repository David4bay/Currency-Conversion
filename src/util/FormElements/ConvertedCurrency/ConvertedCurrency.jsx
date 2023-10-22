/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    CurrencyInput,
} from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import { useDispatch } from "react-redux"
import { useCallback, useRef } from 'react'
import debounce from 'lodash.debounce'

const ConvertedCurrency = ({newAmount, newCurrency, oldCurrency}) => {

    const inputRef = useRef(null)
    
    const dispatch = useDispatch()

    const debouncedCall = debounce(() => {
        let olderCurrency = newCurrency
        let newerCurrency = oldCurrency
        let value = inputRef.current.value || 0
        let newActive
        let oldActive
        dispatch(fetchCurrency(value, olderCurrency, newerCurrency, newActive = true, oldActive = false))
    }, 900, { leading: false, trailing: true})
    
    const handleNewCurrencyInput = useCallback((e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CHANGE_NEW", payload:{[name]: value}})
        dispatch({ type: "LOADING_FROM_NEW" })
        dispatch({ type: "OLD_INACTIVE" })
        debouncedCall()
    }, [debouncedCall, dispatch])

    return (
        <CurrencyInput ref={inputRef} type="number" name="new_amount" id="convertedTypeAmount"
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