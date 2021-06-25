import { mechanicProfileDetailsTypes } from "../actionTypes/actionTypes";


const initialState = {
    mechanicProfileDetails: {},
    mehchanicServices: []
}

const mechanicProfileDetails = (state, action) => {
    state = state || initialState;

    switch(action.type){
        case mechanicProfileDetailsTypes.mechaniProfileDetails:
            return {
                ...state,
                mechanicProfileDetails: {...action.payload}
            }
        case mechanicProfileDetailsTypes.mechanicServicesList:
            return {
                ...state,
                mechanicServicesList: [...action.payload]
            }
        default:
            return state;
    }

}

export default mechanicProfileDetails;