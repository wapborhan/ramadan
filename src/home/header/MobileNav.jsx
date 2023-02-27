import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <ul className="mb-0 list-unstyled w-100">
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
  );
};

export default MobileNav;
