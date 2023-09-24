/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
    FormElement,
    Legend,
    FirstFieldSet,
    SecondFieldSet,
    ThirdFieldSet,
    Select,
    Option,
    Span,
} from '../../util/styles/BodyUtil'

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
import currencySymbols from 
'../../util/CurrencySymbols/currencySymbols'
import { useSelector, useDispatch } from "react-redux"

function Body() {

    const oldCurrency = useSelector((state) => state.old_currency)
    const oldAmount = useSelector((state) => state.old_amount)
    const newCurrency = useSelector((state) => state.new_currency)
    const newAmount = useSelector((state) => state.new_amount)
    const dispatch = useDispatch()

    function selectCurrency(e) {
        const value = e.target.value
        const name = e.target.name
        dispatch({ type: "CHANGE", [name]: value})
    }

    return (
        <FormElement>
                <Legend>Swap and Compare Currency</Legend>
            <FirstFieldSet>
                <DefaultLabel 
                oldCurrency={oldCurrency}
                oldAmount={oldAmount}
                />
                <DefaultCurrency 
                oldCurrency={oldCurrency}
                oldAmount={oldAmount}
                />
            </FirstFieldSet>
            <SecondFieldSet>
                <Span>
                <Select value={oldCurrency} onChange={selectCurrency} name="old_currency">
                        {currencySymbols.map((symbol) => (
                            <Option key={symbol} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                <Select value={newCurrency} onChange={selectCurrency} name="new_currency">
                        {currencySymbols.map((symbol) => (
                            <Option key={symbol} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                </Span>
                <SwapButton 
                oldCurrency={oldCurrency}
                newCurrency={newCurrency}
                />
                <DefaultResetButton />
            </SecondFieldSet>
            <ThirdFieldSet>
                <ConvertedAmountLabel 
                newCurrency={newCurrency}
                newAmount={newAmount}
                />
                <ConvertedCurrency 
                newCurrency={newCurrency}
                newAmount={newAmount}
                />
            </ThirdFieldSet>
        </FormElement>
    )
}


export default Body