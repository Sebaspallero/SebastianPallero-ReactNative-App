import { cartTypes } from "../types/cart.types";
import { URL_API } from "../../constants/firebase";
import insertOrder from '../../db/index'

const {ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER} = cartTypes;

export const addToCart = (item) =>({
    type: ADD_TO_CART,
    item,
});

export const removeFromCart = (id) =>({
    type: REMOVE_FROM_CART,
    id
});


export const confirmCart = (items, total, address) => {
  return async (dispatch) => {
    try {

      const response = await fetch(`${URL_API}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
          address
        }),
      });

      const result = await response.json();

      dispatch({
        type: CONFIRM_ORDER,
        result,
      });
    } 
    catch (error) {
      dispatch({
        type: CONFIRM_ORDER,
        error,
      });
    }
  };
};

/* export const insertOrderSQLite = async(items, total, address) =>{

 const result = await insertOrder({id: Math.random(), items, total, address})
 
}; */