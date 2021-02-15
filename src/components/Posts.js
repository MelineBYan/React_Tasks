import React, { Component } from "react";
import "./Posts.css";

class Posts extends Component {
  render() {
    const { posts } = this.props;
    const productList = posts.map((post) => (
      <div key={post.id} className={this.props.className}>
        <p>
          <img src={post.img} alt="img" />
        </p>
        <p>{post.name}</p>
        <p>{post.text}</p>
      </div>
    ));

    return <div>{productList}</div>;
  }
}
export default Posts;
