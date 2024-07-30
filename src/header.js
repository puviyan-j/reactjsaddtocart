import React from "react";
import { Link } from "react-router-dom";

function Header({ lrs }) {
  return (
    <div className="header">
      <h3 className="head-h3">
        {" "}
        <Link to="/">Shopping</Link>{" "}
      </h3>
      <div className="cart">
        <span>
          {" "}
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="count">{lrs}</span>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
