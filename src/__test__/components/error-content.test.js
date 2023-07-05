import { render } from "@testing-library/react";
import * as React from "react";
import ErrorContent from "../../components/error/error-content";

describe("ErrorContent", () => {
    it("will match snapshot", () => {
        expect(render(<ErrorContent />)).toMatchSnapshot();
    });
});
