import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        info: undefined,
    },
    reducers: {
        loggin: (state, action) => {
            state.info = action.payload
        },
    },
});

export const { loggin } = userSlice.actions;

export default userSlice.reducer;
