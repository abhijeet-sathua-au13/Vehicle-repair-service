import { modalTypes } from "../../actionTypes/actionTypes";


const modalActions = {
    open: () => ({ type: modalTypes.open }),
    close: () => ({ type: modalTypes.close })
}

export default modalActions;