import { individualServiceDetailsTypes } from "../../actionTypes/actionTypes";

const eachServiceDetailsAction = {
    getServiceDetails: (payload) => ({ type: individualServiceDetailsTypes.getServiceDetails, payload })
}

export default eachServiceDetailsAction;