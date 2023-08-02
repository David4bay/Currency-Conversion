import styled from 'styled-components';
import { useState } from 'react';

    const FormElement = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: repeat(auto, 5fr);
        width: 900px;
        place-items: center;
        margin: auto;
        align-items: start;
        margin-top: 15px;
    `

    const Legend = styled.legend`
        color: #ffffff;
        letter-spacing: 1px;
        text-transform: Capitalize;
        font-style: Verdana, Tahoma, sans-serif;
        font-weight: 600;
        font-size: clamp(1vw, 20px, 22px);
        text-align: center;
        padding: 50px;
        grid-row: 1/2;
        grid-column: 1/3;
        height: max-content;
    `

    const FirstFieldSet = styled.fieldset`
        color: #ffffff;
        letter-spacing: 1px;
        border: none;
        text-transform: Capitalize;
        font-style: Verdana, Tahoma, sans-serif;
        font-weight: 600;
        font-size: clamp(1vw, 20px, 22px);
        text-align: center;
        padding: 10px;
        display: grid;
        grid-rows: 2/3;
        text-align: center;
    `

    const SecondFieldSet = styled.fieldset`
        color: #ffffff;
        letter-spacing: 1px;
        border: none;
        text-transform: Capitalize;
        font-style: Verdana, Tahoma, sans-serif;
        font-weight: 600;
        font-size: clamp(1vw, 20px, 22px);
        text-align: center;
        padding: 10px;
        display: grid;
        grid-rows: 2/3;
    `

    const ConvertTitle = styled.span`
        display: block;
    `

    const CurrencyInput = styled.input`

    `

    const SwapCurrencyButton = styled.button`
        border: 3px solid #fff;
        padding: 10px;
        background-color: hsla(0, 0%, 0%, 0.15);
        backdrop-filter: blur(5px);
    `

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
        setCurrency({
            ...currency,
            [name]: value
        })

        // if (currency.defaultTypeAmount < 1 || currency.convertedTypeAmount < 1) 
        //     {setCurrency({...currency, [name]: 0})}

        if (currency.defaultTypeAmount.length > 5 || currency.convertedTypeAmount.length > 5) 
            {setCurrency({...currency, [name]: value.slice(0, 6)})}
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
            />
            </SecondFieldSet>
            <button>
                Swap {currency.defaultType}/{currency.convertedType}
            </button>
            <button>
                Reset Currencies
            </button>
        </FormElement>
    )
}


export default Body;