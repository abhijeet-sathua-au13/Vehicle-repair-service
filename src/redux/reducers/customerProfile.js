import { customerProfileTypes } from "../actionTypes/actionTypes";

const storedCustomerInfo = JSON.parse(localStorage.getItem('customerProfileInfo')) || {}

const initialState = {
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerImage: "",
    ...storedCustomerInfo
}

const customerProfile = (state,action) => {
    state = state?.email ? state : initialState;

    switch(action.type){
        case customerProfileTypes.getCustomerInfo:
            const customerData = {
                customerName: action.payload.name,
                customerEmail: action.payload.email,
                customerPhone: action.payload.phone,
                customerImage: action.payload.image ? action.payload.image : ''
            }
            localStorage.setItem('customerProfileInfo', JSON.stringify(customerData));
            return customerData;

        case customerProfileTypes.removeCustomerProfileInfo:
            localStorage.removeItem('customerProfileInfo');
            return {
                customerName: '',
                custtomerEmail: '',
                customerPhone: '',
                customerImage: ''
            }
        default:
            return state;

    }
}


export default customerProfile;