import React, { useState } from 'react';

function MyActivitiesTable({ id, activity, sport, date, title, duration, distance, elevation }) {
  const [shareToggle, setShareToggle] = useState(false);

  const handleShareToggle = () => {
    setShareToggle((prev) => !prev);
  }
    
  return (
      <tr className="training-activity-row" key={id}>
          <td>{sport}</td>
              <td>{date}</td>
              <td>{title}</td>
              <td>{duration}</td>
              <td>{parseFloat(distance)} mi</td>
              <td>{elevation} ft</td>
              {/* <td>{relative_effort}</td> */}
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
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