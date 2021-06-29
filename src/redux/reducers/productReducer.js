import { Actiontype } from '../constans/Actiontype';

const initialState = {
    products:[],
}

export const productReducer = (state = initialState, {type, payload }) => {
switch (type) {
    case Actiontype.SET_PRODUCTS:
        return {...state, products: payload};
    default:
        return state;
}
};

export const selectedProductReducer = (state={},{type,payload}) => {
    switch (type) {
        case Actiontype.SELECTED_PRODUCT:
            return {...state,...payload};
        case Actiontype.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
}
    }