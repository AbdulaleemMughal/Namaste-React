import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component {
    
    constructor(props) {
        super(props);

        // console.log("Parent Constructer");
    }

    componentDidMount() {
        // console.log("Parent com/ponentDidMount called");
    }

    render() {

        // console.log("Parent Render");

        return (
            <div>
                <div className="about">
                    <h1>About Us class component</h1>
                    <div>
                        User Login
                        <UserContext.Consumer>
                            {
                            ({LoggedInUser}) => 
                            <h1 className="text-xl font-bold">{LoggedInUser}</h1>}
                        </UserContext.Consumer>
                    </div>
                    <h2>This is Namaste React Web Series.....</h2>
                <UserClass name={"Abdul Aleem (class)"} location={"Islamabad (class)"} />
                </div>

            </div>
        );
    };
};

export default AboutUs;