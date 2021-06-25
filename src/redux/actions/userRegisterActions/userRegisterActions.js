import { userRegisterTypes } from "../../actionTypes/actionTypes";


const userRegisterAction = {
    registerSuccess: () => ({ type: userRegisterTypes.regSuccess }),
    registerFailed: () => ({ type: userRegisterTypes.regFailure })
}

export default userRegisterAction;