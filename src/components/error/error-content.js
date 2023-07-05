import React from "react";

const ErrorContent = ({errorCode, errorPrimaryText, errorSecondaryText}) => {
    return (
        <>
            <p className="text-base font-semibold leading-8 text-white">{errorCode}</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {errorPrimaryText}
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
                {errorSecondaryText}
            </p>
        </>
    );
};

export default ErrorContent;
