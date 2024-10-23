/* eslint-disable react/prop-types */
import {useRef } from "react"

import {
    FormElement,
    Legend,
    FirstFieldSet,
    SecondFieldSet,
    ThirdFieldSet,
} from '../../util/styles/BodyUtil'

import { useSelector, useDispatch } from 
'react-redux'

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

import currencyNames from 
'../../util/CurrencyNames/currencyNames'

import SelectCurrency from 
'../SelectCurrency/SelectCurrency'

function Body() {

    const dispatch = useDispatch()

    const swapRef = useRef(true)

    const convertedInputRef = useRef(null)

    const defaultInputRef = useRef(null)
    
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
        {swapRef.current === true && loadingFromOld || swapRef.current === true && loadingFromNew ? <h2 style={{textAlign: "center", color: "#3afeec"}}>Loading...</h2> : ""}
        <FormElement>
                <Legend>Swap and Compare Currency</Legend>
            <FirstFieldSet>
                <DefaultLabel 
                oldCurrency={oldCurrency}
                oldAmount={oldAmount}
                />
                <DefaultCurrency 
                swapRef={swapRef}
                defaultInputRef={defaultInputRef}
                convertedInputRef={convertedInputRef}
                oldCurrency={oldCurrency}
                newCurrency={newCurrency}
                oldAmount={oldAmount}
                />
            </FirstFieldSet>
            <SecondFieldSet>
                <SelectCurrency 
                oldCurrency={oldCurrency}
                newCurrency={newCurrency}
                currencyNames={currencyNames}
                selectOldCurrency={selectOldCurrency}
                selectNewCurrency={selectNewCurrency}
                currencySymbols={currencySymbols}
                />
                <SwapButton
                swapRef={swapRef} 
                oldCurrency={oldCurrency}
                oldAmount={oldAmount}
                newAmount={newAmount}
                loadingFromOld={loadingFromOld}
                loadingFromNew={loadingFromNew}
                newCurrency={newCurrency}
                currencySymbols={currencySymbols}
                />
                <DefaultResetButton 
                swapRef={swapRef}
                />
            </SecondFieldSet>
            <ThirdFieldSet>
                <ConvertedAmountLabel 
                newCurrency={newCurrency}
                newAmount={newAmount}
                />
                <ConvertedCurrency 
                swapRef={swapRef}
                defaultInputRef={defaultInputRef}
                convertedInputRef={convertedInputRef}
                newCurrency={newCurrency}
                oldAmount={oldAmount}
                newAmount={newAmount}
                oldCurrency={oldCurrency}
                />
            </ThirdFieldSet>
        </FormElement>
        </>
    )
}


export default Body