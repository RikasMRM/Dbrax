import { Actiontypes } from "../contants/action-types";

const initialState = {
    products:[
         {
           id: 1,
           title: "Rikas",
           category: "intern",
        },
    ],
};

export const productReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case Actiontypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};