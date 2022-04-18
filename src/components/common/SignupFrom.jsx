import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Input from './Input';
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "",

                password: "",

                email: "",
                roles: ["user"]

            }
            ,
            user: null
            ,
            errors: {}
        }
    }

    handelChange = ({ target }) => {
        const data = { ...this.state.data }
        data[target.name] = target.value;
        this.setState({ data })

    }

    handelSubmit = async () => {

        try {
            const res = await axios.post("http://localhost:8080/api/auth/signup", this.state.data)
            alert("done")
            this.setState({ user: res.data })
            console.log("user is signed successfuly")


        } catch (err) {
            console.error(err)
        }

    }

    render() {
        return (<div>
            <h2>signup </h2>
            {this.state.user && <Navigate to="/" replace={true} />}
            <Input
                type="text"
                className="form-control"
                id="username"
                label="Username"
                onChange={this.handelChange}
                name="username"
                placeholder="enter username"
            />
            <Input
                type="text"
                className="form-control"
                id="email"
                label="Email"
                onChange={this.handelChange}
                name="email"
                placeholder="someone@any.com"
            />

            <Input
                type="password"
                className="form-control"
                id="password"
                label="Password"
                onChange={this.handelChange}
                name="password"
                placeholder="enter password"
            />

            <button className='btn btn-primary' onClick={this.handelSubmit}>Signup</button>

        </div>);
    }
}

export default SignupForm;