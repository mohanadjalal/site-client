import axios from "axios";
import React, { Component } from "react";

import Config from "../config/config";
import { getAccessTokens } from "../utils/accessToken";
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

  render() {
    const user = this.state.user;

    if (user) {
      console.log(user.pImg.path);
    }
    return (
      <div>
        <div className="">
          <img src={user} alt="profile Pic" />
        </div>
      </div>
    );
  }
}

export default Profile;
