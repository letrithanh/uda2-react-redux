import React from "react";
import PollCard from "./poll-card";

const PollCardGrid = ({questions}) => {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
          {questions.map((question) => (
            <PollCard key={question.id} question={question} />
          ))}
        </ul>
      );
};

export default PollCardGrid;
