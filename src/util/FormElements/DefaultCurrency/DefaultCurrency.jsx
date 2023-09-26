/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux"
import { CurrencyInput } from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import debounce from 'lodash.debounce'

const DefaultCurrency = ({oldAmount, oldCurrency, newCurrency}) => {

    const converted = useSelector((state) => state.payloadReducer.converted)

    const dispatch = useDispatch()

    const callForData = debounce((value) => {

      dispatch(fetchCurrency(value, oldCurrency, newCurrency, converted))
    }, 20)

    const handleInput = (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "LOADING"})
        dispatch({type: "UNCONVERT"})
        dispatch({type: "CHANGE", [name]: value})
        return callForData(value)
    }

    return (
        <CurrencyInput type="number" name="old_amount" id="defaultTypeAmount" 
                value={converted ? "" : oldAmount || ""}
                placeholder="0"
                onChange={handleInput} 
                min={0}
                max={999999}
                step={0.5}
                />
    )
}

export default DefaultCurrency