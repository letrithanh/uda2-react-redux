import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "question",
    initialState: {
        all: undefined,
        openningQuestion: undefined
    },
    reducers: {
        update: (state, action) => {
            return {
                ...state,
                all: [...action.payload],
            };
        },
        openQuestion: (state, action) => {
            return {
                ...state,
                openningQuestion: action.payload
            }
        },
        closeQuestion: (state) => {
            return {
                ...state,
                openningQuestion: undefined
            }
        }
    },
});

export const { update, openQuestion, closeQuestion } = questionSlice.actions;

export default questionSlice.reducer;
