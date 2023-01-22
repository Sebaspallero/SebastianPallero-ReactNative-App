import { cartTypes } from "../types/cart.types";
import { sumTotal } from "../../functions";

const {REMOVE_FROM_CART, ADD_TO_CART, CONFIRM_ORDER} = cartTypes;


const initialState = {
    items: [],
    total: 0,
    error: null,
};

const cartReducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_TO_CART:
            let updateCart = [];
            if(state.items.find((item) => item.id == action.item.id)){
                updateCart = state.items.map((item) => {
                    if(item.id == action.item.id) item.quantity +=1;
                    return item;
                });
            } else {
                const item  = {...action.item, quantity: 1}
                updateCart = [...state.items, item]
            }
            return {
                ...state,
                items: updateCart,
                total: sumTotal(updateCart)
            };

        case REMOVE_FROM_CART:
            const filterCart = state.items.filter((item) => item.id !== action.id)
            return{
                ...state,
                items: filterCart,
                total: sumTotal(filterCart)
            };

        case CONFIRM_ORDER:
            if (action.result) {
                return {
                ...state,
                items: [],
                total: 0,
                };
            }
            return {
                ...state,
                error: action.error,
            };
        default: return state
    }
}

export default cartReducer;