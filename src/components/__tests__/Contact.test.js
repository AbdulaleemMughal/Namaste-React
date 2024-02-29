import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

descride("Testing the Contact Component", () => {

    // We can aloso write it intead of test

it("Should our Contact Component will be rendered", () =>{
        render(<Contact />);
        
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    
it("Should load button in contact component", () =>{
        render(<Contact />);
    // Quering
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    
    test("Should load input name in contact component", () =>{
        render(<Contact />);
        // Quering
        const button = screen.getAllByPlaceholderText("name");
    
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load the input box in contact component", () => {
        render(<Contact />);
    // Quering
        const inputBoxes = screen.getAllByRole("textbox")
    
        // Assertion
        expect(textbox).toBe(2);
    });

});

