import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function MyActivitiesTable({ id, activity, sport, date, title, duration, distance, elevation, deleteActivity }) {
  const [shareToggle, setShareToggle] = useState(false);
  const history = useHistory();

  // Popup for delete activity confirmation
  // const [popup, setPopup] = useState({
  //   show: false,
  //   id: null,
  // })

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

  // function handleDeleteInitial(id) {
  //   setPopup({
  //     show: true,
  //     id,
  //   })
  // }

  // function handleActivityDeleteTrue() {
  //   if (popup.show && popup.id) {
  //     fetch(`/activities/${activity.id}`, {
  //       method: "DELETE",
  //     });
  //     deleteActivity(id);
  //     setPopup({
  //       show: false,
  //       id: null,
  //     });
  //   }
  // }

  // function handleActivityDeleteFalse() {
  //   setPopup({
  //     show: false,
  //     id: null,
  //   });
  // }

  // {popup.show && (
  //   <div id="delete-modal" className="modal">
  //     <div className="modal-content">
  //       <p>Are you sure you want to delete this activity?</p>
  //       <button onClick={handleActivityDeleteTrue}>Delete</button>
  //       <button onClick={handleActivityDeleteFalse}>Cancel</button>
  //     </div>
  //   </div>
  // )}
  
  // {popup.show && (
  //   <window>
  //       <p>Are you sure you want to delete this activity?</p>
  //       <button onClick={handleActivityDeleteTrue}>Delete</button>
  //       <button onClick={handleActivityDeleteFalse}>Cancel</button>
  //   </window>
  // )}

  // <div>
  // {popup.show && (
  //   <dialog>
  //       <p>Are you sure you want to delete this activity?</p>
  //       <button onClick={handleActivityDeleteTrue}>Delete</button>
  //       <button onClick={handleActivityDeleteFalse}>Cancel</button>
  //   </dialog>
  // )}
  // </div>

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
                {/* <button className="delete-button" onClick={handleDeleteInitial}>Delete</button> */}
                <button className="delete-button" onClick={handleActivityDelete}>Delete</button>
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