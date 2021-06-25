import { mechanicRegisterTypes } from "../actionTypes/actionTypes";

const initialState = {
    registered: false
}

const mechanicRegister = (state, action) => {

    state = state || initialState;

    switch(action.type){
        case mechanicRegisterTypes.mechanicRegisterSuccess:
            return {
                ...state,
                registered: true,
            }
        case mechanicRegisterTypes.mechanicRegisterFailure:
            return {
                ...state,
                registered: false,
            }
        default:
            return state;
    }

}

export default mechanicRegister;