import { mechanicAuthTypes } from "../../actionTypes/actionTypes";

const mechanicAuthActions = {
    mechanicAuthLogin: (payload) => ({ type: mechanicAuthTypes.mechanicLogin, payload }),
    mechanicAuthLogout: () => ({ type: mechanicAuthTypes.mechanicLogout })
}

export default mechanicAuthActions;