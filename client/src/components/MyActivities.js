import React from 'react';
import MyActivitiesTable from './MyActivitiesTable';
 
function MyActivities({ currentUser, activities, deleteActivity }) {

  const activitiesByDate = activities?.slice().sort(function(a, b) {
    return new Date(b.date) - new Date (a.date);
  })

 const activityRows = activitiesByDate?.map((activity) => {
   return (
     <MyActivitiesTable {...activity} activity={activity} key={activity.id} deleteActivity={deleteActivity} />
   );
 });

 return (
   <div className="pt-16">
     <div className="float-left px-20">My Activities</div>
     {/* <Search /> */}
     {/* <Filter /> */}
     <div className="">
     <div>
       <table className="">
         <thead>
           <tr className="table-row">
             <th className="table-cell px-4 py-2 text-center">Sport</th>
             <th className="table-cell px-4 py-2 text-center">Date</th>
             <th className="table-cell px-4 py-2 text-center">Title</th>
             <th className="table-cell px-4 py-2 text-center">Time</th>
             <th className="table-cell px-4 py-2 text-center">Distance</th>
             <th className="table-cell px-4 py-2 text-center">Elevation</th>
             {/* <th className="table-cell px-4 py-2 text-center">Relative Effort</th> */}
             <th className="table-cell px-4 py-2"></th>
             <th className="table-cell px-4 py-2"></th>
             <th className="table-cell px-4 py-2"></th>
           </tr>
         </thead>
         <tbody>
         {activityRows}
         </tbody>
       </table>
     </div>
     </div>
   </div>
 );
}
 
export default MyActivities;