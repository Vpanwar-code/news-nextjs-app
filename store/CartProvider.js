import CartContext from "./CartContext";
import React , {useReducer, useState} from 'react';
import Dummy from "../components/store/Data";

const defaultCartState={
    items:Dummy,
};

const cartReducer = (state , action) =>{
    if(action.type === 'ADD'){

        // const existingCartItemIndex=state.items.findIndex(
        //     (item)=>item.id === action.item.id
        // );
        // const existingCartItem = state.items[existingCartItemIndex];
        // let updatedItem;
        let updatedItems;

        // if(existingCartItem){
        //     updatedItem={
        //         ...existingCartItem
        //     };
        //     updatedItems=[...state.items];
        //     updatedItems[existingCartItemIndex]=updatedItem;
        // }
        // else{
            updatedItems = state.items.concat(action.item);
        // }

        return {
              items : updatedItems
        };
    }
   
    return defaultCartState;

}

const CartProvider = (props) =>{

    const [cartState , dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    
    const addItemToCartHandler = (item) =>{
          dispatchCartAction({type : 'ADD' , item : item});
    };

    const cartContext={
        items : cartState.items,
        addItem : addItemToCartHandler,
        
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;