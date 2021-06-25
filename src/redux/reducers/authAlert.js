import { customerAuthStatusTypes } from "../actionTypes/actionTypes"

const initialState = {
    authStatus: ''
}

const authAlert = (state,action) => {
    state = state || initialState;

    switch(action.type){
        case customerAuthStatusTypes.loginSuccessMessage:
            return {
                ...state,
                authStatus: action.payload
            }
        case customerAuthStatusTypes.loginFailureMessage:
            return {
                ...state,
                authStatus: action.payload
            }
        case customerAuthStatusTypes.clearStatusMessage:
            return {
                ...state,
                authStatus: ''
            }
        default:
            return state;
    }
}

export default authAlert;