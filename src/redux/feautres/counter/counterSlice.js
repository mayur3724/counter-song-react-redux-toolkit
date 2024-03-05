import { createSlice } from "@reduxjs/toolkit";


const initalState = 0;

const counterSlice = createSlice({
    name:counter,
    initialState:initalState,
    reducers:{
        incerase:(state, action)=>{return state+1},
        decrease:(state, action)=>{return state-1},
        reset : state=>initalState
    }  
})
 export const {incerase, decrease, reset} = counterSlice.actions;

 const counterReducer = counterSlice.reducer;

 export default counterReducer;