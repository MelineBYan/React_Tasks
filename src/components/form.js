import React, { Component, useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      regexp.test(e.target.email.value) &&
      e.target.password.value.length > 5
    ) {
      const newUser = {
        id: uuidv4(),
        name: e.target.name.value,
        email: e.target.email.value,
        age: e.target.age.value,
        password: e.target.password.value,
      };

      fetch("https://class-chat-server-app.herokuapp.com/users/", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err.message));
    } else {
      alert("Please, enter valid values");
    }
  };

  const remove = (id) => {
    const newList = users.filter((elem) => elem._id !== id);
    setUsers([...newList]);
  };

  const getAlUsers = (e) => {
    fetch("https://class-chat-server-app.herokuapp.com/users/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setUsers([...res]);
        console.log(res);
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="form">
      <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="name" type="text" placeholder="Enter name" required />
        <label>Email</label>
        <input name="email" type="text" placeholder="Enter email" required />
        <label>Age</label>
        <input name="age" type="number" placeholder="Enter age" required />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          required
        />
        <label>Confirm password</label>
        <input
          name="passwordConfirm"
          type="password"
          placeholder="Confirm password"
          required
        />
        <button className="btn">Sign up</button>
        <button type="button" className="btn" onClick={getAlUsers}>
          Get All Users
        </button>
      </form>
      <div>
        {users ? (
          users.map((user) => (
            <div key={user._id} className="userData">
              Name: {user.name}
              <button className="delete" onClick={() => remove(user._id)}>
                X
              </button>
              <br />
              Lastname: {user.email}
              <br />
              Age: {user.age}
              <br />
              password: {user.password}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Form;
