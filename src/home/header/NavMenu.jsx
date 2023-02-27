import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="d-flex flex-wrap align-items-center justify-content-center">
      <div className="header-left">
        <ul className="mb-0 list-unstyled d-inline-flex">
          <li className="menu-item-has-children">
            <NavLink to="/pages/sura" title="আল কুরআন">
              আল কুরআন
            </NavLink>
          </li>
          <li className="menu-item-has-children">
            <NavLink to="/pages/allah-names" title="আল্লাহর নাম">
              আল্লাহর নাম
            </NavLink>
          </li>
          <li className="menu-item-has-children">
            <NavLink to="/pages/kalema" title="কালেমা">
              কালেমা
            </NavLink>
          </li>
          <li className="menu-item-has-children">
            <NavLink to="/pages/qurbani" title="কুরবানি">
              কুরবানি
            </NavLink>
            {/* <ul className="mb-0 list-unstyled">
              <li>
                <a to="products.html" title="">
                  Our Products
                </a>
              </li>
              <li>
                <a to="product-detail.html" title="">
                  Product Detail
                </a>
              </li>
              <li>
                <a to="cart.html" title="">
                  Product Cart
                </a>
              </li>
              <li>
                <a to="checkout.html" title="">
                  Product Checkout
                </a>
              </li>
            </ul> */}
          </li>
          <li className="menu-item-has-children">
            <NavLink to="/pages/tasbih" title="তাসবিহ">
              তাসবিহ
            </NavLink>
          </li>
          <li className="menu-item-has-children">
            <NavLink to="/pages/prayer-time" title="নামাজের সময়">
              নামাজের সময়
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
