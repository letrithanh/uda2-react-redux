import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "./nav";
import { loggin } from "../slices/user";
import { _getUsers } from "../_DATA";
import { clean } from "../slices/navigation";

const Login = () => {
    const userId = useSelector((state) => state.user.info?.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const visitPath = useSelector((state) => state.navigation.path);

    useEffect(() => {
        if (userId && !visitPath) {
            navigate(HOME_PATH);
        }

        if (userId && visitPath) {
            navigate(visitPath);
            clean();
        }
    }, [userId, navigate, visitPath]);

    const [username, setUsername] = useState("sarahedo");
    const [password, setPassword] = useState("password123");
    const [isSubmitted, setSubmitted] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        if (!username || !password) {
            setSubmitted(true);
            return;
        }
        
        _getUsers()
            .then((onfulfilled) => {
                setSubmitted(true);
                return onfulfilled[username]
            })
            .then((user) => {
                if (user && user.password === password) {
                    dispatch(loggin(user));
                }
            });
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form className="space-y-6" autoComplete="off">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={username}
                                        onChange={(event) =>
                                            setUsername(event.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        data-testid="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {
                                isSubmitted && 
                                userId == null &&
                                <div className="text-red-500 bg-red-50 w-full rounded-md px-3 py-1.5 grid place-items-center" data-testid="message">
                                    Your credential is invalid!!!
                                </div>
                            }

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={onSubmit}
                                    data-testid="submit-sign-in"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
