import { mechanicRegisterTypes } from "../../actionTypes/actionTypes"

const mechanicRegisterActions =  {
    mechanicRegisterSucceed: () => ({ type: mechanicRegisterTypes.mechanicRegisterSuccess }),
    mechanicRegisterFailure: () => ({ type: mechanicRegisterTypes.mechanicRegisterFailure })

}

export default mechanicRegisterActions;