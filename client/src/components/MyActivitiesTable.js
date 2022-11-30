import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function MyActivitiesTable({ id, activity, sport, date, title, duration, distance, elevation, deleteActivity }) {
  const [shareToggle, setShareToggle] = useState(false);
  const history = useHistory();

  const newDate = (new Date(date)).toDateString('default');

  const handleShareToggle = () => {
    setShareToggle((prev) => !prev);
  }

  function handleActivityDelete() {
    fetch(`/activities/${id}`, {
      method: "DELETE",
    });
    deleteActivity(id);
  }

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
      <tr className="training-activity-row" key={id}>
          <td>{sport}</td>
              <td>{newDate}</td>
              <td onClick={(e) => {history.push(`/activities/${id}`)}}>{title}</td>
              <td>{duration}</td>
              <td>{parseFloat(distance)} mi</td>
              <td>{elevation} ft</td>
              {/* <td>{relative_effort}</td> */}
              <td>
                <button className="edit-button" onClick={(e) => {history.push(`/activities/${id}`)}}>Edit</button>
              </td>
              <td>
                <button className="delete-button" onClick={handleDeleteInitial}>Delete</button>
              </td>
              <td>
                {/* <button> */}
                <button type="dropdown" key={id} onClick={handleShareToggle}>
                  Share
                </button>
                  {shareToggle ?
                  (<ul>
                    <li><button>On Facebook</button></li>
                    <li><button>On Twitter</button></li>
                    <li><button>Embed on Blog</button></li>
                  </ul>) : null}
              </td>
      </tr>
  );
}

export default MyActivitiesTable;