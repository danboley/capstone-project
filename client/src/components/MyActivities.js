import React from 'react';
import MyActivitiesTable from './MyActivitiesTable';
 
function MyActivities({ currentUser, activities }) {

 const activityRows = activities.map((activity) => {
   return (
     <MyActivitiesTable {...activity} key={activity.key} />
   );
 });

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
             {/* <th>Relative Effort</th> */}
           </tr>
         </thead>
         <tbody>
         {activityRows}
         </tbody>
       </table>
     </div>
   </div>
 );
}
 
export default MyActivities;