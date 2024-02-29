import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    })
});


it("Should load the Restaurant Menu Component", async () => {
    await act(async () => render(<RestaurantMenu />))
});