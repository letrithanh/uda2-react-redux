import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { _getQuestions } from "../_DATA";
import { closeQuestion, update } from "../slices/question";
import QuestionCard from "./card/question-card";
import { HOME_PATH } from "./nav";
import { useNavigate } from "react-router-dom";

const Question = () => {
    const user = useSelector((state) => state.user.info);
    const openningQuestion = useSelector((state) => state.question.openningQuestion);
    const allQuestions = useSelector((state) => state.question.all);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            const resQuestions = await _getQuestions();
            const questions = Object.values(resQuestions);
            dispatch(update(questions));
        };

        if (!allQuestions) {
            fetchQuestions();
        }
    }, [dispatch, allQuestions]);

    function onCloseClicked() {
        dispatch(closeQuestion());
        navigate(HOME_PATH);
    }

    return (
        <div className="p-8 relative flex flex-col gap-4">
            {user?.id && openningQuestion && (
                <div className="absolute z-50 top-0 left-0 bg-gray-50 h-full w-full p-8">
                    <QuestionCard
                        question={openningQuestion}
                        onClose={() => onCloseClicked()}
                    />
                </div>
            )}
        </div>
    );
};

export default Question;
