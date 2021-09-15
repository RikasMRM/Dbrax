import { Actiontypes } from "../contants/action-types";

export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products,
    };
};

export const setProduct = (product) => {
    return {
        type: Actiontypes.SET_PRODUCT,
        payload: product,
    };
};