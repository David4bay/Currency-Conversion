const FETCH_OLD = "FETCH_OLD"
const RESULT_OLD = "RESULT_OLD"
const OLD_INACTIVE = "OLD_INACTIVE"
const DONE_OLD = "DONE_OLD"

const initialState = {
    currency_payload: 0,
    old_currencySymbol_payload: "",
    old_active: false,
}

const oldCurrencyPayload = (state = initialState, action) => {

    switch(action.type) {

        case FETCH_OLD:
        return {
            ...state, ...action.payload,
        }

        case RESULT_OLD:
        return {
            ...state, ...action.payload, old_converted: true
        }

        case OLD_INACTIVE:
        return {
            ...state
        }

        case DONE_OLD:
        return {
            ...state, old_active: true,
        }

        default:
        return state
    }

}


export default oldCurrencyPayload;
