import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";
import questionReducer from "../slices/question";

export default configureStore({
    reducer: {
        user: userReducer,
        question: questionReducer
    },
});
