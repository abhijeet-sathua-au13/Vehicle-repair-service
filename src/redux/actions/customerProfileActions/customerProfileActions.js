import { customerProfileTypes } from "../../actionTypes/actionTypes";


const customerProfileActions = {
    getCustomerInfo: (payload) => ({ type: customerProfileTypes.getCustomerInfo, payload }),
    removeCustomerInfo: () => ({ type: customerProfileTypes.removeCustomerProfileInfo })
}

export default customerProfileActions;