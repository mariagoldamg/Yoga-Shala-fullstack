import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cart",
    initialState: {
       cartItems:[]
    },

    reducers: {
        addItemToCart: (state,action)=>{
            const timeId = new Date().getTime()
            state.cartItems.push({
                id:timeId,
                itemId: action.payload.item.id,
                quantity:action.payload.quantity,
                totalPrice:action.payload.quantity * action.payload.item.price,
                
            })
        /* TRIED TO SHOW QUANTITY OF ITEMS ONA SHOPPING BAG    DIDN'T WORK
       let itemIndex = state.cartItems.findIndex((el) => el.id === action.payload)
       if (itemIndex>=0) {
        state.cartItems[itemIndex].quantity +=1;       
    }
    else {
        state.cartItems.push (action.payload)
    }
       
     */  
       
       
       
        },

        removeItem: (state,action)=>{
            state.cartItems = state.cartItems.filter(
                cartItem=>cartItem.id!==action.payload.cartItemId
            )
        }

    }
})


export const getToTalPrice = state => { return state.cart.cartItems
    .reduce((total,cartItems)=>{return cartItems.totalPrice + total},0)}
export const {addItemToCart, removeItem} =cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export default cartSlice.reducer;