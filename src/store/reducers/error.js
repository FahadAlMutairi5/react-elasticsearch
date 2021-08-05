import { SET_ERRORS, RESET_ERRORS } from "../actions/actionTypes";

const initialState = {
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: Object.keys(action.payload).map(
          key => (
              {
                  [key]:action.payload[key][0]
              }
          )
        )
      };
    case RESET_ERRORS:
        return {
            ...state,
            errors: []
        };
    default:
      return state;
  }
};

export default reducer;