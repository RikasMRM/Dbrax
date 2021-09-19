import { Actiontypes } from "../contants/action-types";

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Actiontypes.SET_PRODUCTS:
            return {...state,products: payload};
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case Actiontypes.SELECTED_PRODUCTS:
        return { ...state, ...payload };
      case Actiontypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };