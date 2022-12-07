import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";

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

  const sports = [
    "Ride",
    "Run",
    "Swim",
    "Hike",
    "Walk",
    "Alpine Ski",
    "Backcountry Ski",
    "Canoe",
    "Crossfit",
    "E-Bike Ride",
    "Elliptical",
    "Golf",
    "Handcycle",
    "Ice Skate",
    "Inline Skate",
    "Kayaking",
    "Kitesurf",
    "Nordic Ski",
    "Rock Climb",
    "Roller Ski",
    "Rowing",
    "Sail",
    "Skateboard",
    "Snowboard",
    "Snowshoe",
    "Football (Soccer)",
    "Stair-Stepper",
    "Stand Up Paddling",
    "Surfing",
    "Velomobile",
    "Virtual Ride",
    "Virtual Run",
    "Weight Training",
    "Wheelchair",
    "Windsurf",
    "Workout",
    "Yoga",
  ];

  function handleActivitySubmit(e) {
    e.preventDefault();
    if (activitySport === "") {
      window.alert("Please select a sport");
    } else {
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
            // window.location.reload();
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }

  return (
    <div className="pt-14 mt-8 mb-9 pl-48 max-w-full flex bg-white">
      <div className="flex">
        <div className="block w-40 border-2 border-gray-100 text-zinc-800 text-base">
          <div className="py-3 pl-4 pr-16">Device</div>
          <div className="py-3 pl-4 pr-6 border-t-2 border-gray-100">File</div>
          <div className="py-3 pl-4 pr-6 border-t-2 border-gray-100 border-l-orange-600 border-l-2">
            Manual
          </div>
          <div className="py-3 pl-4 pr-6 border-t-2 border-gray-100">
            Mobile
          </div>
        </div>
        <div className="text-sm leading-4 pl-8">
          <h1 className="text-4xl text-black font-bold leading-10 mb-3">
            Manual Entry
          </h1>
          <form className="new-activity-form" onSubmit={handleActivitySubmit}>
            <div className="flex border-b-2 border-gray-100 pb-8">
              <div className="pr-8">
                <label className="text-xs text-neutral-800 pr-24">
                  Distance
                </label>
                <br></br>
                <input
                  className="mt-1 h-9 border-2 border-zinc-200 text-center text-stone-500"
                  type="text"
                  value={activityDistance}
                  onChange={(e) => setActivityDistance(e.target.value)}
                />
                <select className="text-sm text-neutral-800 mt-1 h-9 border-r-2 border-y-2 border-zinc-200 pl-1">
                  <option>miles</option>
                  <option>kilometers</option>
                  <option>meters</option>
                  <option>yards</option>
                </select>
              </div>
              <div className="pr-8">
                <label className="text-xs text-neutral-800">Duration</label>
                <br></br>
                <input
                  className="mt-1 h-9 w-60 border-2 border-zinc-200 text-center text-stone-500"
                  type="text"
                  placeholder="hh:mm:ss"
                  value={activityDuration}
                  onChange={(e) => setActivityDuration(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-neutral-800">Elevation</label>
                <br></br>
                <input
                  className="mt-1 h-9 border-2 border-zinc-200 text-center text-stone-500"
                  type="text"
                  value={activityElevation}
                  onChange={(e) => setActivityElevation(e.target.value)}
                ></input>
                <select className="text-sm text-neutral-800 h-9 border-r-2 border-y-2 border-zinc-200 pl-1">
                  <option>feet</option>
                  <option>meters</option>
                </select>
              </div>
            </div>
            <div className="flex py-6">
              <div className="pr-8">
                <label className="text-xs text-neutral-800">Sport</label>
                <br></br>
                <select
                  className="mt-1 h-9 w-64 border-r-2 border-2 border-zinc-200 pl-1 text-neutral-800"
                  onChange={(e) => {
                    setActivitySport(e.target.value);
                  }}
                >
                  <option className="text-sm text-neutral-800" value="">
                    Sport
                  </option>
                  {sports?.map((sport) => {
                    return (
                      <option
                        className="text-sm text-neutral-800"
                        key={sport}
                        value={activitySport.text}
                      >
                        {sport}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="text-xs text-neutral-800">Date & Time</label>
                <br></br>
                <input
                  className="text-stone-500 mt-1 h-9 border-2 border-zinc-200 text-center"
                  type="date"
                  value={activityDate}
                  onChange={(e) => setActivityDate(e.target.value)}
                ></input>
                <input
                  className="text-stone-500 mt-1 h-9 border-r-2 border-y-2 border-zinc-200 text-center"
                  type="time"
                  value={activityTime}
                  onChange={(e) => setActivityTime(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex py-2">
              <div>
                <label className="text-xs text-neutral-800">Title</label>
                <br></br>
                <input
                  className="mt-1 h-9 w-96 border-2 border-zinc-200 text-stone-500 pl-2"
                  type="text"
                  placeholder="Morning Run"
                  value={activityTitle}
                  onChange={(e) => setActivityTitle(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex border-b-2 border-gray-100 pt-6 pb-8">
              <div>
                <label className="text-xs text-neutral-800">Description</label>
                <br></br>
                <textarea
                  className="mt-1 h-24 w-96 resize-y border-2 border-zinc-200 text-stone-500 p-2"
                  type="textbox"
                  placeholder="How'd it go? Share more about your activity and use @ to tag someone."
                  value={activityDescription}
                  onChange={(e) => setActivityDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="flex border-b-2 border-gray-100 pt-6 pb-8">
              <div>
                <label className="text-xs text-neutral-800">Location</label>
                <br></br>
                <input
                  className="mt-1 h-9 w-64 border-2 border-zinc-200 text-stone-500 pl-2"
                  type="text"
                  value={activityLocation}
                  onChange={(e) => setActivityLocation(e.target.value)}
                ></input>
                {/* <label className="text-xs text-neutral-800">.gpx File</label>
                      <br></br>
                      <input type="file" value={activityMap} onChange={(e) => setActivityMap(e.target.value)}></input> */}
              </div>
            </div>
            <div className="flex pt-6 pb-8 gap-4">
              <button
                className="text-sm font-bold text-white bg-orange-600 rounded p-2"
                type="submit"
              >
                Create
              </button>
              <NavLink to="/dashboard">
                <button className="text-sky-600 pt-2">Cancel</button>
              </NavLink>
            </div>
          </form>
          <div className="font-bold p-8">
            {errors ? <div>{errors}</div> : null}
            {isLoading ? "Loading..." : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityForm;
