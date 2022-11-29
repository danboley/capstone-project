import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ActivityDetailPage({ currentUser }) {
    const [activity, setActivity] = useState("");
    const { id } = useParams();

    useEffect(() => {
        fetch(`/activities/${id}`)
          .then((res) => res.json())
          .then((data) => setActivity(data));
    }, [id]);

    const { title, date, time, distance, duration, sport, elevation, description, location, user } = activity;

    // Potentially have Edit/Delete functionality here

  return (
    <div className="activity-detail-page">
        ActivityDetailPage
        <div className="act-det-card">
            <div className="act-det-head">
                {user?.subscriber ? <div>Subscriber</div> : null}
                <div>{user?.first_name} {user?.last_name}</div>
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
                            <h2>{time}</h2>
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
        <div>
        {(currentUser?.id === user?.id) ? "match" : "no match"}
        </div>
    </div>
  );
}

export default ActivityDetailPage;