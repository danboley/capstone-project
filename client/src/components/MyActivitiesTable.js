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
      <tr className="table-row" key={id}>
          <td className="table-cell px-4 py-2 text-left">{sport}</td>
              <td className="table-cell px-4 py-2 text-left">{newDate}</td>
              <td className="table-cell px-4 py-2 text-left" onClick={(e) => {history.push(`/activities/${id}`)}}>{title}</td>
              <td className="table-cell px-4 py-2 text-right">{duration}</td>
              <td className="table-cell px-4 py-2 text-right">{parseFloat(distance)} mi</td>
              <td className="table-cell px-4 py-2 text-right">{elevation} ft</td>
              {/* <td className="table-cell px-4 py-2 text-right">{relative_effort}</td> */}
              <td>
                <button className="table-cell px-4 py-2 text-center" onClick={(e) => {history.push(`/activities/${id}`)}}>Edit</button>
              </td>
              <td>
                <button className="table-cell px-4 py-2 text-center" onClick={handleDeleteInitial}>Delete</button>
              </td>
              <td>
                {/* <button> */}
                <button className="table-cell px-4 py-2 text-center" type="dropdown" key={id} onClick={handleShareToggle}>
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