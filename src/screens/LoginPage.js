import React, { useState } from "react";
import HomePage from "./HomePage";
import "./screens.scss";
const LoginPage = () => {
  const users = [
    {
      username: "micun",
      password: "Boopro2021",
    },
  ];
  const errors = {
    uname: "invalid username or does not exist",
    pass: "invalid password",
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const handleSubmit = (e) => {
    e.preventDefault();
    var { uname, pass } = document.forms[0];

    const userData = users.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        localStorage.setItem("token", "token");
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const formContainer = (
    <div className="loginContainer">
      <div className="formContainer">
        <h1>Welcome to our Movie Application</h1>
        <h3>Please login to continue</h3>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              type="text"
              name="uname"
              placeholder="Username (micun)"
              required
            />
            {handleErrorMessage("uname")}
          </div>
          <div className="inputContainer">
            <input
              type="password"
              name="pass"
              placeholder="Password (Boopro2021)"
              required
            />
            {handleErrorMessage("pass")}
          </div>
          <div className="inputContainer">
            <input type="submit" value="Enter" className="button" />
          </div>
        </form>
      </div>
    </div>
  );
  return isSubmitted ? <HomePage /> : formContainer;
};

export default LoginPage;
