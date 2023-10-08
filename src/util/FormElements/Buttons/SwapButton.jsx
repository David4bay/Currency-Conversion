/* eslint-disable react/prop-types */
import {
    SwapCurrencyButton,
    SwapCurrencyText
} from '../../styles/BodyUtil'
import {useDispatch} from "react-redux"

const SwapButton = ({
    oldCurrency, 
    newCurrency,
    oldAmount,
    newAmount,
    loadingFromOld,
    loadingFromNew}) => {

    const dispatch = useDispatch()

    const swapCurrency = () => {
        dispatch({type: "SWAP_OLD", payload: {
            old_currency: newCurrency,
            old_amount: newAmount,
            old_loading: loadingFromNew
        }})
        dispatch({type: "SWAP_NEW", payload: {
            new_currency: oldCurrency,
            new_amount: oldAmount,
            new_loading: loadingFromOld
        }})
    }

    return (
    <SwapCurrencyButton onClick={swapCurrency} >
    Swap <SwapCurrencyText>{oldCurrency}</SwapCurrencyText>/<SwapCurrencyText>{newCurrency}</SwapCurrencyText>
    </SwapCurrencyButton>
)
    }

export default SwapButton