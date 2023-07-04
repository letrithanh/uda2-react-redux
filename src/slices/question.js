import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "question",
    initialState: {
        all: undefined,
        openningQuestion: undefined,
        firstAnswerOpenningQuestion: undefined,
        secondAnswerOpenningQuestion: undefined,
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
        },
        updateFirstAnswerOpenningQuestion: (state, action) => {
            return {
                ...state,
                firstAnswerOpenningQuestion: action.payload
            }
        },
        updateSecondAnswerOpenningQuestion: (state, action) => {
            return {
                ...state,
                secondAnswerOpenningQuestion: action.payload
            }
        },
    },
});

export const { update, openQuestion, closeQuestion, updateFirstAnswerOpenningQuestion, updateSecondAnswerOpenningQuestion } = questionSlice.actions;

export default questionSlice.reducer;
