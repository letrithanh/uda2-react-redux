import React, { useEffect } from "react";
import { _getUsers } from "../_DATA";
import { useDispatch, useSelector } from "react-redux";
import { updateAll } from "../slices/user";

const LeaderBoard = () => {

    const users = useSelector((state) => state.user.all);
    const dispatch = useDispatch();

    useEffect(() => {
        _getUsers()
            .then((onfulfilled) => {
                const allUsers = Object.values(onfulfilled);
                const sortedUsers = allUsers.sort((u1, u2) => {
                    return (Object.keys(u2.answers).length + u2.questions.length) - (Object.keys(u1.answers).length + u1.questions.length);
                });
                dispatch(updateAll(sortedUsers));
            });
    })

    return (
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
            {
                users &&
                <div className="flow-root p-4">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                        >
                                            User
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Answered
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Created
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                <div className="flex items-center">
                                                    <div className="h-11 w-11 flex-shrink-0">
                                                        <img
                                                            className="h-11 w-11 rounded-full"
                                                            src={user.avatarURL}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">
                                                            {user.name}
                                                        </div>
                                                        <div className="mt-1 text-gray-500">
                                                            {user.id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                <div className="text-gray-900">
                                                    {Object.keys(user.answers).length}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                <div className="text-gray-900">
                                                    {user.questions.length}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default LeaderBoard;
