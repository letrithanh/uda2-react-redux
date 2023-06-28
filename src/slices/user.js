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
    },
});

export const { loggin, loggout } = userSlice.actions;

export default userSlice.reducer;
