/* eslint-disable testing-library/prefer-screen-queries */
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../../components/login";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/store";

describe("Login", () => {
    it("will display an error if the password is provided an empty value.", () => {
        let view = render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <Login />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
        let password = view.getByTestId("password");
        fireEvent.change(password, { target: { value: '' } });
        let submitBtn = view.getByTestId("submit-sign-in")
        fireEvent.click(submitBtn);

        expect(view.getByTestId('message')).toBeInTheDocument();
    });
});
