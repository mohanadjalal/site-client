import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

import HomePage from "./HomePage";
import SignupForm from "./common/SignupFrom";
import LoginForm from "./common/LoginForm";
import NavBar from "./common/NavBar";
import NotFound from "./common/NotFound";
import Profile from "./Profile";
import EditProfile from "./common/EditProfile"

import { getAccessTokens } from "../utils/accessToken";
import Config from "../config/config"



class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    user: null,
  };

  async componentDidMount() {

    const tokens = getAccessTokens();

    if (tokens) {
      try {
        const res = await axios.get(Config.PROFILE_ENDPOINT, {
          headers: { "x-access-token": tokens },
        });
        this.setState({ user: res.data });
      } catch (err) {
        console.log(err);
      }
    }
  }

  handelLogin = (user) => {
    this.setState({ user });
  };



  render() {
    const user = this.state.user
  
    return (
      <BrowserRouter>
        <NavBar user={user} />
        <main className="container">
          <Routes>

            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/login"
              element={<LoginForm handelLogin={this.handelLogin} />}
            />
            <Route path="/" element={<HomePage />} />

            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

export default Main;
