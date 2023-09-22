const READY = "READY"
const FETCH = "FETCH"
const RESET = "RESET"

const initialState = {
    old_currency : "",
    old_amount: 0,
    new_currency: "",
    new_amount: 0
}

const currencyReducer = (state = initialState, action) => {
    switch(action.type) {

        case READY:
        return state;

        case FETCH:
        return state;

        case RESET:
        return state;

    }
}

export default currencyReducer;