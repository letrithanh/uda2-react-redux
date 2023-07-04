import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        info: undefined,
    },
    reducers: {
        loggin: (state, action) => {
            state.info = action.payload;
        },
        loggout: (state) => {
            state.info = undefined;
        },
        update: (state, action) => {
            state.info = action.payload;
        }
    },
});

export const { loggin, loggout, update } = userSlice.actions;

export default userSlice.reducer;
