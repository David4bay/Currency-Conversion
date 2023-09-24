/* eslint-disable react/prop-types */
import {
    SwapCurrencyButton,
    SwapCurrencyText
} from '../../styles/BodyUtil'

const SwapButton = ({oldCurrency, newCurrency}) => {
    return (
    <SwapCurrencyButton /*onClick={} */>
    Swap <SwapCurrencyText>{oldCurrency}</SwapCurrencyText>/<SwapCurrencyText>{newCurrency}</SwapCurrencyText>
    </SwapCurrencyButton>
)
    }

export default SwapButton