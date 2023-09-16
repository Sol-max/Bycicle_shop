import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [hideButtons, sethideButtons] = useState(true);

  // Function to toggle the display of additional buttons
  const toggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  // Function to hide the previous buttons
  const hideButton = () => {
    sethideButtons(!hideButtons);
  };

  return (
    <nav className="navbar navbar-box navbar-dark navbar-expand-lg">
      <div className="container-fluid navbar-container d-flex">
	  		<Link to="/">
          <img src={logo} className="img" alt="logo" />		
        </Link>
        <div className="menu">
          <div className="dropdown mb-3 language">
            <button
              className="btnlanguage dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English - Euro <i className="fa-solid fa-chevron-down"></i>
            </button>
            <ul className="dropdown-language dropdown-menu">
              <li>
                <label className="form-label my-form-label">Language</label>
                <input type="text" className="form-control mb-3" id="exampleFormControlInput1" />
              </li>
              <li>
                <label className="form-label my-form-label">Currency</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
              </li>
              <br />
              <button className="form-btn">
                APPLY
              </button>
            </ul>
          </div >
          <button
            onClick={() => {
              toggleAdditionalButtons();
              hideButton();
            }}
            className="navbar-toggler my-navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse my-collapse navbar-collapse justify-content-end dropdown ${showAdditionalButtons ? "active" : ""}`} id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link className="link-collapse" to="/">
                <button className="btn my-btn toggler">
                  Contact Us
                </button>
              </Link>
              <Link className="link-collapse" to="/">
                <button className="btn my-btn toggler">
                  About Us
                </button>
              </Link>
              <div>
               </div> 
						<div className="link-collapse dropdow">
							<button
								className="btn my-btn toggler custom-dropdown-toggle"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseProducts"
								aria-expanded="false"
								aria-controls="collapseExample"
							>
								Products
							</button>
						</div>
						<div className="collapse" id="collapseProducts">
                <ul className="card card-body my-dropdown-menu">
                  <li>
                    <button className="dropdown-item my-dropdown-item">
                      Road Bikes
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-dropdown-item">
                      Mountain Bikes
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-dropdown-item">
                      Hybrid Bikes
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-dropdown-item">
                      Speciality Bikes
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-dropdown-item">
                      BMX Bikes
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-dropdown-item">
                      Kid's Bikes
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item my-dropdown-item">
                      Other types
                    </button>
                  </li>
                </ul>
              </div>
              {hideButtons && (
                <>
                  <Link className="link-collapse" to="/">
                    <i className="icon fa-solid fa-magnifying-glass"></i>
                  </Link>
                  <Link className="link-collapse" to="/profile">
                    <i className="icon fa-regular fa-user"></i>
                  </Link>
                  <Link className="link-collapse" to="/ShoppingCart">
                    <i className="icon fa-solid fa-cart-shopping" tabIndex="-1"></i>
                  </Link>
                </>
              )}
              {showAdditionalButtons && (
                <>
                  <Link className="link-collapse" to="/">
                    <i className="icon fa-solid fa-magnifying-glass"></i> Search
                  </Link>
                  <Link className="link-collapse" to="/login">
				  	        Login
                  </Link>
                  <Link className="link-collapse" to="/signup">
				  	        Register
                  </Link>
                  <Link className="link-collapse" to="/ShoppingCart">
				           <i className="icon fa-solid fa-cart-shopping" tabIndex="-1"></i> Cart
                  </Link>
                  <Link className="link-collapse" to="/">
                    Give us your feedback
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};