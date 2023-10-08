/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

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

    const dispatch = useDispatch()
    
    const oldCurrency = useSelector((state) => state.oldCurrencyReducer.old_currency)

    const oldAmount = useSelector((state) => state.oldCurrencyReducer.old_amount)

    const newCurrency = useSelector((state) => state.newCurrencyReducer.new_currency)

    const newAmount = useSelector((state) => state.newCurrencyReducer.new_amount)

    const loadingFromOld = useSelector((state) => state.oldCurrencyReducer.old_loading)

    const loadingFromNew = useSelector((state) => state.newCurrencyReducer.new_loading)
    
    function selectOldCurrency(e) {
        const value = e.target.value
        const name = e.target.name
        dispatch({ type: "CHANGE_OLD", payload: { [name]: value } })
    }

    function selectNewCurrency(e) {
        const value = e.target.value
        const name = e.target.name
        dispatch({ type: "CHANGE_NEW", payload: { [name]: value } })
    }

    return (
        <>
        {loadingFromOld || loadingFromNew ? <h2 style={{textAlign: "center", color: "#3afeec"}}>Loading...</h2> : ""}
        <FormElement>
                <Legend>Swap and Compare Currency</Legend>
            <FirstFieldSet>
                <DefaultLabel 
                oldCurrency={oldCurrency}
                oldAmount={oldAmount}
                />
                <DefaultCurrency 
                oldCurrency={oldCurrency}
                newCurrency={newCurrency}
                oldAmount={oldAmount}
                />
            </FirstFieldSet>
            <SecondFieldSet>
                <Span>
                <Select value={oldCurrency} onChange={selectOldCurrency} name="old_currency">
                        {currencySymbols.map((symbol, idx) => (
                            <Option key={symbol} title={currencyNames[idx]} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                <Select value={newCurrency} onChange={selectNewCurrency} name="new_currency">
                        {currencySymbols.map((symbol, idx) => (
                            <Option key={symbol} title={currencyNames[idx]} value={symbol}>{symbol}</Option>
                        ))}
                </Select>
                </Span>
                <SwapButton 
                oldCurrency={oldCurrency}
                oldAmount={oldAmount}
                newAmount={newAmount}
                loadingFromOld={loadingFromOld}
                loadingFromNew={loadingFromNew}
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
                oldCurrency={oldCurrency}
                />
            </ThirdFieldSet>
        </FormElement>
        </>
    )
}


export default Body