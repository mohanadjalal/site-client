import React, { Component } from "react";
import axios from "axios";
import Input from "./Input";

import Config from "../../config/config";
import { getAccessTokens } from "../../utils/accessToken";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      file:{}
    };
  }

  handelChange = ({ target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
   
  };
  handelFile = (currentTarget) => {
    const { target } = currentTarget;

    const file = target.files[0]
    this.setState({ file })
}

  handelSubmit = (e) => {
    e.preventDefault()
    const { data } = this.state
    const form = new FormData();

    form.append("image", this.state.file)

    for (const key in data) {
        form.append(key, data[key])
    } 
     
    axios.put(
      Config.PROFILE_ENDPOINT ,
       
      form,
      {headers:{  "x-access-token" : getAccessTokens()  ,  "Content-Type":"multipart/form-data; boundary=<calculated when request is sent>"   }}
      
      ).then(res=>{console.log(res)}).catch(err=>{console.error(err);})
  };

  render() {
    return (
      <form className="m-3 p-4 bg-dark text-white border border-3 border-primary rounded"   >
        <h3 className="text-center">Edit Profile Info</h3>
        <div className="m-2">
          <label htmlFor="image" className="form-label">
            Update Profile Picture{" "}
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="form-control form-control "
            onChange={this.handelFile}
            accept="image/*"
          />
        </div>
        <Input
          type="text"
          label="Full Name"
          name="name"
          placeholder="Full Name"
          onChange={this.handelChange}
        />
        <Input
          type="email"
          label="E-mail"
          name="email"
          placeholder="example@some.com"
          onChange={this.handelChange}
        />
        <div className="m-2">
          <label htmlFor="about" className="form-label">
            About
          </label>
          <textarea
            className="form-control"
            rows="6"
            onChange={this.handelChange}
            name="about"
          ></textarea>
        </div>
        <div className="m-2 ">
          <input
            type="submit"
            value="Save"
            className="btn btn-primary"
            onClick={this.handelSubmit}
          />
        </div>
      </form>
    );
  }
}

export default EditProfile;
