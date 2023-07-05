import React from "react";
import { Link } from "react-router-dom";
import { HOME_PATH } from "./nav";
import ErrorContent from "./error/error-content";

const NotFound = () => {
    return (
        <main className="fixed top-0 left-0 isolate min-h-screen w-full">
            <img
                src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <ErrorContent 
                    errorCode="404"
                    errorPrimaryText="Page not found"
                    errorSecondaryText="Sorry, we couldn’t find the poll you’re looking for."
                />
                <div className="mt-10 flex justify-center">
                    <Link
                        to={HOME_PATH}
                        className="text-sm font-semibold leading-7 text-white"
                    >
                        <span aria-hidden="true">&larr;</span> Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
