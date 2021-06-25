import { individualServiceDetailsTypes } from "../actionTypes/actionTypes";

const initialState = {
    serviceDetailsForMechanic : {}
}

const serviceDetails = (state, action) => {

    state = state || initialState;

    switch(action.type){
        case individualServiceDetailsTypes.getServiceDetails:
            return {
                ...state,
                serviceDetailsForMechanic : {...action.payload}
            }
        default:
            return state;
    }
}

export default serviceDetails;