/* eslint-disable react/prop-types */
import {
    CurrencyInput,
} from '../../styles/BodyUtil';

const ConvertedCurrency = ({currency, changeCurrencyHandler}) => {
    return (
        <CurrencyInput type="number" name="convertedTypeAmount" id="convertedTypeAmount"
        value={currency.convertedTypeAmount || ""}
        placeholder="0"
        onChange={changeCurrencyHandler}
        min={0}
        max={999999}
        step={0.5}
        />
    )
}

export default ConvertedCurrency;