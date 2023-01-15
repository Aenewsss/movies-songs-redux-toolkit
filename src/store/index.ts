import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'song',
    initialState: [] as string[],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {

        },
    }
});

const movieSlice = createSlice({
    name: 'movie',
    initialState: [] as string[],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {

        },
    }
});

const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
        movies: movieSlice.reducer
    }
})

const initialState = store.getState();

export { store, initialState };
export const { addSong } = songSlice.actions;
export const { addMovie } = movieSlice.actions;