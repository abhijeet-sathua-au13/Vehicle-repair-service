import { nearbyServiceProvidersListTypes } from "../actionTypes/actionTypes";

const initialState = {
    serviceProviders: []
}

const nearByServiceProvidersList = (state, action) => {
    state = state || initialState;

    switch(action.type){
        case nearbyServiceProvidersListTypes.getServiceProvidersList:
            return {
                ...state,
                serviceProviders: [...action.payload]
            }
        case nearbyServiceProvidersListTypes.removeServiceProvidersList:
            return {
                ...state,
                serviceProviders: []
            }
        default:
            return state;
    }
}

export default nearByServiceProvidersList;