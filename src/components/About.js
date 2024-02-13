import { LOGO_URL } from "../utils/constant";

const About = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
                </div>
                <div className="nav-item">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Cart</a></li>
                        <button className="login" onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>{btnName}</button>
                    </ul>
                </div>
            </div>

            <div className="about">
                    <h1>About Us</h1>
                    <h2>This is Namaste React Web Series.....</h2>
            </div>
        </div>

    );
}

export default About;