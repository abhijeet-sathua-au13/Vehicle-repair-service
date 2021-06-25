import { mechanicAuthStatusTypes } from "../actionTypes/actionTypes";

const initialState = {
    mechanicAuthAlert: ''
}

const mechanicAuthAlert = (state,action) => {
    state = state || initialState;

    switch(action.type){
        case mechanicAuthStatusTypes.mechaniRegSuccessAlert:
            return {
                ...state,
                mechanicAuthAlert: action.payload
            }
        case mechanicAuthStatusTypes.mechanicRegFailureAlert:
            return {
                ...state,
                mechanicAuthAlert: action.payload
            }
        case mechanicAuthStatusTypes.mechanicLoginSuccessAlert:
            return {
                ...state,
                mechanicAuthAlert: action.payload
            }
        case mechanicAuthStatusTypes.mechanicLoginFailureAlert:
            return {
                ...state,
                mechanicAuthAlert: action.payload
            }
        case mechanicAuthStatusTypes.clearMechanicAlertMessage:
            return {
                ...state,
                mechanicAuthAlert: ''
            }
        default:
            return state;
    }
}

export default mechanicAuthAlert;