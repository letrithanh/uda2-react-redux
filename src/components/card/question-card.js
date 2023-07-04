import React, { useEffect, useState } from "react";
import AnswerCard from "./answer-card";
import { _getUsers } from "../../_DATA";

const QuestionCard = ({ question, onClose, onAnswer, numFirstAnswer, numSecondAnswer, answered }) => {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        const fetchImage = async () => {
            const resUsers = await _getUsers();
            const foundUser = resUsers[question.author];
            if (foundUser) {
                setImageUrl(foundUser.avatarURL);
            }
        };
        fetchImage();
    }, [question.author]);

    return (
        <div>
            <div
                className={`border-b-2 border-b-gray-200 border-t-4 border-t-indigo-600 bg-white px-4 py-5 sm:px-6`}
            >
                <div className="flex justify-between">
                    <h3 className="text-base font-semibold leading-6 text-gray-900 align-text-bottom">
                        Question
                    </h3>
                    <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 rounded-b-md p-8 flex flex-col gap-4">
                <div className="w-full font-semibold text-xl grid place-items-center">
                    Poll by {question.author}
                </div>
                <div className="w-full grid place-items-center">
                    {imageUrl ? (
                        <img
                            className="inline-block h-48 w-48 rounded-full"
                            src={imageUrl}
                            alt=""
                        />
                    ) : (
                        <div className="inline-block rounded-full bg-slate-700 h-48 w-48 animate-pulse"></div>
                    )}
                </div>
                <div className="w-full font-semibold text-3xl grid place-items-center">
                    Would You Rather
                </div>
                <div className="flex justify-center gap-8">
                    <div className="bg-white">
                        <AnswerCard 
                            text={question.optionOne.text}
                            onAnwserClick={() => onAnswer("optionOne")}
                            btnText={answered ? `${(100 * numFirstAnswer/(numFirstAnswer + numSecondAnswer)).toFixed(2)}% - ${numFirstAnswer} vote(s)` : "Click"}
                            isActiveButton={answered === "optionOne"}
                        />
                    </div>
                    <div className="bg-white">
                        <AnswerCard 
                            text={question.optionTwo.text} 
                            onAnwserClick={() => onAnswer("optionTwo")}
                            btnText={answered ? `${(100 * numSecondAnswer/(numFirstAnswer + numSecondAnswer)).toFixed(2)}% - ${numSecondAnswer} vote(s)` : "Click"}
                            isActiveButton={answered === "optionTwo"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
