import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function MyActivitiesTable({ id, activity, sport, date, title, duration, distance, elevation, deleteActivity }) {
  const history = useHistory();

  const newDate = (new Date(date)).toDateString('default');

  // function handleActivityDelete() {
  //   fetch(`/activities/${id}`, {
  //     method: "DELETE",
  //   });
  //   deleteActivity(id);
  // }

    function handleDeleteInitial() {
        if (window.confirm("Are you sure? Deleting an activity cannot be undone.") == true) {
            handleActivityDeleteTrue()
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

  return (
      <tr className="table-row" key={id}>
          <td className="table-cell px-4 py-2 text-left">{sport}</td>
              <td className="table-cell px-4 py-2 text-left">{newDate}</td>
              <td className="table-cell px-4 py-2 text-left" onClick={(e) => {history.push(`/activities/${id}`)}}>{title}</td>
              <td className="table-cell px-4 py-2 text-right">{duration}</td>
              <td className="table-cell px-4 py-2 text-right">{parseFloat(distance)} mi</td>
              <td className="table-cell px-4 py-2 text-right">{elevation} ft</td>
              {/* <td className="table-cell px-4 py-2 text-right">{relative_effort}</td> */}
              <td>
                <button className="table-cell px-4 py-2 text-center text-sky-600" onClick={(e) => {history.push(`/activities/${id}`)}}>Edit</button>
              </td>
              <td>
                <button className="table-cell px-4 py-2 text-center text-sky-600" onClick={handleDeleteInitial}>Delete</button>
              </td>
              <td>
                <select className="table-cell py-1 text-center text-xs" type="form-dropdown" key={id}>
                  Share
                  <option value="" disabled selected hidden>Share</option>
                  <option>On Facebook</option>
                  <option>On Twitter</option>
                  <option>Embed on Blog</option>
                </select>
              </td>
      </tr>
  );
}

export default MyActivitiesTable;