import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [errors, setErrors] = useState(false);
  const [count, setCount] = useState(0);
  // const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/me")
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setCurrentUser(user));
        }
      })
      .then(() => {
        fetch(`/users/${currentUser.id}`).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user);
            });
          } else {
            res.json().then((data) => setErrors(data.error));
          }
        });
      });
  }, []);

  const updateUser = (user) => setCurrentUser(user);

  // useEffect(() => {
  //   fetch("/activities")
  //     .then((res) => res.json())
  //     .then((data) => setActivities(data));
  // }, []);

  // console.log(activities)

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} updateUser={updateUser}/>
        <Switch>
          <Route path="/signup" updateUser={updateUser}>
            <Signup />
          </Route>
          <Route path="/login" updateUser={updateUser}>
            <Login />
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
