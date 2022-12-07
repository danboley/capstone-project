import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import sub from "../pics/sub.png";
import pencil from "../pics/pencil.png";
import elips from "../pics/elips.png";

function ActivityDetailPage({ currentUser, editActivity, deleteActivity }) {
  const [activity, setActivity] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateSport, setUpdateSport] = useState([activity.sport]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expand, setExpand] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/activities/${id}`)
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, [id]);

  const {
    title,
    date,
    time,
    distance,
    duration,
    sport,
    elevation,
    description,
    location,
    user,
    comments,
  } = activity;

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

  function expandForm() {
    setExpand((prev) => !prev);
  }

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updateTitle,
          description: updateDescription,
          sport: updateSport,
        }),
      }).then((r) => {
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

  function handleDeleteInitial() {
    if (
      window.confirm("Are you sure? Deleting an activity cannot be undone.") ==
      true
    ) {
      handleActivityDeleteTrue();
    }
  }

  function handleActivityDeleteTrue() {
    fetch(`/activities/${id}`, {
      method: "DELETE",
    });
    deleteActivity(id);
    window.location.reload();
    history.push("/myactivities");
  }

  function newTime(time) {
    return moment(time).format('h:mm a')
  }

  function newDate(date) {
    if (date?.slice(8,10) == new Date().getDate()) {
      return "Today"
    }
    else if (date?.slice(8,10) == new Date().getDate() - 1) {
      return "Yesterday"
    } 
    else {
      return moment(date).format("on dddd, MMMM D, YYYY")
    }
  }

  return (
    <div className="pt-14 mt-8 mb-9 pl-48 max-w-full flex bg-white">
      <div className="flex ml-32">
        <div className="">
          <div className="block w-36 text-zinc-800 text-base">
            <div className="py-3 pl-4 pr-6 border-y border-x border-zinc-200 border-l-orange-600 border-l-4 hover:bg-slate-50 cursor-pointer">
              Overview
            </div>
            <div className="py-3 pl-4 gap-1 border-b border-x border-zinc-200">
              <div className="flex gap-1">
                {user?.subscriber ? (
                  <img className="w-4 h-4" src={sub}></img>
                ) : null}
                Analysis
              </div>
              {user?.subscriber ? (
                <div>
                  <div className="p-1 pt-2 text-xs zinc-800 hover:bg-slate-50 cursor-pointer">
                    Pace Distrubution
                  </div>
                  <div className="p-1 text-xs zinc-800 hover:bg-slate-50 cursor-pointer">Relative Effort</div>
                  <div className="p-1 text-xs zinc-800 hover:bg-slate-50 cursor-pointer">Heart Rate</div>
                </div>
              ) : null}
            </div>
            <div className="py-3 pl-4 pr-6 border-x border-zinc-200 hover:bg-slate-50 cursor-pointer">
              Segments
            </div>
            <div className="py-3 pl-4 pr-6 border border-zinc-200 hover:bg-slate-50 cursor-pointer">Laps</div>
          </div>
          {currentUser?.id === user?.id ? (
          <div className="flex w-36 mt-2 text-zinc-800 text-base">
            <img
              className="py-3 px-6 border border-zinc-200 hover:bg-slate-50 cursor-pointer"
              src={pencil}
              onClick={expandForm}
            ></img>
            <img
              className="py-3 px-5 border-y border-r border-zinc-200 hover:bg-slate-50 cursor-pointer"
              src={elips}
              onClick={handleDeleteInitial}
            ></img>
          </div>
          ) : null}
        </div>
            
        <div className="pl-8 ">
        <div className="flex pl-4 pt-2 border-zinc-200 border-x border-t pb-2 gap-2 text-xl bg-slate-50">
              {user?.subscriber ? <img className="w-6 h-6 mr-2" src={sub}></img> : null}
              <div className="cursor-pointer hover:underline hover:text-sky-600"
                onClick={(e) => {
                  history.push(`/athletes/${user.id}`);
                }}
              >
                {user?.first_name} {user?.last_name}
              </div>
              <div> - </div>
              <div>{sport}</div>
            </div>
            
                
          <div className="flex p-4 border-zinc-200 border">
            {/* <div className="flex pr-96 border-zinc-200 border-b-2 pb-4 gap-2 text-xl bg-red-500">
              {!user?.subscriber ? <img className="w-6 h-6 mr-2" src={sub}></img> : null}
              <div
                onClick={(e) => {
                  history.push(`/athletes/${user.id}`);
                }}
              >
                {user?.first_name} {user?.last_name}
              </div>
              <div> - </div>
              <div>{sport}</div>
            </div> */}
            <div className="flex pt-4 pr-24 pb-8 act-det-left border-zinc-200 border-r">
              <div className="flex">
                <img className="h-24 w-24 rounded-full" src={user?.pro_pic}></img>
              </div>
              <div className="">
                <div className="pl-4 text-stone-500 text-xs">
                    {newTime(time)} {newDate(date)} • {location}
                </div>
                <div className="pl-4 text-3xl leading-8 font-bold">
                    <h1>{title}</h1>
                </div>
                
                <div className="pl-4 pt-2 text-sm">
                    <h3>{description}</h3>
                </div>
                <div className="pl-4 pt-6">
                    <img className="w-16 h-16" src={user?.pro_pic}></img>
                </div>
                </div>
            </div>
            <div className="act-det-right pl-8">
              <div className="flex pb-4 border-b border-zinc-200">
                <div className="pr-8">
                  <div className="flex">
                    <div className="text-3xl font-light pr-1">{distance}</div>
                    <div className="text-lg">mi</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500">Distance</div>
                  </div>
                </div>
                <div className="pr-8">
                  <div>
                    <div className="text-3xl font-light">{duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500">Elapsed Time</div>
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
              <br></br>
              <div className="pb-4 border-b border-zinc-200">
                <div className="text-sm">
                  <div className="flex gap-24">
                    <div>Elevation</div>
                    <div className="font-bold">{elevation}ft</div>
                  </div>
                  <div className="flex gap-16">
                    <div>Moving Time</div>
                    <div className="font-bold pl-2">{duration}</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          
          <div className="comment-div">
            {comments?.map((comment) => (
              <div key={comment.id}>{comment.comment}</div>
            ))}
          </div>
          {/* <div className="act-det-map">
            <div>map</div>
        </div> */}
          {expand && (
            <div className="edit-activity-section">
              <form
                className="edit-activity-form"
                onSubmit={handleActivityEdit}
              >
                <label className="form-label">Title</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder={activity.title}
                  value={updateTitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                ></input>
                <label className="form-label">Description</label>
                <textarea
                  className="form-input"
                  type="textbox"
                  placeholder={activity.description}
                  value={updateDescription}
                  onChange={(e) => setUpdateDescription(e.target.value)}
                ></textarea>
                <label className="form-label">Sport</label>
                <select
                  className="form-dropdown"
                  onChange={(e) => {
                    setUpdateSport(e.target.value);
                  }}
                >
                  <option value={activity.sport}>{activity.sport}</option>
                  {sports?.map((sport) => {
                    return (
                      <option key={sport} value={updateSport.text}>
                        {sport}
                      </option>
                    );
                  })}
                </select>
                <button type="submit">Save</button>
                <button
                  onClick={(e) => {
                    expandForm();
                  }}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
          <div className="message-div">
            {errors ? <div>{errors}</div> : null}
            {isLoading ? "Loading..." : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetailPage;
