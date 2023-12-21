import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


const Home = () => {
  return (
      <div className="home">
        <Header />
        <Main />        
          <Footer/>
        
      </div>
  );
};

export default Home;
