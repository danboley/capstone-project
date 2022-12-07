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
    <div className="py-32 px-96 text-center">
      <div className="">
        <div className="mx-96 p-4 bg-black bg-opacity-80 text-4xl text-white">Log In</div>

        <form className="mx-96 p-4 bg-black bg-opacity-70" onSubmit={onSubmit}>
        <br></br>
          <div className="text-white text-base mb-4">Log in with email</div>
            <input className="border-stone-500 h-11 w-72 border rounded text-center text-sm" type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <br></br>
            <input className="border-stone-500 h-11 w-72 border rounded text-center text-sm" type="password" name="password" placeholder="password"value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <br></br>
            <br></br>
            <button className="text-white text-sm text-bold rounded h-11 w-72 bg-orange-600" type="submit">
                Log In
            </button>
            <br></br>
            <br></br>        
          </form>
        <div className="bg-black bg-opacity-70 mx-96"></div>
        <div className=" text-white text-sm mx-96 p-4 bg-black bg-opacity-70 text-center">
          <div className="flex gap-2 justify-center items-center pb-4">
            <div> New User? </div>
            <button onClick={signupPush}>
                {" "}
                Sign Up{" "}
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          {isLoading ? <div>"Loading..."</div> : null}
          {errors ? <div className="errors">{errors}</div> : null}
        </div>
        </div>
    </div>
  );
}

export default Login;
