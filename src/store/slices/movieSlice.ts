import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const movieSlice = createSlice({
    name: 'movie',
    initialState: [] as string[],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const indexOf = state.indexOf(action.payload);
            state.splice(indexOf, 1);
        },
    },
    extraReducers(builder){
        builder.addCase(reset, (state) => {
            return []
        })
    }
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer

