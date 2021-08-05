import * as actionTypes from "./actionTypes";
import {toast} from 'react-toastify';
// import * as Static from "../../assets/Static";
import axios from "axios";

export const instance = axios.create({
    baseURL: actionTypes.BASE_URL,
});

export const fetchBooks = () => {
    // console.log("Fitchech Action")
    return async dispatch => {
        // console.log("date")
        try {
            
            const date = {
                "id": "get_all_books_demo"
            }
            // console.log(date)
            const res = await instance.get("_search/template", date);
            // console.log(res)
            const books = res.data;
            dispatch({type: actionTypes.FETCH_ALL_BOOKS, payload: books});
        } catch (error) {
            console.log("Error")
            let data = error.response
            toast.error("There is an error when try to get books");
            console.log("Something went wrong with ", data);
        }
    };
};


export const filterBooks = query => {
    return {
        type: actionTypes.FILTER_BOOKS, payload: query
    };
};

export const loading = (query) => {
    console.log("Printed");
    return {type: actionTypes.SET_LOADING, payload: query};
};
