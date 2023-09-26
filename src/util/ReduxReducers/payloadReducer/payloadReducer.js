const initialState = {
    loading: null,
    payload_amount: 0,
    payload_currency: "",
}


const payloadReducer = (state = initialState, action) => {
    switch(action.type) {

        case "LOADING":
        return {
            ...state, 
            loading: true,
        }

        case "FETCH_CONVERTED":
        return {
            ...state, 
            loading: false,
            converted: true, 
            payload_amount: action.amount, 
            payload_currency: action.currency,
        }

        case "FETCH_DEFAULT":
        return {
            ...state, 
            loading: false, 
            converted: false,
            payload_amount: action.amount, 
            payload_currency: action.currency,
        }

        default:
        return state
    }
}

export default payloadReducer