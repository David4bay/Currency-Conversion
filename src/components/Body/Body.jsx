/* eslint-disable react/prop-types */

import DefaultResetButton from 
'../../util/FormElements/Buttons/DefaultResetButton'
import SwapButton from 
'../../util/FormElements/Buttons/SwapButton'
import ConvertedAmountLabel from 
'../../util/FormElements/ConvertedAmountLabel/ConvertedAmountLabel'
import DefaultCurrency from 
'../../util/FormElements/DefaultCurrency/DefaultCurrency'
import DefaultLabel from 
'../../util/FormElements/DefaultLabels/Label'
import ConvertedCurrency from 
'../../util/FormElements/ConvertedCurrency/ConvertedCurrency'

import {
    FormElement,
    Legend,
    FirstFieldSet,
    SecondFieldSet,
    ThirdFieldSet,
    Select,
    Option,
} from '../../util/styles/BodyUtil'
import currencySymbols from '../../util/CurrencySymbols/currencySymbols'


function Body({currency, swapCurrencies, changeCurrencyHandler, convertedNumber, defaultNumber}) {

    return (
        <FormElement>
                <Legend>Swap and Compare Currency</Legend>
            <FirstFieldSet>
                <DefaultLabel 
                defaultNumber={defaultNumber} 
                currency={currency} />
                <DefaultCurrency 
                currency={currency} 
                changeCurrencyHandler={changeCurrencyHandler} />
            </FirstFieldSet>
            <SecondFieldSet>
                <span style={{display: "flex", width: "max-content", margin: "auto", gap: "15px"}}>
                <Select value="USD" onChange={(e) => e.target.value}>
                        {currencySymbols.map((symbol) => (
                            <Option key={symbol} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                <Select value="NGN" onChange={(e) => e.target.value}>
                        {currencySymbols.map((symbol) => (
                            <Option key={symbol} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                </span>
                <SwapButton 
                currency={currency} 
                swapCurrencies={swapCurrencies} />
                <DefaultResetButton />
            </SecondFieldSet>
            <ThirdFieldSet>
                <ConvertedAmountLabel 
                convertedNumber={convertedNumber} 
                currency={currency} />
                <ConvertedCurrency 
                currency={currency} 
                changeCurrencyHandler={changeCurrencyHandler} />
            </ThirdFieldSet>
        </FormElement>
    )
}


export default Body