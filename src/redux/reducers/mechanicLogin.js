import { mechanicAuthTypes } from "../actionTypes/actionTypes";

const initialState = !!localStorage.getItem('servicemanToken')

const mechanicLogin = (state,action) => {
    state = state || initialState;

    switch(action.type){
        case mechanicAuthTypes.mechanicLogin:
            localStorage.setItem('servicemanToken', action.payload)
            return true;
        
        case mechanicAuthTypes.mechanicLogout:
            localStorage.removeItem('servicemanToken');
            localStorage.removeItem('mechanicProfileInfo');
            return false;
        default:
            return state;
    }
}

export default mechanicLogin;