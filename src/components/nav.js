import React from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils/class-name-utils";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { loggout } from "../slices/user";

export const HOME_PATH = "/";
export const QUESTION_PATH_PARAM = "/questions"
export const QUESTION_ID_PATH_PARAM = ":question_id"
export const QUESTION_PATH = `${QUESTION_PATH_PARAM}/${QUESTION_ID_PATH_PARAM}`
export const LOGIN_PATH = "/login";
export const LEADER_BOARD_PATH = "/leader-board";
export const NEW_PATH = "/new";
export const NOT_FOUND_WILDCARD = "*";

const NavigationBar = () => {

    const user = useSelector((state) => state.user.info);
    const dispatch = useDispatch();
    const pathName = useLocation().pathname;

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <Link
                                            to={HOME_PATH}
                                            className={classNames(
                                                "rounded-md px-3 py-2 text-sm font-medium",
                                                pathName === HOME_PATH ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            )}
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to={LEADER_BOARD_PATH}
                                            className={classNames(
                                                "rounded-md px-3 py-2 text-sm font-medium",
                                                pathName === LEADER_BOARD_PATH ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            )}
                                        >
                                            Leaderboard
                                        </Link>
                                        <Link
                                            to={NEW_PATH}
                                            className={classNames(
                                                "rounded-md px-3 py-2 text-sm font-medium",
                                                pathName === NEW_PATH ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            )}
                                        >
                                            New
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex items-center">
                                    {
                                        !user ?
                                        <Link
                                            to={LOGIN_PATH}
                                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                        >
                                            Login
                                        </Link> :
                                        /* Profile dropdown */
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm">
                                                    <span className="sr-only">
                                                        Open user menu
                                                    </span>
                                                    <div className="flex gap-2 items-center">
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src={user.avatarURL}
                                                            alt={user.name}
                                                        />
                                                        <div className="text-base font-medium text-gray-300">
                                                            {user.name}
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <div
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                                                )}
                                                                onClick={() => dispatch(loggout())}
                                                            >
                                                                Logout
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    }
                                </div>
                            </div>
                            <div className="-mr-2 flex sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <Disclosure.Button
                                as="div"
                                href="#"
                                className={classNames(
                                    "block rounded-md px-3 py-2 text-base font-medium",
                                    pathName === HOME_PATH ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                )}
                            >
                                <Link className="w-full block" to={HOME_PATH}>
                                    Home
                                </Link>
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="div"
                                href="#"
                                className={classNames(
                                    "block rounded-md px-3 py-2 text-base font-medium",
                                    pathName === LEADER_BOARD_PATH ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                )}
                            >
                                <Link className="w-full block" to={LEADER_BOARD_PATH}>
                                    Leaderboard
                                </Link>
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="div"
                                href="#"
                                className={classNames(
                                    "block rounded-md px-3 py-2 text-base font-medium",
                                    pathName === NEW_PATH ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                )}
                            >
                                <Link className="w-full block" to={NEW_PATH}>
                                    New
                                </Link>
                            </Disclosure.Button>
                        </div>
                        <div className="border-t border-gray-700 pb-3 pt-4 z-50">
                            {
                                !user ?
                                <div className="space-y-1 px-2">
                                    <Link
                                        to={LOGIN_PATH}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Login
                                    </Link>
                                </div> 
                                :
                                <>
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={user.avatarURL}
                                                alt={user.name}
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-white">
                                                {user.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        <Disclosure.Button
                                            as="a"
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer"
                                            onClick={() => dispatch(loggout())}
                                        >
                                            Logout
                                        </Disclosure.Button>
                                    </div>
                                </>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default NavigationBar;
