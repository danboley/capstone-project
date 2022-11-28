import React, { useState } from 'react';

function MyActivities({ currentUser, activities }) {
  // const [shareToggle, setShareToggle] = useState(false);

  // const handleShareToggle = () => {
  //   setShareToggle((prev) => !prev);
  // }

  return (
    <div className="my-activities">
      MyActivities
      {/* <Search /> */}
      {/* <Filter /> */}
      <div>
        <table className="activities-table">
          <thead>
            <tr>
              <th>Sport</th>
              <th>Date</th>
              <th>Title</th>
              <th>Time</th>
              <th>Distance</th>
              <th>Elevation</th>
              <th>Relative Effort</th>
            </tr>
          </thead>
          <tbody>
          {activities.map((activity) => (
            <tr className="training-activity-row" key={activity.id}>
              <td>{activity.sport}</td>
              <td>{activity.date}</td>
              <td>{activity.title}</td>
              <td>{activity.duration}</td>
              <td>{parseFloat(activity.distance)} mi</td>
              <td>{activity.elevation} ft</td>
              {/* <td>{activity.relative_effort}</td> */}
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
              <td>
                <button>
                {/* <button type="dropdown" key={activity.id} onClick={handleShareToggle}> */}
                  Share
                </button>
                  {/* {shareToggle ?
                  (<ul>
                    <li><button>On Facebook</button></li>
                    <li><button>On Twitter</button></li>
                    <li><button>Embed on Blog</button></li>
                  </ul>) : null} */}
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyActivities;