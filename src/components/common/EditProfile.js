import React, { Component } from "react";
import Input from "./Input";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  handelChange = ({ target }) => {
    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data });
    console.log(target);
  };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
  };

  render() {
    return (
      <form className="m-3 p-4 bg-dark text-white border border-3 border-primary rounded">
        <h3 className="text-center">Edit Profile Info</h3>
        <div className="m-2">
          <label htmlFor="img" className="form-label">
            Update Profile Picture{" "}
          </label>
          <input
            type="file"
            id="img"
            className="form-control form-control "
            style={{}}
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
          <label htmlFor="img" className="form-label">
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
