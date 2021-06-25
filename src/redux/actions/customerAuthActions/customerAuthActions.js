import { customerAuthTypes } from "../../actionTypes/actionTypes";

const customerAuthActions = {
    customerAuthLogin: (payload) => ({ type: customerAuthTypes.customerLogin, payload }),
    customerAuthLogout: () => ({ type: customerAuthTypes.customerLogout })
}

export default customerAuthActions;