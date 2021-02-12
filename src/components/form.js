import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastName: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      name: e.target.name.value,
      lastName: e.target.lastname.value,
    }));
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label> <br />
          <input name="name" />
          <br />
          <label>Lastname</label>
          <br />
          <input name="lastname" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
