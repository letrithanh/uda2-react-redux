import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";
import questionReducer from "../slices/question";
import navigationReducer from "../slices/navigation";

export default configureStore({
    reducer: {
        user: userReducer,
        question: questionReducer,
        navigation: navigationReducer
    },
});
