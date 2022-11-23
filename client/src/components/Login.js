import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ updateUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }).then((res) => {
          setIsLoading(false);
          if (res.ok) {
            res.json().then((user) => {
              history.push(`/dashboard`);
              updateUser(user);
            });
          } else {
            res.json().then((err) => setErrors(err.errors));
          }
        });
      }
    
      function signupPush(e) {
        e.preventDefault();
        history.push(`/signup`);
      }

  return (
    <div className="login">
        <form className="login-form" onSubmit={onSubmit}>
            <label> Email: </label>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label> Password: </label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">
                Log In
            </button>
        </form>
        <label>{isLoading ? "Loading..." : null}</label>
        {errors ? <div className="errors">{errors} </div> : null}
        <div> New User? </div>
        <button onClick={signupPush}>
            {" "}
            Sign Up{" "}
        </button>
    </div>
  );
}

export default Login;
