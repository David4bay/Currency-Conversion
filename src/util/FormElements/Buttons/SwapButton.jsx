/* eslint-disable react/prop-types */
import {
    SwapCurrencyButton,
    SwapCurrencyText
} from '../../styles/BodyUtil'
import {useDispatch} from "react-redux"

const SwapButton = ({oldCurrency, newCurrency}) => {

    const dispatch = useDispatch()

    const swapCurrency = () => {
        dispatch({type: "SWAP"})
    }

    return (
    <SwapCurrencyButton onClick={swapCurrency} >
    Swap <SwapCurrencyText>{oldCurrency}</SwapCurrencyText>/<SwapCurrencyText>{newCurrency}</SwapCurrencyText>
    </SwapCurrencyButton>
)
    }

export default SwapButton