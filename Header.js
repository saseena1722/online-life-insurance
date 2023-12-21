import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>SECURE</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/"><h2>POLICIES</h2></a></li>
                    <li><a href="/"><h2>PLANS</h2></a></li>
                    <li><a href="/about"><h2>ABOUT</h2></a></li>
                    <li><a href="/"><h2>CONTACT</h2></a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button"><h2>SIGNUP</h2></button>
            </div>
        </div>
    );
}
export default Header;