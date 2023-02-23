import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    // console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;

  return (
    <>
      <header className={classes}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/ramadan">
              Ramadan
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">.</span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/challange">
                    30 days Chalange
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink></NavLink>
                  <NavLink className="nav-link" href="#">
                    Link
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
