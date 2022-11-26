import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ActivityForm from "./ActivityForm";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [errors, setErrors] = useState(false);
  const [activities, setActivities] = useState([]);

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
            res.json().then((data) => console.log(data.error));
          }
        });
      });
  }, []);

  const updateUser = (user) => setCurrentUser(user);

  useEffect(() => {
    fetch("/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  function addNewActivity(newActivity) {
    setActivities([...newActivity])
  }

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
          <Route path="/dashboard">
            <Dashboard currentUser={currentUser} activities={activities} />
          </Route>
          <Route>
            <ActivityForm currentUser={currentUser}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
