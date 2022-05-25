import React from 'react';

import { Link } from "react-router-dom"
function UserProfile(props) { 
    const { path, user } = props

    return (
        <div>
            <div className="row py-5  ">
                <div className=" mx-auto">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    <img
                                        src={path}
                                        alt="..."
                                        width="130"
                                        className="rounded mb-2 img-thumbnail"
                                    />
                                    <Link
                                        className="btn btn-outline-dark btn-sm btn-block"
                                        to="/edit-profile"
                                    >
                                        Edit profile
                                    </Link>
                                </div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">{user.name}</h4>
                                    <p className="small mb-4">
                                        <i className="fas fa-map-marker-alt mr-2">City name</i>
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">215</h5>
                                    <small className="text-muted">
                                        <i className="fas fa-image mr-1"></i>Videos
                                    </small>
                                </li>

                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">3400</h5>
                                    <small className="text-muted">
                                        <i className="fas fa-user mr-1"></i>Likes
                                    </small>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="mb-0">About</h5>
                            <p>
                                {user.about}
                            </p>
                        </div>
                        <div className="py-4 px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Recent Videos</h5>
                                <Link to="/videos" className="btn btn-link text-muted">
                                    Show all
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-2 pr-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 mb-2 pl-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 pr-lg-1 mb-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div className="col-lg-6 pl-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        className="img-fluid rounded shadow-sm"
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

export default UserProfile;