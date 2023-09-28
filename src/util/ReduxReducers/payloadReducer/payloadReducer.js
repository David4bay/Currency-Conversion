const LOADING = "LOADING"
const FETCH_CONVERTED = "FETCH_CONVERTED"
const FETCH_DEFAULT = "FETCH_DEFAULT"
const RESET = "RESET"
const CONVERT = "CONVERT"
const RESOLVED = "RESOLVED"
const UNCONVERT = "UNCONVERT"

const initialState = {
    loading: null,
    payload_amount: 0,
    payload_currency: "",
    converted: false,
}


const payloadReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
        return {
            ...state, 
            loading: true,
        }

        case CONVERT:
        return {
            ...state, converted: true,
        }

        case UNCONVERT:
        return {
            ...state, 
            converted: false,
        }

        case RESOLVED:
        return {
            ...state,
            loading: false,
        }

        case FETCH_CONVERTED:
        return {
            ...state, 
            ...action.payload,
            converted: true, 
        }

        case FETCH_DEFAULT:
        return {
            ...state, 
            ...action.payload,
            converted: false,
        }

        case RESET:
        return {
            ...initialState
        }

        default:
        return state
    }
}

export default payloadReducer