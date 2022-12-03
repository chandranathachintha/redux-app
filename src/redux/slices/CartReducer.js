import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartValues:[],
    totalPrice : 0
}

const CartReducer = createSlice({
    name : "CartReducer",
    initialState,
    reducers:{
        incrementcart : (state,action)=>{
            state.cartValues.push(action.payload)
            const priceArray = state.cartValues.map(product=>product.productPrice)
            state.totalPrice = priceArray.reduce((a,b)=>a+b)
        },
        decrementcart : (state,action)=>{
            const index = state.cartValues.findIndex(obj=>obj.productName === action.payload.productName)
            if(index>=0){
                state.cartValues.splice(index,1)
            }
            const initialvalue = 0;
            const priceArray = state.cartValues.map(product=>product.productPrice)
            state.totalPrice = priceArray.reduce((a,b)=>a+b,initialvalue)
         }
    }
})
export const {incrementcart,decrementcart} = CartReducer.actions;
export default CartReducer.reducer;