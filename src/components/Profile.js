import axios from "axios";
import React, { Component } from "react";

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

  render() {
    let user, path;
    if (this.state.user) {
      user = this.state.user;
      path = Config.HOST + user.pImg.path;

      return (
        <div>
          <div class="row py-5  ">
            <div class=" mx-auto">
              <div class="bg-white shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-4 cover">
                  <div class="media align-items-end profile-head">
                    <div class="profile mr-3">
                      <img
                        src={path}
                        alt="..."
                        width="130"
                        class="rounded mb-2 img-thumbnail"
                      />
                      <a href="#" class="btn btn-outline-dark btn-sm btn-block">
                        Edit profile
                      </a>
                    </div>
                    <div class="media-body mb-5 text-white">
                      <h4 class="mt-0 mb-0">{user.name}</h4>
                      <p class="small mb-4">
                        <i class="fas fa-map-marker-alt mr-2">City name</i>
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
                <div class="bg-light p-4 d-flex justify-content-end text-center">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block">215</h5>
                      <small class="text-muted">
                        <i class="fas fa-image mr-1"></i>Videos
                      </small>
                    </li>

                    <li class="list-inline-item">
                      <h5 class="font-weight-bold mb-0 d-block">3400</h5>
                      <small class="text-muted">
                        <i class="fas fa-user mr-1"></i>Likes
                      </small>
                    </li>
                  </ul>
                </div>
                <div class="px-4 py-3">
                  <h5 class="mb-0">About</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam reprehenderit numquam distinctio enim, natus fugit
                    delectus facilis architecto deserunt neque incidunt quidem
                    dolorem officiis perspiciatis tempore. Iste corporis
                    voluptates ea.
                  </p>
                </div>
                <div class="py-4 px-4">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Recent Videos</h5>
                    <a href="#" class="btn btn-link text-muted">
                      Show all
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 mb-2 pr-lg-1">
                      <img
                        src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt=""
                        class="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div class="col-lg-6 mb-2 pl-lg-1">
                      <img
                        src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt=""
                        class="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div class="col-lg-6 pr-lg-1 mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        alt=""
                        class="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div class="col-lg-6 pl-lg-1">
                      <img
                        src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt=""
                        class="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
