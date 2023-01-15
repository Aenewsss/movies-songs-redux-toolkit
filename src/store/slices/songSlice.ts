import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const songSlice = createSlice({
    name: 'song',
    initialState: [] as string[],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
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

export const { addSong, removeSong } = songSlice.actions;
export const songsReducer = songSlice.reducer