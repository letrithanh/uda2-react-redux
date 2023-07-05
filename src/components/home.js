import React, { useEffect } from "react";
import PollCardSection from "./card/poll-card-section";
import { useSelector, useDispatch } from "react-redux";
import { _getQuestions } from "../_DATA";
import { update } from "../slices/question";

const Home = () => {
    const user = useSelector((state) => state.user.info);
    const questionInfo = useSelector((state) => state.question);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchQuestions = async () => {
            const resQuestions = await _getQuestions();
            const sortedQuestions = Object.values(resQuestions).sort((q1, q2) => {
                return q2.timestamp - q1.timestamp;
            });
            dispatch(update(sortedQuestions));
        };
     
        fetchQuestions();
    }, [dispatch]);

    function newQuestions() {
        if (!questionInfo.all) {
            return [];
        }

        if (!user) {
            return questionInfo.all;
        }

        const answeredQuestions = Object.keys(user.answers);
        return questionInfo.all.filter(question => !answeredQuestions.includes(question.id), []);
    }

    function doneQuestions() {
        if (!questionInfo.all || !user) {
            return [];
        }

        const answeredQuestions = Object.keys(user.answers);
        return questionInfo.all.filter(question => answeredQuestions.includes(question.id), []);
    }

    return (
        <div className="p-8 relative flex flex-col gap-4">
            {questionInfo.all?.length > 0 && (
                <div>
                    <PollCardSection
                        name="New Questions"
                        questions={newQuestions()}
                    />
                </div>
            )}
            {questionInfo.all?.length > 0 && (
                <PollCardSection name="Done" questions={doneQuestions()} />
            )}
        </div>
    );
};

export default Home;
