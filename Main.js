import React from "react";

const Main = () => {
    return(
        <div className="main">
            <div className="col col1">
                <h2>INSURE</h2>
                <p><h2>In here, You can select whatever PLANS you want h.</h2><br /><h2>If you want to select more, just click the button.</h2></p>
                <button type="button">More</button>
                <i><p>To buy a property click here soon!</p></i><button type="button">BUY</button><br/>
                <i><p>Searching a property for rent then click here soon!</p></i><button type="button">RENT</button><br/>
                <i><p>Here is an opportunity for buying a plots so click here soon!</p></i><button type="button">PLOT</button><br/>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    );
}
export default Main;