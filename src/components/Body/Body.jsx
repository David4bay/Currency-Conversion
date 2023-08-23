import { useState } from 'react';
import {
    FormElement,
    Legend,
    FirstFieldSet,
    SecondFieldSet,
    ConvertTitle,
    CurrencyInput,
    SwapCurrencyButton,
    ResetButton,
    ThirdFieldSet
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
        const type = e.target.name === "defaultTypeAmount" ? currency.defaultType : currency.convertedType
        setCurrency({ ...currency, [name]: value.toLocaleString("en-US", { style: "currency", currency: type}) })

        // if (currency.defaultTypeAmount.length > 10 || currency.convertedTypeAmount.length > 10) 
        //     {setCurrency({...currency, [name]: value.slice(0, 10)})}
    }

    const swapCurrencies = () => {
        const defaultTypes = currency.defaultType;
        const defaultAmounts = currency.defaultTypeAmount;
        const convertedTypes = currency.convertedType;
        const convertedTypeAmounts = currency.convertedTypeAmount;

        setCurrency({
            ...currency, 
            defaultType: convertedTypes, 
            defaultTypeAmount: convertedTypeAmounts, 
            convertedType: defaultTypes, 
            convertedTypeAmount: defaultAmounts
        })
    }

    return (
        <FormElement>
                <Legend>Swap and Compare Currencies</Legend>
            <FirstFieldSet>
                <label htmlFor="startingCurrency">
                    <ConvertTitle>Convert from</ConvertTitle> {currency.defaultTypeAmount.toLocaleString("en-US",{
                    style: "currency",
                    currency: currency.defaultType
                }) || 0}
                </label>
                <CurrencyInput type="number" name="defaultTypeAmount" id="defaultTypeAmount" 
                value={currency.defaultTypeAmount}
                onChange={changeCurrencyHandler}
                min={0}
                max={999999}
                />
            </FirstFieldSet>
            <SecondFieldSet>
                <SwapCurrencyButton onClick={swapCurrencies}>
                    Swap {currency.defaultType}/{currency.convertedType}
                </SwapCurrencyButton>
                <ResetButton>
                    Reset Currencies
                </ResetButton>
            </SecondFieldSet>
            <ThirdFieldSet>
                <label htmlFor="convertedCurrency">
                    <ConvertTitle>Convert to</ConvertTitle> {currency.convertedTypeAmount.toLocaleString("en-US",{
                        style: "currency",
                        currency: currency.convertedType
                    }) || 0}
                </label>
                <CurrencyInput type="number" name="convertedTypeAmount" id="convertedTypeAmount"
                value={currency.convertedTypeAmount}
                onChange={changeCurrencyHandler}
                min={0}
                />
            </ThirdFieldSet>
        </FormElement>
    )
}


export default Body;