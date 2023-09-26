import {
    ResetButton,
} from '../../styles/BodyUtil';
import {useDispatch} from "react-redux"

const DefaultResetButton = () => {

    const dispatch = useDispatch()

    const resetCurrencies = () => {
        dispatch({type: "RESET"})
    }

    return (
        <ResetButton onClick={resetCurrencies}>
        Reset Currencies
        </ResetButton> 
    )
}

export default DefaultResetButton;