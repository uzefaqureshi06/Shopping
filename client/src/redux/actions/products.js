import * as api from '../api'
import { FETCH_PRODUCTS } from '../constants/actionType';


export const getProductsAction = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        console.log(data)
        dispatch({ type: FETCH_PRODUCTS, payload: data.products })
    } catch (error) {
        console.log(error)
    }
}