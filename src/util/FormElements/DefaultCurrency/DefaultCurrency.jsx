/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux"
import { CurrencyInput } from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
// import throttle from "lodash.throttle"

const DefaultCurrency = ({oldAmount, oldCurrency, newCurrency}) => {

    const converted = useSelector((state) => state.payloadReducer.converted)

    const dispatch = useDispatch()

    const callForData = async (value) => {
      dispatch(await fetchCurrency(value, oldCurrency, newCurrency, converted))
    }

    const handleInput = async (e) => {
        const name = e.target.name
        const value = Number(e.target.value)
        dispatch({type: "LOADING"})
        dispatch({type: "UNCONVERT"})
        dispatch({type: "CHANGE", payload:{[name]: value}})
        await callForData(value)
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