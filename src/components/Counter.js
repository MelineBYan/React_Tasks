import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.handler = this.handler.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    if (this.state.count) {
      this.setState((state) => ({
        count: state.count - 1,
      }));
    }
  }
  handler() {
    console.log("Mouseover event");
  }
  reset() {
    this.setState((state) => ({
      count: 0,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset} onMouseOver={this.handler}>
          Reset
        </button>
        <h1>Current:{this.state.count}</h1>
        {}
      </div>
    );
  }
}
export default Counter;
