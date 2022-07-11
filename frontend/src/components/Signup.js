import React, { Component, useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          username: username,
          password: password,
          admin: admin,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setMessage("User created successfully");
      } else {
        setMessage("Error creating user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-12">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control align-content-center"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control align-content-center"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <label for="username">Username:</label>
          <input
            type="text"
            class="form-control align-content-center"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group col-md-12">
          <label for="password">Password:</label>
          <input
            type="password"
            class="form-control align-content-center"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      
          <button type = "submit">Signup</button>
       
        <div classname= "message">{message ? <p>{message}</p>  : null}</div>
      </form>
    </div>
  );
}
export default Signup;
