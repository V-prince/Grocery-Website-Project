import { createSlice } from "@reduxjs/toolkit";
let HeartitemSlice = createSlice({
    name:'Hart',
    initialState:[],
    reducers:{
        Addfavourite:(state,action)=>{
            let Hartexist = state.find(item => item.id == action.payload.id)
            if (Hartexist) {
                return 
            }
            state.push(action.payload)
        },
        Removefavourite:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        }
    }
})

export const HartitemAction = HeartitemSlice.actions;
export default HeartitemSlice;