import { render } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
});


it("Shuold render the body component with the search bar", async () => {

    // Whenever your component have fetch or useState hook you need to to wrap the render method into the act function. act fn will return a promise threfore we have to make it aysnc function.
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

}); 