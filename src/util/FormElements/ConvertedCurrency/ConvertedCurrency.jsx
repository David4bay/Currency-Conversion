/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    CurrencyInput,
} from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import { useDispatch } from "react-redux"
import { useCallback, useRef } from 'react'
import throttle from 'lodash.throttle'

const ConvertedCurrency = ({oldAmount, newAmount, newCurrency, oldCurrency, swapRef, convertedInputRef}) => {
    
    const dispatch = useDispatch()

    const debouncedCall = () => {
        let olderCurrency = newCurrency
        let newerCurrency = oldCurrency
        let value = convertedInputRef.current.value || 0
        let newActive
        let oldActive
        dispatch(fetchCurrency(value, olderCurrency, newerCurrency, newActive = true, oldActive = false))
    }
    let delayCall 
    const handleNewCurrencyInput = useCallback((e) => {
        dispatch({ type: "CLEAR_OLD_AMOUNT" })
        swapRef.current = true
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CHANGE_NEW", payload:{[name]: value}})
        dispatch({ type: "LOADING_FROM_NEW" })
        dispatch({ type: "OLD_INACTIVE" })
        delayCall = throttle(debouncedCall, 100)
        delayCall()
    }, [debouncedCall, dispatch, swapRef])

    return (
        <CurrencyInput ref={convertedInputRef} type="number" name="new_amount" id="convertedTypeAmount"
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