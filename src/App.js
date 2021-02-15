import React from "react";
import Header from "./components/Header";
import "./App.css";
import Posts from "../src/components/Posts";
import "../src/components/Posts.css";

import { Component } from "react";
import Counter from "../src/components/Counter";
import Form from "../src/components/Form";
import Profile from "../src/components/Profile";

class App extends Component {
  state = {
    posts: [
      {
        img: "",
        name: "Jane",
        text: "Hi, how are you?",
        id: 1,
      },
      {
        img: "",
        name: "Tom",
        text: "Hi, how are you",
        id: 2,
      },
      {
        img: "",
        name: "Ann",
        text: "Hi, how are you",
        id: 3,
      },
      {
        img: "",
        name: "Eva",
        text: "Hi, how are you",
        id: 4,
      },
      {
        img: "",
        name: "Bob",
        text: "Hi, how are you",
        id: 5,
      },
      {
        img: "",
        name: "Lana",
        text: "Hi, how are you",
        id: 6,
      },
    ],
  };

  render() {
    return (
      <div className="myDiv">
        <Header className="header" />
        {/* <Counter /> */}
        <Form className="register" />
        {/* <Profile /> */}
        <Posts posts={this.state.posts} className="posts" />
      </div>
    );
  }
}

export default App;
