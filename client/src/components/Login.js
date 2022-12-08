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
    <div className="py-32 mx-96 content-center text-center block">
      <div className="w-96 mx-96">
        <div className="p-4 bg-black bg-opacity-80 font-bold text-4xl text-white">
          Log In
        </div>
        <form className="p-4 bg-black bg-opacity-70" onSubmit={onSubmit}>
          <br></br>
          <div className="text-white text-base mb-4">Log in with email</div>
          <input
            className="border-stone-500 h-11 w-72 border rounded text-center text-sm"
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="border-stone-500 h-11 w-72 border rounded text-center text-sm"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <button
            className="text-white text-sm font-bold rounded h-11 w-72 bg-orange-600"
            type="submit"
          >
            Log In
          </button>
          <br></br>
        </form>
        <div className="bg-black bg-opacity-70 pt-2">
          <div className="">
            {isLoading ? (
              <div className="text-white text-sm ">Loading...</div>
            ) : null}
            {errors ? <div className="text-white text-sm  text-center">{errors}</div> : null}
          </div>
        </div>
        <div className=" text-white text-sm p-4 bg-black bg-opacity-70 text-center">
          <div className="flex gap-2 justify-center items-center pb-4">
            <div> New User? </div>
            <button onClick={signupPush}> Sign Up </button>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Login;
