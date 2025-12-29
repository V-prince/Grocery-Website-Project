import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './cartSlice'
import HeartitemSlice from './item'
let GroceryStore = configureStore({
    reducer:{
        cartslice:CartSlice.reducer,
        Hart:HeartitemSlice.reducer,
    }
})

export default GroceryStore