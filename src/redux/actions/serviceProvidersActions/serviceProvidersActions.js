import { nearbyServiceProvidersListTypes } from "../../actionTypes/actionTypes";

const serviceProvidersActions = {
    getServiceProvidersList: (payload) => ({type: nearbyServiceProvidersListTypes.getServiceProvidersList, payload}),

    removeServiceProvidersList: () => ({type: nearbyServiceProvidersListTypes.removeServiceProvidersList})
}

export default serviceProvidersActions;