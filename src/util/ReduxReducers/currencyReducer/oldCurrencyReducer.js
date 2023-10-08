const FETCH_OLD = "FETCH_OLD"
const LOADING_FROM_OLD = "LOADING_FROM_OLD"
const RESET = "RESET"
const CHANGE_OLD = "CHANGE_OLD"
const DONE_OLD = "DONE_OLD"
const SWAP_OLD = "SWAP_OLD"

const initialState = {
    old_currency : "USD",
    old_amount: 0,
    old_loading: false,
}

const oldCurrencyReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case FETCH_OLD:
        return {
            ...state, 
            ...action.payload,
        }

        case RESET:
        return {
            ...initialState
        }

        case LOADING_FROM_OLD:
        return {
            ...state, old_loading: true
        }

        case CHANGE_OLD:
        return {
            ...state, 
            ...action.payload,
        }

        case DONE_OLD:
        return {
            ...state, old_loading: false
        }

        case SWAP_OLD:
        return {
            ...state, ...action.payload
        }

        default:
        return state
    }
}

export default oldCurrencyReducer