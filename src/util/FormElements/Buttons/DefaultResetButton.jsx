/* eslint-disable react/prop-types */
import {
    ResetButton,
} from '../../styles/BodyUtil';
import {useDispatch} from "react-redux"

const DefaultResetButton = ({swapRef}) => {

    const dispatch = useDispatch()

    const resetCurrencies = () => {
        swapRef.current = true
        dispatch({type: "RESET"})
    }

    return (
        <ResetButton onClick={resetCurrencies}>
        Reset Currencies
        </ResetButton> 
    )
}

export default DefaultResetButton;