import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ updateUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [proPic, setProPic] = useState("");
  const [location, setLocation] = useState("");
  const [subscriber, setSubscriber] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        pro_pic: proPic,
        location: location,
        subscriber: subscriber,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          history.push(`/`);
        });
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function loginPush(e) {
    e.preventDefault();
    history.push(`/login`);
  }

  return (
    <div className="signup">
        <form className="signup-form" onSubmit={onSubmit}>
            <label> Email: </label>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label> First Name: </label>
            <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label> Last Name: </label>
            <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <label> Profile Picture: </label>
            <input type="text" name="pro_pic" value={proPic} onChange={(e) => setProPic(e.target.value)}/>
            <label> Location: </label>
            <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
            <label> Account Type: </label>
            <select name="subscription" value={subscriber} onChange={(e) => setSubscriber(e.target.value)}>
                <option value="">Premium</option>
                <option value="">Free</option>
            </select>
            <label> Password: </label>
            <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">
                Sign Up
            </button>
        </form>
        <label>{isLoading ? "Loading..." : null}</label>
        {errors ? <div className="errors">{errors} </div> : null}
        <div> Already a Member? </div>
        <button onClick={loginPush}> Log In </button>
    </div>
  );
}

export default Signup;
