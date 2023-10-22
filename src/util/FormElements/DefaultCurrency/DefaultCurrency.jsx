/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { CurrencyInput } from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import { useCallback, useRef } from 'react'
import debounce from "lodash.debounce"

const DefaultCurrency = ({oldAmount, oldCurrency, newCurrency}) => {

    const inputRef = useRef(null)

    const dispatch = useDispatch()

    const debouncedCall = debounce(() => {
        let olderCurrency = oldCurrency
        let newerCurrency = newCurrency
        let value = inputRef.current.value || 0
        let newActive
        let oldActive
        return dispatch(fetchCurrency(value, olderCurrency, newerCurrency, newActive = false, oldActive = true))
    }, 900, { leading: false, trailing: true })

    const handleOldCurrencyInput = useCallback((e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "CHANGE_OLD", payload:{[name]: value}})
        dispatch({ type: "LOADING_FROM_OLD" })
        dispatch({ type: "NEW_INACTIVE" })
        debouncedCall()
    }, [debouncedCall, dispatch])

    return (
        <CurrencyInput ref={inputRef} type="number" name="old_amount" id="defaultTypeAmount" 
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