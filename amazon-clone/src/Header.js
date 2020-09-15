// shortcut rfce
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthSign = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log("header", basket.length);
  return (
    <div className="header">
      {/* <div className="header__logo"> */}
      <img
        className="header__logo"
        alt="Amazon Logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/* http://pngimg.com/uploads/amazon/amazon_PNG11.png */}
      {/* </div> */}

      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="Enter your Query"
          type="text"
        ></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthSign} className="header__options">
            <span className="header__optionLineOne">
              Hello,
              {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__options">
          <span className="header__optionLineOne">
            <small>Return</small>
          </span>
          <span className="header__optionLineTwo">
            <strong>& orders</strong>
          </span>
        </div>

        <div className="header__options">
          <span className="header__optionLineOne">
            <small>Your</small>
          </span>
          <span className="header__optionLineTwo">
            <strong>Prime</strong>
          </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
          </div>
        </Link>

        <span className="header__optionLineTwo header__basketCount">
          {basket?.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
