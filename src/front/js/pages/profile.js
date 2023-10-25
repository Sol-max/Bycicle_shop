import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/profile.css";
import LogoutComponent from "../component/logout";
import { useUser } from "../component/userContext";
import { useTheme } from "../themeContext";

const Profile = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState("personal_data");
  const [showClass1, setShowClass1] = useState(false);
  const [showClass3, setShowClass3] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUser();
  const { theme } = useTheme(); 

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      getData(token);
      getOrdersToProfile(token); // Retrieve orders for the user.
    }
  }, []); 

  const getData = (token) => {
    axios({
      method: "GET",
      url: process.env.BACKEND_URL + "/profile",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        const res = response.data;
        console.log("Profile Data:", res);
        actions.setUserProfile(res);
      })
      .catch((error) => {
        console.error("An error occurred in getData:", error);
        if (error.response) {
          console.log("Error details:", error.response);
        }
      });
  }
  const getOrdersToProfile = (token) => {
    axios({
      method: "GET",
      url: process.env.BACKEND_URL + "/cart",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        const res = response.data;
        console.log("Orders Data:", res);
        setCart(res);
        console.log(cart);
      })
      .catch((error) => {
        console.error("An error occurred in getData:", error);
        if (error.response) {
          console.log("Error details:", error.response);
        }
      });
  }

  return (
    <div className="container-fluid min-height-100 profile-container " data-theme={theme}>
      <div className="row m-0">
        <h1 className="hello col-sm-2 col-md-2 col-lg-4 col-xl-4"> Hello, {store.user.name} </h1>
        {/*{show !== 'last_order' &&
          <div className="return-second col-sm-10 col-md-10 col-lg-8 col-xl-8">
            <Link onClick={() => setShow('last_order')} className="return-second" to="/profile">
              <i className="fa-solid fa-arrow-left"></i> Return to my profile
            </Link>
          </div>
        }*/}
      </div>
      <br />
      <div className="profile row">
        <div className="order-description col-4">
          <div className="my-order-description col-8">
            <p>Personal Data</p>
            {/*<p>Orders</p>*/}
          </div>
          <div>
            <p><i onClick={() => { setShow('personal_data'); setShowClass1(true); setShowClass3(false); }} className={`profile-fa fa-solid fa-chevron-down ${showClass1 ? 'profile-fa-active' : ''}`}></i></p>
            {/*<p><i onClick={() => { setShow('orders'); setShowClass1(false); setShowClass3(true); }} className={`profile-fa fa-solid fa-chevron-down ${showClass3 ? 'profile-fa-active' : ''}`}></i></p>*/}
          </div>
        </div>
        {show === 'last_order' && (
          <div className="order">
            <h3><i className="fa-solid fa-box-open"></i> Last Order</h3>
            <div className="details">
              <div className="details-data" >
                <p>Order: Nº {store.cart.bicycle_id}</p>
                <p>Price: {store.cart.price}</p>
                <p>Product: {store.cart.name}</p>
              </div>
            </div>
          </div>
        )}
        {show === 'personal_data' && (
          <div className="order">
            <h3>Personal Data</h3>
            <div className="details-data">
              <p>Username: {store.user.name} </p>
              <p>Email: {store.user.email} </p>
            </div>
          </div>
        )}
        {show === 'orders' && (
          <div className="order">
            <h3>Orders</h3>
              <div className="details-data">
                <p>Order: Nº {store.cart.id}</p>
                <p>Price: {store.cart.price}</p>
                <p>Product: {store.cart.name}</p>
              </div>
          </div>
        )}
      </div>
      <div className="btn-container">
        <br />
        <br />
        <LogoutComponent onLogout={() => {
          actions.logout();
          setIsLoggedIn(false)
          navigate('/');
        }} />
      </div>
    </div>
  );
};

export default Profile;
