// using the React.Component will make the class as a component.and we also have to import React from react.

import React from "react";
import User from "./User";

class UserClass extends React.Component {

    // class base component has a render method to return some piece of JSX

    constructor(props) {
        super(props);

        // console.log("Child contructor");

        // There is no hook used in class based components. Following are the method for state variable

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https:/Dummy _avatar",
            }
        };
    }

    async componentDidMount() {
        // console.log("Child componentDidMount called");
        // componentDidMount is used to make an API call

        const data = await fetch("https://api.github.com/users/AbdulaleemMughal");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json.data);

    };

    componentDidUpdate() {
        console.log("Component Did Update is Called");
    };

    componentWillUnmount() {
        console.log("Component Will Unmount is Called");
    };

    render() {
        // console.log("Child Render");

        // const { name, location } = this.props;

        const { name, public_repos, avatar_url} = this.state.userInfo;

        return (
            <div className="container">
                <div className="user-card">
                    <img src={avatar_url}/>
                    <h2>Name: {name}</h2>
                    <h3>Location: {public_repos}</h3>
                    <h4>Contact: @AbdulaleemMughal</h4>
                </div>
            </div>
        );

    }
};

export default UserClass;


/**
 * ------Mounting life Cycle -----
 * 
 * Constructor is called  (with dummy data)
 * 
 * Render is called  (with dummy data)
 *          < Dummy Html >
 * 
 * Component Did Mount Called
 *      < API call >
 *      < thisState will be called there >
 * 
 * ------Updating life Cycle -----
 * Render with API data
 * < HTML data which is fetched with API>
 * 
 * Componentdidupdate is called
 * 
 * 
 */