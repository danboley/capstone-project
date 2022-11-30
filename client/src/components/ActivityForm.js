import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

function ActivityForm({ currentUser, addActivity }) {
    const [activityTitle, setActivityTitle] = useState("");
    const [activityDate, setActivityDate] = useState("");
    const [activityTime, setActivityTime] = useState("");
    const [activityDistance, setActivityDistance] = useState("");
    const [activityDuration, setActivityDuration] = useState("");
    const [activitySport, setActivitySport] = useState("");
    const [activityElevation, setActivityElevation] = useState("");
    const [activityDescription, setActivityDescription] = useState("");
    const [activityLocation, setActivityLocation] = useState("");
    // const [activityMap, setActivityMap] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    // const { id } = useParams();
    // console.log(currentUser?.activities?.slice(-1)[0].id)

    const sports = ["Ride", "Run", "Swim", "Hike", "Walk", "Alpine Ski", "Backcountry Ski", "Canoe", "Crossfit", "E-Bike Ride", "Elliptical", "Golf", "Handcycle", "Ice Skate", "Inline Skate", "Kayaking", "Kitesurf", "Nordic Ski", "Rock Climb", "Roller Ski", "Rowing", "Sail", "Skateboard", "Snowboard", "Snowshoe", "Football (Soccer)", "Stair-Stepper", "Stand Up Paddling", "Surfing", "Velomobile", "Virtual Ride", "Virtual Run", "Weight Training", "Wheelchair", "Windsurf", "Workout", "Yoga"]

    function handleActivitySubmit(e) {
        e.preventDefault();
        if (activitySport === "") {
            window.alert("Please select a sport");
        } else {
        setErrors([]);
        setIsLoading(true);
        fetch(`/activities`, {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: parseInt(currentUser.id),
                title: activityTitle,
                date: activityDate,
                time: activityTime,
                distance: parseFloat(activityDistance),
                duration: activityDuration,
                sport: activitySport,
                elevation: parseInt(activityElevation),
                description: activityDescription,
                location: activityLocation,
                // map: activityMap,
            }),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((data) => {
                addActivity(data);
                // console.log(currentUser?.activities?.slice(-1)[0].id)
                // history.push(`/activities/${currentUser?.activities?.slice(-1)[0].id}`);
                window.location.reload();
              })
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
        }
    }

  return (
    <div className="add-activity-page">
        Add Activity
        <div>
            <form className="new-activity-form" onSubmit={handleActivitySubmit}>
                <label className="form-label">Distance</label>
                <input className="form-input" type="text" value={activityDistance} onChange={(e) => setActivityDistance(e.target.value)}/>
                <label className="form-label">Duration</label>
                <input className="form-input" type="text" value={activityDuration} onChange={(e) => setActivityDuration(e.target.value)}/>
                <label className="form-label">Elevation</label>
                <input className="form-input" type="text" value={activityElevation} onChange={(e) => setActivityElevation(e.target.value)}></input>
                <select className="form-dropdown">
                    <option>feet</option>
                    <option>meters</option>
                </select>
                <label className="form-label">Sport</label>
                <select className="form-dropdown" onChange={(e) => {setActivitySport(e.target.value)}}>
                    <option value="">Sport</option>
                    {sports?.map((sport) => {
                        return(
                        <option key={sport} value={activitySport.text}>{sport}</option>
                        )
                    })}
                </select>
                <label className="form-label">Date & Time</label>
                <input className="form-input" type="date" value={activityDate} onChange={(e) => setActivityDate(e.target.value)}></input>
                <input type="time" value={activityTime} onChange={(e) => setActivityTime(e.target.value)}></input>
                <label className="form-label">Title</label>
                <input className="form-input" type="text" placeholder="Morning Run" value={activityTitle} onChange={(e) => setActivityTitle(e.target.value)}></input>
                <label className="form-label">Description</label>
                <textarea className="form-input" type="textbox" placeholder="How'd it go? Share more about your activity and use @ to tag someone." value={activityDescription} onChange={(e) => setActivityDescription(e.target.value)}></textarea>
                <label className="form-label">Location</label>
                <input className="form-input" type="text" value={activityLocation} onChange={(e) => setActivityLocation(e.target.value)}></input>
                {/* <label className="form-label">.gpx File</label>
                <input type="file" value={activityMap} onChange={(e) => setActivityMap(e.target.value)}></input> */}
                <button type="submit">Create</button>
                {/* <a href={history.push(`/`)}>Cancel</a> */}
            </form>
            <div>
                {errors ? <div>{errors}</div> : null}
                {isLoading ? "Loading..." : null}
            </div>
        </div>
    </div>
  );
}

export default ActivityForm;