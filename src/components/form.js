import React, { Component, useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      {
        name: e.target.name.value,
        lastName: e.target.lastname.value,
        age: e.target.age.value,
      },
    ]);
  };
  console.log(users);
  const remove = (e) => {
    console.log(e.target.id);
    setUsers([users.filter((user, i) => i !== e.target.id)]);
  };

  return (
    <div className="form">
      <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" placeholder="Enter name" required />
        <label>Lastname</label>
        <input
          name="lastname"
          type="text"
          placeholder="Enter lastname"
          required
        />
        <label>Age</label>
        <input name="age" type="number" placeholder="Enter age" required />
        <button className="btn">Sign up</button>
      </form>
      <div>
        {users ? (
          users.map((user, i) => (
            <div key={i} className="userData">
              Name: {user.name}
              <button className="delete" id={uuidv4()} onClick={remove}>
                X
              </button>
              <br />
              Lastname: {user.lastName}
              <br />
              Age: {user.age}
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
