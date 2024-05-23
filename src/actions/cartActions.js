import { createSlice } from "@reduxjs/toolkit";

  

  export const addToCartSlice = createSlice({
    name: 'Cart',
    initialState: {
        value: [],
        cartcount:0,
    },
    reducers: {
        addto_cart: ((state,action) => {
            const newItem = action.payload;
      const existingItemIndex = state.value.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state.value[existingItemIndex].quantity++;
      } else {
        state.value.push({ ...newItem, quantity: 1 });
        state.cartcount++;
      }
   
        }),
        remove_item: ((state,action) => {
            const idToRemove = action.payload;
            state.value = state.value.filter(item => item.id !== idToRemove);
            state.cartcount--;
        }),
        increment:((state,action) => {
            const itemId = action.payload;
            const itemToIncrement = state.value.find(item => item.id === itemId);
            if (itemToIncrement) {
              itemToIncrement.quantity++;
            }

        }),
        decrement:((state,action) => {
            const itemId = action.payload;
            const itemToDecrement = state.value.find(item => item.id === itemId);
            if (itemToDecrement && itemToDecrement.quantity > 0) {
              itemToDecrement.quantity--;
            }

        })
        
    }
    
})


export const { addto_cart, remove_item,increment,decrement } = addToCartSlice.actions
export default addToCartSlice.reducer