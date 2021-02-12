import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastName: "",
    };
    this.nameHandler = this.nameHandler.bind(this);
  }

  handleSubmit(e) {
    this.setState((state) => ({
      name: e.target.name.value,
      lastname: e.target.lastName.value,
    }));
  }
  render() {
    return (
      <div>
        <form>
          <input name="name" />
          <input name="lastname" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
