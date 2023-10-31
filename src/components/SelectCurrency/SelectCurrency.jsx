/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react'
import {
    Select,
    Option,
    Span,
} from '../../util/styles/BodyUtil'

import { useDispatch } from 'react-redux'

function SelectCurrency({oldCurrency, newCurrency, currencyNames, selectOldCurrency, selectNewCurrency, currencySymbols}) {
    
    const dispatch = useDispatch()

    const defaultCurrencyTitleRef = useRef(null)

    const convertedCurrencyTitleRef = useRef(null)

    useEffect(() => {

        let defaultIndex = 0
        let convertedIndex = 0

        for (const item of currencySymbols) {
            if (item === oldCurrency) {
                break;
            }
            defaultIndex++
        }

        for (const item of currencySymbols) {
            if (item === newCurrency) {
                break;
            }
            convertedIndex++
        }

        let defaultCurrencyName = currencyNames.filter((name, idx) => idx === defaultIndex)

        let convertedCurrencyName = currencyNames.filter((name, idx) => idx === convertedIndex)

        dispatch({type: "OLD_TITLE_LOADED", payload: defaultCurrencyName[0]})

        dispatch({type: "NEW_TITLE_LOADED", payload: convertedCurrencyName[0]})

        console.log(defaultCurrencyName[0])
        
        console.log(convertedCurrencyName[0])

    }, [currencyNames, currencySymbols, dispatch, newCurrency, oldCurrency])

    return (
        <Span>
                <Select value={oldCurrency} onChange={selectOldCurrency} name="old_currency">
                        {currencySymbols.map((symbol, idx) => (
                            <React.Fragment key={symbol}>
                            <Option ref={defaultCurrencyTitleRef} title={currencyNames[idx]} value={symbol}>{symbol}</Option>
                            </React.Fragment>
                        ))}
                </Select>
                <Select value={newCurrency} onChange={selectNewCurrency} name="new_currency">
                        {currencySymbols.map((symbol, idx) => (
                            <React.Fragment key={symbol}>
                            <Option ref={convertedCurrencyTitleRef} title={currencyNames[idx]} value={symbol}>{symbol}</Option>
                            </React.Fragment>
                        ))}
                </Select>
        </Span>
    )
}

export default SelectCurrency