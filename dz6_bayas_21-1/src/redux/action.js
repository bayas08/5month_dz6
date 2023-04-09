import {types} from "./types";
import axios from 'axios';

export const createUserSuccess = (message) => ({ type: types.CREATE_USER, payload: message });
export const successMessage = () => ({ type: types.SUCCESS_MESSAGE });
export const clearMessage = () => ({ type: types.CLEAR_MESSAGE });


export const createUser = (user) => async (dispatch) => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/users', user);
        dispatch(createUserSuccess('User created successfully'));
        dispatch(successMessage());
        setTimeout(() => {
            dispatch(clearMessage());
        }, 5000);
    } catch (error) {
        console.error(error);
    }
};
