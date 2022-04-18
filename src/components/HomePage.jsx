import React, { Component } from 'react';
import { Link } from "react-router-dom";
class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<div>
            <h1>welcome in our site</h1>

            <Link className="btn btn-primary m-2" to="/login">login</Link>
            <Link className="btn btn-primary m-2" to="/signup">signup</Link>
        </div>);
    }
}

export default HomePage;