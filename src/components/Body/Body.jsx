import { useState } from 'react';
import {
    FormElement,
    Legend,
    FirstFieldSet,
    SecondFieldSet,
    ConvertTitle,
    CurrencyInput,
    SwapCurrencyButton,
    ResetButton
} from '../../util/BodyUtil';

function Body() {

    const [currency, setCurrency] = useState({
        defaultType: 'USD',
        defaultTypeAmount: 0,
        convertedType: 'EUR',
        convertedTypeAmount: 0
    })

    const changeCurrencyHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setCurrency({ ...currency, [name]: value })

        if (currency.defaultTypeAmount.length > 20 || currency.convertedTypeAmount.length > 20) 
            {setCurrency({...currency, [name]: value.slice(0, 20)})}
    }

    return (
        <FormElement>
            <Legend>Swap and Compare Currencies</Legend>
            <FirstFieldSet>
            <label htmlFor="startingCurrency">
                <ConvertTitle>Convert from</ConvertTitle> {currency.defaultTypeAmount.toLocaleString({
                style: "currency",
                currency: currency.defaultType
            })}
            </label>
            <CurrencyInput type="number" name="defaultTypeAmount" id="defaultTypeAmount" 
            value={currency.defaultTypeAmount}
            onChange={changeCurrencyHandler}
            min={0}
            />
            </FirstFieldSet>
            <SecondFieldSet>
            <label htmlFor="convertedCurrency">
                <ConvertTitle>Convert to</ConvertTitle> {currency.convertedTypeAmount.toLocaleString({
                    style: "currency",
                    currency: currency.convertedType
                })}
            </label>
            <CurrencyInput type="number" name="convertedTypeAmount" id="convertedTypeAmount"
            value={currency.convertedTypeAmount}
            onChange={changeCurrencyHandler}
            min={0}
            />
            </SecondFieldSet>
            <SwapCurrencyButton>
                Swap {currency.defaultType}/{currency.convertedType}
            </SwapCurrencyButton>
            <ResetButton>
                Reset Currencies
            </ResetButton>
        </FormElement>
    )
}


export default Body;