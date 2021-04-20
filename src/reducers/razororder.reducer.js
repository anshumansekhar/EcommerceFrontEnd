import { razorPayOrderConstants } from "../actions/constants";

const initState = {
    orderCreated: false,
    order:null,
    error:null
};
export default (state = initState, action) => {
    switch (action.type) {
        case razorPayOrderConstants.RAZORPAY_ORDER_REQUEST:
            state = {
                ...state
            }
            break;
        case razorPayOrderConstants.RAZORPAY_ORDER_SUCCESS:
            state = {
                ...state,
                order:{...action.payload},
                orderCreated:true
            }
            break;
    }
    return state;
}
