const FETCH_NEW = "FETCH_NEW"
const NEW_ACTIVE = "NEW_ACTIVE"
const RESULT_NEW = "RESULT_NEW"
const NEW_INACTIVE = "NEW_INACTIVE"
const DONE_NEW = "DONE_NEW"
const RESET = "RESET"

const initialState = {
    currency_payload: 0,
    new_currencySymbol_payload: "",
    new_active: false,
}

const newCurrencyPayload = (state = initialState, action) => {

    switch(action.type) {

        case FETCH_NEW:
        return {
            ...state, 
            ...action.payload,
        }

        case RESET:
        return {
            ...state, currency_payload: 0
        }

        case NEW_ACTIVE:
        return {
            ...state, new_active: true,
        }

        case RESULT_NEW:
        return {
            ...state, ...action.payload,
        }

        case NEW_INACTIVE:
        return {
            ...state, new_active: false,
        }

        case DONE_NEW:
        return {
            ...state, new_active: true
        }

        default:
        return state
    }

}


export default newCurrencyPayload