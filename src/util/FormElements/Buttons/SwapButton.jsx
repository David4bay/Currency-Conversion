/* eslint-disable react/prop-types */
import {
    SwapCurrencyButton,
    SwapCurrencyText
} from '../../styles/BodyUtil';

const SwapButton = ({currency, swapCurrencies}) => {
    return (
    <SwapCurrencyButton onClick={swapCurrencies}>
    Swap <SwapCurrencyText>{currency.defaultType}</SwapCurrencyText>/<SwapCurrencyText>{currency.convertedType}</SwapCurrencyText>
    </SwapCurrencyButton>
)
    }

export default SwapButton;