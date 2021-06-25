import { loginPathTypes } from "../actionTypes/actionTypes";


const initialState = {
    googleLoginAccess = false,
    customLoginAccess = false
}

const loginPath = (state, action) => {
    state = state || initialState;

    switch(action.type){
        case (loginPathTypes.googleAccess):
            return {
                googleLoginAccess: true,
                customLoginAccess: false
            }
        case (loginPathTypes.customAccess):
            return {
                googleLoginAccess: false,
                customLoginAccess: true
            }
        default:
            return state;
    }
}