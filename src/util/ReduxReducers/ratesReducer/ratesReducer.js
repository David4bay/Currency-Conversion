const OLD_RATES_LOADED = "OLD_RATES_LOADED"
const NEW_RATES_LOADED = "NEW_RATES_LOADED"
const OLD_TITLE_LOADED = "OLD_TITLE_LOADED"
const NEW_TITLE_LOADED = "NEW_TITLE_LOADED"

const initialState = {
    defaultRate: null,
    convertedRate: null,
    defaultTitle: "",
    convertedTitle: ""
}

const ratesReducer = (state = initialState, action) => {

    switch(action.type) {

        case OLD_RATES_LOADED:
            return {
                ...state, ...action.payload
            }

        case NEW_RATES_LOADED:
            return {
                ...state, ...action.payload
            }

        case OLD_TITLE_LOADED:
            return {
                ...state, ...action.payload
            }

        case NEW_TITLE_LOADED:
            return {
                ...state, ...action.payload
            }

        default:
            return state;
    }
    
}

export default ratesReducer;