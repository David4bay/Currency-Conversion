/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { CurrencyInput } from '../../styles/BodyUtil'
import { fetchCurrency } from '../../fetchCurrency/fetchCurrency'
import debounce from 'lodash.debounce'

const DefaultCurrency = ({oldAmount, oldCurrency, newCurrency}) => {

    const dispatch = useDispatch()

    const callForData = debounce((value) => {

      dispatch(fetchCurrency(value, oldCurrency, newCurrency))
    }, 700)

    const handleConvert = () => {
    }

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch({type: "CHANGE", [name]: value})
        callForData(value)
    }

    return (
        <CurrencyInput type="number" name="old_amount" id="defaultTypeAmount" 
                value={oldAmount || ""}
                placeholder="0"
                onClick={handleConvert}
                onChange={handleInput} 
                min={0}
                max={999999}
                step={0.5}
                />
    )
}

export default DefaultCurrency