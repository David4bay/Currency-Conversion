/* eslint-disable react/prop-types */
import {
    Select,
    Option,
    Span,
} from '../../util/styles/BodyUtil'

function SelectCurrency({oldCurrency, newCurrency, currencyNames, selectOldCurrency, selectNewCurrency, currencySymbols}) {
    return (
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
    )
}

export default SelectCurrency