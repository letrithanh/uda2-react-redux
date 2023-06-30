import React, { useEffect } from "react";
import PollCardSection from "./card/poll-card-section";
import { useSelector, useDispatch } from "react-redux";
import { _getQuestions } from "../_DATA";
import { closeQuestion, update } from "../slices/question";
import QuestionCard from "./card/question-card";

const Home = () => {

    const userId = useSelector((state) => state.user.info?.id);
    const questionInfo = useSelector((state) => state.question)
    const openningQuestion = useSelector((state) => state.question.openningQuestion)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchQuestions = async () => {
            const resQuestions = await _getQuestions();
            dispatch(update(Object.values(resQuestions)))
        }
        fetchQuestions();
    }, [dispatch])

    return (
        <div className="p-8 relative flex flex-col gap-4">
            {
                questionInfo.all?.length > 0 &&
                <div>
                    <PollCardSection 
                        name="New Questions" 
                        questions={questionInfo.all}
                    />
                </div>
            }
            {
                userId && questionInfo.all?.length > 0 &&
                <PollCardSection 
                    name="Done" 
                    questions={questionInfo?.all}
                />
            }
            {
                userId && openningQuestion &&
                <div className="absolute z-50 top-0 left-0 bg-gray-50 h-full w-full p-8">
                    <QuestionCard 
                        question={openningQuestion}
                        onClose={() => dispatch(closeQuestion())}
                    />
                </div>
            }
        </div>
    );
};

export default Home;
