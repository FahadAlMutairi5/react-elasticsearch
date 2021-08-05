import { combineReducers } from "redux";
import errorReducer from "./error";
import bookReducer from "./books";


export default combineReducers({
    errors:errorReducer,
    books:bookReducer
});