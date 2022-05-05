import axios from "axios";
import React, { Component } from "react";

import UserProfile from "./common/UserProfile";

import Config from "../config/config";
import { getAccessTokens } from "../utils/accessToken";

import "./profile.css";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

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

  handelEdit = () => {
    console.log("done");
  };

  render() {
    let user, path;
    if (!this.state.user) {
    } else {
      user = this.state.user;
      path = Config.HOST + user.pImg.path;
      return (
        <UserProfile user={user} path={path} handelEdit={this.handelEdit} />
      );
    }
  }
}

export default Profile;
