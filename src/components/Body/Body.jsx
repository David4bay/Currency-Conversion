/* eslint-disable react/prop-types */

import DefaultResetButton from 
'../../util/FormElements/Buttons/DefaultResetButton';
import SwapButton from 
'../../util/FormElements/Buttons/SwapButton';
import ConvertedAmountLabel from 
'../../util/FormElements/ConvertedAmountLabel/ConvertedAmountLabel';
import DefaultCurrency from 
'../../util/FormElements/DefaultCurrency/DefaultCurrency';
import DefaultLabel from 
'../../util/FormElements/DefaultLabels/Label';
import ConvertedCurrency from 
'../../util/FormElements/ConvertedCurrency/ConvertedCurrency'

import {
    FormElement,
    Legend,
    FirstFieldSet,
    SecondFieldSet,
    ThirdFieldSet,
} from '../../util/styles/BodyUtil';


function Body({currency, swapCurrencies, changeCurrencyHandler, convertedNumber}) {

    return (
        <FormElement>
                <Legend>Swap and Compare Currency</Legend>
            <FirstFieldSet>
                <DefaultLabel currency={currency} />
                <DefaultCurrency currency={currency} changeCurrencyHandler={changeCurrencyHandler} />
            </FirstFieldSet>
            <SecondFieldSet>
                <SwapButton currency={currency} swapCurrencies={swapCurrencies} />
                <DefaultResetButton />
            </SecondFieldSet>
            <ThirdFieldSet>
                <ConvertedAmountLabel convertedNumber={convertedNumber} currency={currency} />
                <ConvertedCurrency currency={currency} changeCurrencyHandler={changeCurrencyHandler} />
            </ThirdFieldSet>
        </FormElement>
    )
}


export default Body;