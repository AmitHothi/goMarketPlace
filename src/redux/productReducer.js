import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [],action) =>{
    switch(action.type){
        case SET_PRODUCT_LIST:
            console.log("SET_PRODUCT LIST",action);
            return[...action.data];

            default :
                return data;
    }
};