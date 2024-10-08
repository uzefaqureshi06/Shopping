import { FETCH_PRODUCTS } from "../constants/actionType";

export default (products = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
            break;

        default:
            return products;
    }
}