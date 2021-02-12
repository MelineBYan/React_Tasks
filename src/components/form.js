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

  nameHandler(e) {
    this.setState((state) => ({
      name: e.target.value,
    }));
  }
  render() {
    return (
      <div>
        <form>
          <input onchange={this.nameHandler} />
          <input onchange={this.lastNameHandler} />
        </form>
      </div>
    );
  }
}
export default Form;
