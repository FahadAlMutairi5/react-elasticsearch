import * as actionTypes from "../actions/actionTypes";

const initialState = {
    books: null,
    filteredBooks: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_BOOKS:
            // console.log("FitchReduce")
            return {
                ...state,
                books: action.payload,
                filteredBooks: action.payload,
            };
        case actionTypes.FILTER_BOOKS:
            return {
                ...state,
                filteredBooks: action.payload
            };
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
