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
import { useSelector, useDispatch } from "react-redux"

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
import currencyNames from '../../util/CurrencyNames/currencyNames'

function Body() {

    const oldCurrency = useSelector((state) => state.currencyReducer.old_currency)

    const oldAmount = useSelector((state) => state.currencyReducer.old_amount)

    const newCurrency = useSelector((state) => state.currencyReducer.new_currency)

    const newAmount = useSelector((state) => state.currencyReducer.new_amount)

    const defaultState = useSelector((state) => state.currencyReducer.default)

    const defaultInputActive = useSelector((state) => state.currencyReducer.defaultInputActive)

    const activeInput = useSelector((state) => state.currencyReducer.activeInput)

    const loading = useSelector((state) => state.payloadReducer.loading)

    const dispatch = useDispatch()

    function selectCurrency(e) {
        const value = e.target.value
        const name = e.target.name
        dispatch({ type: "CHANGE", [name]: value})
    }

    return (
        <>
        {loading ? <h2 style={{textAlign: "center", color: "#3afeec"}}>Loading...</h2> : ""}
        <FormElement>
                <Legend>Swap and Compare Currency</Legend>
            <FirstFieldSet>
                <DefaultLabel 
                oldCurrency={oldCurrency}
                oldAmount={oldAmount}
                />
                <DefaultCurrency 
                activeInput={activeInput}
                defaultState={defaultState}
                oldCurrency={oldCurrency}
                newCurrency={newCurrency}
                oldAmount={oldAmount}
                newAmount={newAmount}
                />
            </FirstFieldSet>
            <SecondFieldSet>
                <Span>
                <Select value={oldCurrency} onChange={selectCurrency} name="old_currency">
                        {currencySymbols.map((symbol, idx) => (
                            <Option key={symbol} title={currencyNames[idx]} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                <Select value={newCurrency} onChange={selectCurrency} name="new_currency">
                        {currencySymbols.map((symbol, idx) => (
                            <Option key={symbol} title={currencyNames[idx]} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                </Span>
                <SwapButton 
                defaultState={defaultState}
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
                defaultInputActive={defaultInputActive}
                newCurrency={newCurrency}
                oldAmount={oldAmount}
                oldCurrency={oldCurrency}
                />
            </ThirdFieldSet>
        </FormElement>
        </>
    )
}


export default Body