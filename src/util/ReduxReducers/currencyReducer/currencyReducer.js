const FOCUS = "FOCUS"
const FETCH = "FETCH"
const RESET = "RESET"
const CHANGE = "CHANGE"
const SWAP = "SWAP"
const UNFOCUS = "UNFOCUS"

const initialState = {
    old_currency : "USD",
    old_amount: 0,
    new_currency: "NGN",
    new_amount: 0,
    default: true,
    defaultInputActive: true,
}

const currencyReducer = (state = initialState, action) => {
    switch(action.type) {

        case FOCUS:
        return {
            ...state,
            defaultInputActive: false,
        };

        case UNFOCUS:
        return {
            ...state,
            defaultInputActive: true,
        }

        case FETCH:
        return {
            ...state, 
            ...action,
        };

        case RESET:
        return {
            ...state
        };

        case CHANGE:
        return {
            ...state, 
            ...action,
        };

        case SWAP:
        return {
            ...state, 
            old_currency: state.new_currency, 
            old_amount: state.new_amount,  
            new_currency: state.old_currency,
            new_amount: state.old_amount,
        }

        default:
        return state;
    }
}

export default currencyReducer