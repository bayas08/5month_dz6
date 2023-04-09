import {types} from "../types";

const initialState = {
    message: '',
};


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_USER:
            return { ...state, user: action.payload };
        case types.SUCCESS_MESSAGE:
            return { ...state, message: 'successfully!' };
        case types.CLEAR_MESSAGE:
            return { ...state, message: '' };
        default:
            return state;
    }
};
