import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { _getQuestions, _saveQuestionAnswer, _getUsers } from "../_DATA";
import { closeQuestion, updateFirstAnswerOpenningQuestion, updateSecondAnswerOpenningQuestion, update as updateQuestions, openQuestion } from "../slices/question";
import { update as updateUser } from "../slices/user";
import QuestionCard from "./card/question-card";
import { HOME_PATH } from "./nav";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./not-found";

const Question = () => {
    
    const user = useSelector((state) => state.user.info);
    const openningQuestion = useSelector((state) => state.question.openningQuestion);
    const allQuestions = useSelector((state) => state.question.all);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numFirstAnswerOpenningQuestion = useSelector((state) => state.question.firstAnswerOpenningQuestion);
    const numSecondAnswerOpenningQuestion = useSelector((state) => state.question.secondAnswerOpenningQuestion);
    const location = useLocation();

    useEffect(() => {
        function getAnswers(questionId) {
            _getUsers()
                .then((onfulfilled) => {
                    const users = Object.values(onfulfilled);
                    const numFirstAnswer = users.filter(eachUser => eachUser.answers[questionId] === "optionOne", []).length;
                    const numSecondAnswer = users.filter(eachUser => eachUser.answers[questionId] === "optionTwo", []).length;
                    dispatch(updateFirstAnswerOpenningQuestion(numFirstAnswer))
                    dispatch(updateSecondAnswerOpenningQuestion(numSecondAnswer))
                })
        }

        async function fetchQuestions() {
            const resQuestions = await _getQuestions();
            const questions = Object.values(resQuestions);
            dispatch(updateQuestions(questions));
        };

        if (!allQuestions) {
            fetchQuestions();
        }

        if (!openningQuestion) {
            const questionId = location.pathname.replace("/questions/", "");
            const foundQuestion = allQuestions?.filter(each => each.id === questionId);
            if (foundQuestion?.length > 0) {
                dispatch(openQuestion(foundQuestion[0]));
            }
        }

        getAnswers(openningQuestion?.id)
    }, [dispatch, allQuestions, openningQuestion, location.pathname]);

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

    function isExistedQuestion() {
        return allQuestions?.filter(each => `/questions/${each.id}` === location.pathname, []).length > 0;
    }

    return (
        <div className="p-8 relative flex flex-col gap-4">
            {user?.id && openningQuestion && isExistedQuestion() ? (
                <div className="absolute z-40 top-0 left-0 bg-gray-50 h-full w-full p-8">
                    <QuestionCard
                        question={openningQuestion}
                        onClose={() => onCloseClicked()}
                        onAnswer={onAnswerCallback}
                        numFirstAnswer={numFirstAnswerOpenningQuestion}
                        numSecondAnswer={numSecondAnswerOpenningQuestion}
                        answered={user.answers[openningQuestion.id]}
                    />
                </div>
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default Question;
