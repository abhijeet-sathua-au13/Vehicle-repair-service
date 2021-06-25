import { customerAuthTypes } from "../actionTypes/actionTypes"

const initialState = !!localStorage.getItem('customerToken')


const customerLogin = (state,action) => {
    state = state || initialState

    switch(action.type){
        case customerAuthTypes.customerLogin: 
        localStorage.setItem('customerToken', action.payload)
            return true

        case customerAuthTypes.customerLogout: 
            localStorage.removeItem('customerToken');
            localStorage.removeItem('customerProfileInfo');
            return false

        default:
            return state;
    }
}

export default customerLogin;