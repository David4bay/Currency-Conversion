/* eslint-disable react/prop-types */
import {
    CurrencyInput
} from '../../styles/BodyUtil';

const DefaultCurrency = ({currency, changeCurrencyHandler}) => {
    return (
        <CurrencyInput type="number" name="defaultTypeAmount" id="defaultTypeAmount" 
                value={currency.defaultTypeAmount || ""}
                placeholder="0"
                onChange={changeCurrencyHandler}
                min={0}
                max={999999}
                step={0.5}
                />
    )
}

export default DefaultCurrency;