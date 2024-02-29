import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


describe("Testing the Header Component", () => {
    it("should load the login button", () => {
        // Rendering
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
            //Querying
            const loginButton = screen.getByRole("button", {name: "Login"});

            // Assertion
            expect(button).toBEInTheDocument();

    });

    // For testing the onClick function we can import fireEvent from @testing-library/react

    it("should change the login into logout by onClick", () => {
        // Rendering
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
            //Querying
            const loginButton = screen.getByRole("button", {name: "Login"});

            fireEvent.click(loginButton);

            const logoutButton = screen.getByRole("button", {name: "Logout"});
            // Assertion
            expect(logoutButton).toBEInTheDocument();

    });
});