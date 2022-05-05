import React, { Component } from "react";
import { Link } from "react-router-dom";


import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { removeAccessTokens } from "../../utils/accessToken";
import "./navbar.css"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: (this.props.user) ? true : false };
  }


  handelLogout = () => {
    removeAccessTokens();
    window.location.reload(false);
  };
  toProfile = () => {
    window.location.replace("/profile")

  }

  render() {

    return (
      <nav className="navbar navbar-light bg-dark text-white">
        <div className="container-fluid">
          <Link className="home-link " to="/">
            Home
          </Link>
          {this.props.user ? this.renderUser() : this.renderGuest()}
        </div>
      </nav>
    );
  }
  renderUser = () => {
    const user = this.props.user;
    return (
      <div className="  ">

        <Link to="/profile" className="link-profile  " > <FontAwesomeIcon icon={faUser} style={{ fontSize: "24px", marginRight: "5px" }} />
          {user.username}</Link>


        <span onClick={this.handelLogout} className="" style={{ color: "dodgerblue", }}>
          Logout
        </span>
      </div>
    );
  };
  renderGuest = () => {
    return (
      <div className="link-btns">
        <Link className="link-btn link-login" to="/login">
          Login
        </Link>
        <Link className="link-btn link-signup" to="/signup">
          Signup
        </Link>
      </div>
    );
  };
}

export default NavBar;
