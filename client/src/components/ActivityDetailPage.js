import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ActivityDetailPage({ currentUser, editActivity }) {
    const [activity, setActivity] = useState("");
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    const [updateSport, setUpdateSport] = useState([activity.sport]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [expand, setExpand] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        fetch(`/activities/${id}`)
          .then((res) => res.json())
          .then((data) => setActivity(data));
    }, [id]);

    const { title, date, time, distance, duration, sport, elevation, description, location, user } = activity;

    const sports = ["Ride", "Run", "Swim", "Hike", "Walk", "Alpine Ski", "Backcountry Ski", "Canoe", "Crossfit", "E-Bike Ride", "Elliptical", "Golf", "Handcycle", "Ice Skate", "Inline Skate", "Kayaking", "Kitesurf", "Nordic Ski", "Rock Climb", "Roller Ski", "Rowing", "Sail", "Skateboard", "Snowboard", "Snowshoe", "Football (Soccer)", "Stair-Stepper", "Stand Up Paddling", "Surfing", "Velomobile", "Virtual Ride", "Virtual Run", "Weight Training", "Wheelchair", "Windsurf", "Workout", "Yoga"]

    function expandForm() {
        setExpand(prev => !prev)
    }

    // Potentially have Edit/Delete functionality here

    function handleActivityEdit(e) {
        e.preventDefault();
        if (updateSport === "") {
            window.alert("Please select a sport");
        } else if (updateTitle === "") {
            window.alert("Please enter an activity title");
        } else {
            setIsLoading(true);
            fetch(`/activities/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: updateTitle,
                description: updateDescription,
                sport: updateSport,
            })
            })
            .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((data) => {
                editActivity(data);
                expandForm();
                // history.push(`/activities/${id}`);
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
            });
        }
    }

  return (
    <div className="activity-detail-page">
        ActivityDetailPage
        <div className="act-det-card">
            <div className="act-det-head">
                {user?.subscriber ? <div>Subscriber</div> : null}
                <div>{user?.first_name} {user?.last_name} - {sport}</div>
                <div>
                    <button onClick={expandForm}>Edit</button>
                </div>
            </div>
            <div className="act-det-left">
                <div>
                    <img src={user?.pro_pic}></img>
                </div>
                <div>
                    {time} on {date} • {location}
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <h3>{description}</h3>
                </div>
                {/* <div>
                    pictures
                </div> */}
            </div>
            <div className="act-det-right">
                <div className="act-det-stats">
                    <div className="act-det-dist">
                        <div>
                            <h2>{distance} mi</h2>
                        </div>
                        <div>
                            <h6>Distance</h6>
                        </div>
                    </div>
                    <div className="act-det-time">
                        <div>
                            <h2>{duration}</h2>
                        </div>
                        <div>
                            <h6>Elapsed Time</h6>
                        </div>
                    </div>
                    {/* <div className="act-det-pace">
                        <div>
                            <h2>Pace?</h2>
                        </div>
                        <div>
                            <h6>Pace</h6>
                        </div>
                    </div>
                    <div className="act-det-effort">
                        <div>
                            <h2>Relative Effort?</h2>
                        </div>
                        <div>
                            <h6>Relative Effort</h6>
                        </div>
                    </div> */}
                </div>
                <div className="act-det-sec-stats">
                    <div className="act-det-elevation">
                        <div>
                            <h6>Elevation</h6>
                        </div>
                        <div>
                            <strong>{elevation}</strong>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="act-det-map">
            <div>map</div>
        </div> */}
        {expand &&
        <div className="edit-activity-section">
            <form className="edit-activity-form" onSubmit={handleActivityEdit}>
                <label className="form-label">Title</label>
                <input className="form-input" type="text" placeholder={activity.title} value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)}></input>
                <label className="form-label">Description</label>
                <textarea className="form-input" type="textbox" placeholder={activity.description} value={updateDescription} onChange={(e) => setUpdateDescription(e.target.value)}></textarea>
                <label className="form-label">Sport</label>
                <select className="form-dropdown" onChange={(e) => {setUpdateSport(e.target.value)}}>
                    <option value={activity.sport}>{activity.sport}</option>
                    {sports?.map((sport) => {
                        return(
                        <option key={sport} value={updateSport.text}>{sport}</option>
                        )
                    })}
                </select>
                <button type="submit">Save</button>
                <button onClick={(e) => {expandForm()}}>Cancel</button>
            </form>
        </div>}
        <div className="message-div">
            {errors ? <div>{errors}</div> : null}
            {isLoading ? "Loading..." : null}
        </div>
        <div>
            {(currentUser?.id === user?.id) ? "match" : "no match"}
        </div>
    </div>
  );
}

export default ActivityDetailPage;