import React from "react";
import { classNames } from "../../utils/class-name-utils";

const AnswerCard = ({text, onAnwserClick, btnText, isActiveButton}) => {
    return (
        <div className="divide-y divide-gray-200 shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                    <div className="grid place-items-center space-x-3 font-base text-gray-900">
                        {text}
                    </div>
                </div>
            </div>
            <div 
                className={
                    classNames(
                        "cursor-pointer", 
                        isActiveButton ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-indigo-600 hover:text-white"
                    )}
                onClick={onAnwserClick}
            >
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="-ml-px flex w-0 flex-1">
                        <div className={
                            classNames(
                                "relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 border border-transparent py-4 text-sm font-semibold cursor-pointer ",
                                isActiveButton ? "text-white" : "text-gray-900 hover:text-white"
                            )}>
                            {btnText || "Click"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnswerCard;
