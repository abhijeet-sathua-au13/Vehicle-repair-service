import { userRegisterTypes } from "../actionTypes/actionTypes";

const initialState = {
    registered: false,
    registerStatus: ''
}

const userAuth = (state, action) => {

    state = state || initialState;

    switch(action.type){
        case userRegisterTypes.regSuccess:
            return {
                ...state,
                registered: true,
                registerStatus: 'Signed up successfuly! Log in now to get better experience'
            }
        case userRegisterTypes.regFailure:
            return {
                ...state,
                registered: false,
                registerStatus: 'Unable to create user'
            }
        default:
            return state;
    }

}

export default userAuth;