import React from "react";

import "./HeaderNavbar.css";

function HeaderNavbar() {
    return (
        <div>
            <div className="header-navigation">
                <div className="header-navigation__link">Learn</div>
                <div className="header-navigation__link">Individual</div>
                <div className="header-navigation__link">Experts</div>
                <button className="header-navigation__button">
                    Login/Register
                </button>
            </div>
        </div>
    );
}

export default HeaderNavbar;
