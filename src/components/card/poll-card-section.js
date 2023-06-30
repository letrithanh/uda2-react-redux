import React from "react";
import PollCardGrid from "./poll-card-grid";

const PollCardSection = ({ name, questions }) => {
    return (
        <div>
            <div
                className={`border-b-2 border-b-gray-200 border-t-4 border-t-indigo-600 bg-white px-4 py-5 sm:px-6`}
            >
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                    {name}
                </h3>
            </div>
            <div className="bg-gray-100 rounded-b-md">
                <PollCardGrid questions={questions} />
            </div>
        </div>
    );
};

export default PollCardSection;
