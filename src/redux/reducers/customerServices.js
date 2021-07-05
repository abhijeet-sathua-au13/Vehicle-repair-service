import { customerServiceHistory } from "../actionTypes/actionTypes";

const initialState = {
    servicesUsed: []
};

const customerServices = (state,action) => {
    state = state || initialState;

    switch(action.type){
        case customerServiceHistory.getServiceHistory:
            return {
                ...state,
                servicesUsed: [...action.payload]
            }
        
        default:
            return state;
    }

}

export default customerServices;