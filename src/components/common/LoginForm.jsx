import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import Input from './Input';
import Config from '../../config/config';
import { setAccessTokens } from '../../utils/accessToken';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "",

                password: "",

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
            const res = await axios.post(Config.LOGIN_ENDPOIN, this.state.data)
            alert("done")
            setAccessTokens(res.data.accessToken)
            this.setState({ user: res.data })
            console.log("user is logining successfuly")
            this.props.handelLogin(res.data)


        } catch (err) {
            console.error(err)
        }

    }

    render() {

        return (<div style={{ width: "50%", margin: "auto" }}>
            <h2>Login </h2>
            {this.state.user && <Navigate to="/" replace={true} />
            }
            <Input
                type="text"
                className="form-control"
                id="username"
                label="username"
                onChange={this.handelChange}
                name="username"
                placeholder="enter username"
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
            <button className='btn btn-primary' onClick={this.handelSubmit}>Login</button>
        </div>);
    }
}

export default LoginForm;