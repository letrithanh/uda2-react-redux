import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        info: undefined,
        all: undefined
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
        },
        updateAll: (state, action) => {
            state.all = action.payload;
        }
    },
});

export const { loggin, loggout, update, updateAll } = userSlice.actions;

export default userSlice.reducer;
