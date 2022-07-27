import React from "react";
import image from "./images/main.svg";

import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home-main">
                <div className="home-main__wrapper">
                    <h1 className="home-main__title">Invest in</h1>
                    <div className="home-main__title-categories">
                        <h1 className="category category-1">Gold Bonds</h1>
                        <h1 className="category category-2">Stocks</h1>
                        <h1 className="category category-3">CryptoCurrency</h1>
                        <h1 className="category category-4">Portfolio Stocks</h1>
                        <h1 className="category category-5">Fixed Deposit</h1>
                    </div>
                </div>
                <div className="home-main__text">Start Investing in a single click.</div>
                <button className="home-main__button">Get Started</button>
            </div>
            <img className='svg' src={image} alt="figure"></img>
        </div>
    );
}

export default Home;
