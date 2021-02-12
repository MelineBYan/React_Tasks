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
<<<<<<< HEAD
          <label>Name</label> <br />
=======
>>>>>>> 8f6b920e11f60051cc8d711c39da3e54928f9d27
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
