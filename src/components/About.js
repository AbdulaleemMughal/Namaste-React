import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
                    <h2>This is Namaste React Web Series.....</h2>
                <UserClass name={"Abdul Aleem (class)"} location={"Islamabad (class)"} />
                </div>

            </div>
        );
    };
};

export default AboutUs;