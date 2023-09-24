const READY = "READY"
const FETCH = "FETCH"
const RESET = "RESET"
const CHANGE = "CHANGE"

const initialState = {
    old_currency : "USD",
    old_amount: 0,
    new_currency: "NGN",
    new_amount: 0
}


const currencyReducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {

        case READY:
        return state;

        case FETCH:
        return state;

        case RESET:
        return state;

        case CHANGE:
        return {...state, ...action};

        default:
        return state;
        
    }
}

export default currencyReducer;