import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: "navigation",
    initialState: {
        path: undefined,
    },
    reducers: {
        visitBeforeLogin: (state, action) => {
            state.path = action.payload;
        },
        clean: (state) => {
            state.path = undefined;
        },
    },
});

export const { visitBeforeLogin, clean } = navigationSlice.actions;

export default navigationSlice.reducer;
