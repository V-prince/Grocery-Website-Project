import { createSlice } from "@reduxjs/toolkit";

let CartSlice = createSlice({
    name: 'cartslice',
    initialState: [],
    reducers: {
        addInCart: (state, action) => {
            let existitem = state.find(items => items.id === action.payload.id)
            console.log("item was exist or not ",existitem);
            if (!existitem) {
                state.push(action.payload);
            }
        }
        ,
        DeleteCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        }
    }
})

export const cartAction = CartSlice.actions;
export default CartSlice;

