import {Actiontype} from '../constans/Actiontype';
export const setProducts = (products) => {
    return {
        type: Actiontype.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProducts = (product) => {
    return {
        type: Actiontype.SELECTED_PRODUCT,
        payload: product,
    }
}
export const removeselectedProducts = () => {
    return {
        type: Actiontype.REMOVE_SELECTED_PRODUCT,
    }
}
