import React from "react";
import Header from "./components/Header";
import "./App.css";
import Product from "./components/Product";
import "./components/Product.css";
import "../src/components/Product.css";

import { Component } from "react";
import Counter from "../src/components/Counter";
import Form from "../src/components/Form";

class App extends Component {
  state = {
    products: [
      {
        img: "/images/image1.webp",
        name: "juice",
        price: "8686",
        id: 1,
      },
      {
        img: "/images/image2.webp",
        name: "juice",
        price: "8246",
        id: 2,
      },
      {
        img: "/images/image3.webp",
        name: "juice",
        price: "4564",
        id: 3,
      },
      {
        img: "/images/image4.webp",
        name: "juice",
        price: "8686",
        id: 4,
      },
      {
        img: "/images/image5.webp",
        name: "juice",
        price: "8246",
        id: 5,
      },
      {
        img: "/images/image6.webp",
        name: "juice",
        price: "4564",
        id: 6,
      },
    ],
  };

  render() {
    return (
      <div className="myDiv">
        <h1> My profile</h1>
        <Header />
        <Counter />
        <Form />
        <Product products={this.state.products} className="product" />
      </div>
    );
  }
}

export default App;
