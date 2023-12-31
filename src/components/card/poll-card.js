import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { openQuestion } from "../../slices/question";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QUESTION_ID_PATH_PARAM, QUESTION_PATH } from "../nav";

const PollCard = ({ question }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.info?.id);
    const navigate = useNavigate();

    function onShowQuestion() {
        if (userId && question) {
            dispatch(openQuestion(question));
            navigate(
                QUESTION_PATH.replace(QUESTION_ID_PATH_PARAM, question.id)
            );
        }
    }

    return (
        <div
            key={question.id}
            className="divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                    <div className="grid place-items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900">
                            {question.author}
                        </h3>
                    </div>
                    <p className="grid place-items-center mt-1 truncate text-sm text-gray-500">
                        {new Date(question.timestamp).toLocaleString()}
                    </p>
                </div>
            </div>
            <div
                className="hover:bg-indigo-600 hover:text-white cursor-pointer rounded-b-md"
                onClick={() => onShowQuestion()}
            >
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="-ml-px flex w-0 flex-1">
                        <div className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 cursor-pointer hover:text-white">
                            <ArrowTopRightOnSquareIcon
                                className="h-5 w-5 text-gray-400 hover:text-white"
                                aria-hidden="true"
                            />
                            Show
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PollCard;
