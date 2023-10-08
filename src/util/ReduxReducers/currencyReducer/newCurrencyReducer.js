const FETCH_NEW = "FETCH_NEW"
const LOADING_FROM_NEW = "LOADING_FROM_NEW"
const RESET = "RESET"
const CHANGE_NEW = "CHANGE_NEW"
const DONE_NEW = "DONE_NEW"
const SWAP_NEW = "SWAP_NEW"

const initialState = {
    new_currency : "NGN",
    new_amount: 0,
    new_loading: false,
}

const newCurrencyReducer = (state = initialState, action) => {

    switch(action.type) {

        case FETCH_NEW:
        return {
            ...state, 
            ...action.payload,
        }

        case RESET:
        return {
            ...initialState,
        }

        case LOADING_FROM_NEW:
        return {
            ...state, new_loading: true,
        }

        case CHANGE_NEW:
        return {
            ...state, 
            ...action.payload,
        }

        case DONE_NEW:
        return {
            ...state, new_loading: false
        }

        case SWAP_NEW:
        return {
            ...state, ...action.payload
        }

        default:
        return state
    }
}

export default newCurrencyReducer