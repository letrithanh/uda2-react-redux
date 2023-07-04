import React, {useState} from "react";
import { _saveQuestion } from "../_DATA";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "./nav";

const New = () => {

    const user = useSelector((state) => state.user.info);
    const navigate = useNavigate();

    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        _saveQuestion({
            optionOneText: firstOption,
            optionTwoText: secondOption,
            author: user?.id
        }).then(() => {
            navigate(HOME_PATH);
        })
    }

    return (
        <div className="space-y-10 divide-y divide-gray-900/10 p-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                <div className="px-4 sm:px-0">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Would You Rather
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Create Your Own Poll
                    </p>
                </div>

                <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="firstOption"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    First Option
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="firstOption"
                                            id="firstOption"
                                            className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="First option is..."
                                            value={firstOption}
                                            onChange={(event) => setFirstOption(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="secondOption"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Second Option
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="secondOption"
                                            id="secondOption"
                                            className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Second option is..."
                                            value={secondOption}
                                            onChange={(event) => setSecondOption(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={onSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default New;
