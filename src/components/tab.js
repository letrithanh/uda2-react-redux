import React from "react";
import { classNames } from "../utils/class-name-utils";

export const UNANSWER = "unanwser";
export const DONE = "done";

const Tab = ({selectedValue, onChange}) => {
    
    const tabs = [
        { name: "Unanswer Questions", current: selectedValue === UNANSWER, value: UNANSWER },
        { name: "Done", current: selectedValue === DONE, value: DONE },
    ];

    return (
        <div>
            <div className="sm:hidden cursor-pointer">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                >
                    {tabs.map((tab) => (
                        <option 
                            key={tab.name}
                            onChange={() => onChange(tab.value)}
                        >{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block cursor-pointer">
                <nav
                    className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
                    aria-label="Tabs"
                >
                    {tabs.map((tab, tabIdx) => (
                        <div
                            key={tab.name}
                            className={classNames(
                                tab.current
                                    ? "text-gray-900"
                                    : "text-gray-500 hover:text-gray-700",
                                tabIdx === 0 ? "rounded-l-lg" : "",
                                tabIdx === tabs.length - 1
                                    ? "rounded-r-lg"
                                    : "",
                                "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                            )}
                            aria-current={tab.current ? "page" : undefined}
                            onClick={() => onChange(tab.value)}
                        >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    tab.current
                                        ? "bg-indigo-500"
                                        : "bg-transparent",
                                    "absolute inset-x-0 bottom-0 h-0.5"
                                )}
                            />
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Tab;
