import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    const { products } = this.props;
    const productList = products.map((prod) => (
      <div key={prod.id} className="product">
        <p>
          <img src={prod.img} alt="img" />
        </p>
        <p>{prod.name}</p>
        <p>{prod.price}</p>
      </div>
    ));

    return <div>{productList}</div>;
  }
}
export default Product;
