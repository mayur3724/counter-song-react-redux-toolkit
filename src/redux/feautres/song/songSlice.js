import { createSlice } from "@reduxjs/toolkit";


const initialState = initialState;

const songSlice = createSlice({
    name: "song",
    initialState: initialState,
    reducers: {
        selectedSong:(state,action)=>action.payload
    }
})
export const {selectedSong} = songSlice.actions;
export default songSlice.reducer;