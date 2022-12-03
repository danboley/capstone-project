import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ActivityForm from "./ActivityForm";
import MyProfile from "./MyProfile";
import MyActivities from "./MyActivities";
import ActivityDetailPage from "./ActivityDetailPage";
import UserProfilePage from "./UserProfilePage";

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
            res.json().then((data) => setErrors(data.error));
          }
        });
      });
  }, []);

  const updateUser = (user) => setCurrentUser(user);

  // Double check dependency array below, might need to remove currentUser... TBD
  useEffect(() => {
    fetch("/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, [currentUser]);

  // Create Activity Callback
  function addActivity(newActivity) {
    setActivities([...newActivity]);
  }

  // Delete Activity Callback
  function deleteActivity(id) {
    const refinedActivities = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(refinedActivities);
  }

  // Update Activity Callback
  function editActivity(edit) {
    const updatedActivities = activities?.map((activity) => {
      if (activity.id === edit.id) {
        return edit;
      } else return activity;
    });
    setActivities(updatedActivities);
  }

  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <NavBar currentUser={currentUser} updateUser={updateUser} />
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
          <Route path="/myactivities">
            <MyActivities currentUser={currentUser} activities={currentUser.activities} deleteActivity={deleteActivity} />
          </Route>
          <Route path="/activities/:id">
            <ActivityDetailPage currentUser={currentUser} editActivity={editActivity} deleteActivity={deleteActivity}/>
          </Route>
          <Route path="/myprofile">
            <MyProfile currentUser={currentUser} activities={currentUser.activities}/>
          </Route>
          <Route path="/athletes/:id">
            <UserProfilePage />
          </Route>
          <Route path="/activityform">
            <ActivityForm currentUser={currentUser} addActivity={addActivity} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
