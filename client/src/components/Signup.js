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
    <div className="py-32 px-96 text-center">
      <div>
        <div className="mx-96 p-4 bg-black bg-opacity-80 font-bold text-4xl text-white">
          Join Strava today, it's Free.
        </div>
        <form className="mx-96 p-4 bg-black bg-opacity-70" onSubmit={onSubmit}>
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
            type="text"
            name="first_name"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="border-stone-500 h-11 w-72 border rounded text-center text-sm"
            type="text"
            name="last_name"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="border-stone-500 h-11 w-72 border rounded text-center text-sm"
            type="text"
            name="pro_pic"
            placeholder="profile picture"
            value={proPic}
            onChange={(e) => setProPic(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="border-stone-500 h-11 w-72 border rounded text-center text-sm"
            type="text"
            name="location"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>
          <br></br>
          {/* <label className="text-white mr-2"> Account Type: </label> */}
          <select
            className="rounded h-11 w-72 text-center"
            name="subscription"
            value={subscriber}
            onChange={(e) => setSubscriber(e.target.value)}
          >
            <option>Account Type</option>
            <option value="">Premium</option>
            <option>Free</option>
          </select>
          <br></br>
          <br></br>
          <input
            className="border-stone-500 h-11 w-72 border rounded text-center text-sm"
            type="text"
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
            Sign Up
          </button>
          <br></br>
        </form>
        <div className="bg-black bg-opacity-70 mx-96 pt-2">
          <div>
            {isLoading ? (
              <div className="text-white text-sm">"Loading..."</div>
            ) : null}
            {errors ? <div className="text-white text-sm">{errors}</div> : null}
          </div>
        </div>
        <div className=" text-white text-sm mx-96 p-4 bg-black bg-opacity-70 text-center">
          <div className="flex gap-2 justify-center items-center pb-4">
            <div> Already a Member? </div>
            <button onClick={loginPush}> Log In </button>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Signup;
