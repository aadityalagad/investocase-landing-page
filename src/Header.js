import SearchIcon from "@material-ui/icons/Search";
import image from "./images/logo.png";
import HeaderNavbar from "./HeaderNavbar";
import MenuIcon from "@material-ui/icons/Menu";

import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img src={image} alt="logo" className="header-logo"></img>

            <div className="header-search">
                <input
                    className="header-search__input"
                    placeholder="Search"
                    id="search"
                ></input>
                <SearchIcon className="header-search__icon" />
            </div>

            <HeaderNavbar />
            <div className="header-hamburger-menu">
                <MenuIcon />
            </div>
        </div>
    );
}

export default Header;
