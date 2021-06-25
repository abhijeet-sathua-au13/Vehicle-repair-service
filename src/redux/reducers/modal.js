import { modalTypes } from "../actionTypes/actionTypes";



const initialState = false;

const modal = (state,action) => {
    state = state || initialState;

    switch(action.type){
        case modalTypes.open:
            return true;
        case modalTypes.close:
            return false;
        default:
            return state;
    }
}

export default modal;