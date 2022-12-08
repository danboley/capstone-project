import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

function MyActivitiesTable({
  id,
  activity,
  sport,
  date,
  title,
  duration,
  distance,
  elevation,
  deleteActivity,
}) {
  const history = useHistory();

  const newDate = moment(date).format("ddd, MM/D/YYYY");

  // function handleActivityDelete() {
  //   fetch(`/activities/${id}`, {
  //     method: "DELETE",
  //   });
  //   deleteActivity(id);
  // }

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
    // history.push("/myactivities");
  }

  // Duration ...
  function newDuration(duration) {
    if (duration?.slice(0, 2) == 0) {
      return duration?.slice(4);
    } else if (duration?.slice(0, 1) == 0) {
      return duration?.slice(1)
    } else {
      return duration;
    }
  }

  const newduration = moment(duration).format('h:mm:ss')

  return (
    <tr
      className="table-row even:bg-slate-50 border-gray-100 border-b odd:bg-white"
      key={id}
    >
      <td className="table-cell px-4 py-4 text-left text-sm">{sport}</td>
      <td className="table-cell px-4 py-4 text-left text-sm">{newDate}</td>
      <td
        className="table-cell px-4 py-4 text-left text-sm text-sky-600 hover:underline"
        onClick={(e) => {
          history.push(`/activities/${id}`);
        }}
      >
        {title}
      </td>
      <td className="table-cell px-4 py-4 text-right text-sm">{newDuration(duration)}</td>
      <td className="table-cell px-4 py-4 text-right text-sm">
        {parseFloat(distance).toFixed(2)} mi
      </td>
      <td className="table-cell px-4 py-4 text-right text-sm">
        {elevation} ft
      </td>
      {/* <td className="table-cell px-4 py-4 text-right">{relative_effort}</td> */}
      <td>
        <button
          className="table-cell px-4 py-4 text-center text-sm text-sky-600 hover:underline"
          onClick={(e) => {
            history.push(`/activities/${id}`);
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="table-cell px-4 py-4 text-center text-sm text-sky-600 hover:underline"
          onClick={handleDeleteInitial}
        >
          Delete
        </button>
      </td>
      <td className="table-cell py-1 text-center text-sm pr-2">
        <select
          className="text-center py-1 text-sm"
          type="form-dropdown"
          key={id}
        >
          Share
          <option className="" value="" disabled selected hidden>
            Share
          </option>
          <option className="">On Facebook</option>
          <option className="">On Twitter</option>
          <option className="">Embed on Blog</option>
        </select>
      </td>
    </tr>
  );
}

export default MyActivitiesTable;
