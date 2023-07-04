import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { _getQuestions, _saveQuestionAnswer, _getUsers } from "../_DATA";
import { closeQuestion, update as updateQuestions } from "../slices/question";
import { update as updateUser } from "../slices/user";
import QuestionCard from "./card/question-card";
import { HOME_PATH } from "./nav";
import { useNavigate } from "react-router-dom";

const Question = () => {
    
    const user = useSelector((state) => state.user.info);
    const openningQuestion = useSelector((state) => state.question.openningQuestion);
    const allQuestions = useSelector((state) => state.question.all);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [numFirstAnswer, setNumFirstAnswer] = useState();
    const [numSecondAnswer, setNumSecondAnswer] = useState();

    useEffect(() => {
        if (!allQuestions) {
            fetchQuestions();
        }
    }, [dispatch, allQuestions]);

    function onCloseClicked() {
        dispatch(closeQuestion());
        navigate(HOME_PATH);
    }

    function onAnswerCallback(option) {
        if (!user || !openningQuestion) {
            return;
        }

        _saveQuestionAnswer({
            authedUser: user.id,
            qid: openningQuestion.id,
            answer: option
        }).then(() => {
            _getUsers()
                .then((onfulfilled) => onfulfilled[user.id])
                .then((user) => dispatch(updateUser(user)))
        });
    }

    function getAnswers(questionId) {
        _getUsers()
            .then((onfulfilled) => {
                const users = Object.values(onfulfilled);
                const numFirstAnswer = users.filter(eachUser => eachUser.answers[questionId] === "optionOne", []).length;
                const numSecondAnswer = users.filter(eachUser => eachUser.answers[questionId] === "optionTwo", []).length;
                setNumFirstAnswer(numFirstAnswer);
                setNumSecondAnswer(numSecondAnswer);
            })
    }

    getAnswers(openningQuestion?.id)

    async function fetchQuestions() {
        const resQuestions = await _getQuestions();
        const questions = Object.values(resQuestions);
        dispatch(updateQuestions(questions));
    };

    return (
        <div className="p-8 relative flex flex-col gap-4">
            {user?.id && openningQuestion && (
                <div className="absolute z-40 top-0 left-0 bg-gray-50 h-full w-full p-8">
                    <QuestionCard
                        question={openningQuestion}
                        onClose={() => onCloseClicked()}
                        onAnswer={onAnswerCallback}
                        numFirstAnswer={numFirstAnswer}
                        numSecondAnswer={numSecondAnswer}
                        answered={user.answers[openningQuestion.id]}
                    />
                </div>
            )}
        </div>
    );
};

export default Question;
