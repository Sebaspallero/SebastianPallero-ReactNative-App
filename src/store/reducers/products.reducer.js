import { productsTypes } from "../types/products.types";
import { PRODUCTS } from "../../constants/data";
const {FILTER_PRODUCTS, SELECT_PRODUCT, POPULAR_PRODUCTS} = productsTypes

const initialState = {
    products: PRODUCTS,
    filteredProducts: [],
    selected: []
}

const productsReducer = (state = initialState, action) => {

    switch(action.type){
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find(
                    (product) => product.id == action.productId),
            };
        case FILTER_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId == action.categoryId),
            };
        default:
             return state;
    }
    
} 

export default productsReducer;