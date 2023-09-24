/* eslint-disable react/prop-types */
import {
    CurrencyInput,
} from '../../styles/BodyUtil'
import { useDispatch } from "react-redux"

const ConvertedCurrency = ({newAmount}) => {

    const dispatch = useDispatch()

    const handleInput = (e) => {
        const name = e.target.name
        const value = Number(e.target.value) || 0
        dispatch({type: "CHANGE", [name]: value})
    }

    return (
        <CurrencyInput type="number" name="new_amount" id="convertedTypeAmount"
        value={newAmount || ""}
        placeholder="0"
        onChange={handleInput}
        min={0}
        max={999999}
        step={0.5}
        />
    )
}

export default ConvertedCurrency