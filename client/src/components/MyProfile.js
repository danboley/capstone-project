import React from 'react';
import ProfileActivityCard from './ProfileActivityCard';
import sub from '../pics/sub.png';
import loc from '../pics/loc.png';

function MyProfile({ currentUser, activities }) {

  const activitiesByDate = activities?.slice().sort(function(a, b) {
    return new Date(b.date) - new Date (a.date);
  })

  // profile activities limited to 5
  const profileActivities = activitiesByDate?.slice(0, 5).map((activity) => {
    return (
      <ProfileActivityCard currentUser={currentUser} {...activity} activity={activity} key={activity.id} comments={activity.comments} />
    )});

  // today date variables
  const today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.toLocaleString('default', { month: 'short' });
  let dd = today.getDate();

  // 7 days ago date variables
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 7);
  let yyyyOld = weekAgo.getFullYear();
  let mmOld = weekAgo.toLocaleString('default', { month: 'short' });
  let ddOld = weekAgo.getDate();


  const profileImages = activitiesByDate?.slice(0, 4).map((activity) => {
    if (activity.image) {
    return (
      <div key={activity.id}><img className="border-r border-white w-80 h-80 object-cover" src={activity.image}></img></div>
    )} else {
      null;
    }
  })

  return (
    <div className="pt-14 max-w-full flex justify-center">
      <div className="w-4/6">
        <div className="flex">
          {profileImages}
        </div>
        <div className="relative -top-16">
          <div className="px-8 pb-4">
            <img className="rounded-full border border-slate-50 w-32 h-32 object-cover" src={currentUser.pro_pic}></img>
          </div>
          <div className="text-3xl px-4 pb-4 font-bold">
            <h1>{currentUser.first_name} {currentUser.last_name}</h1>
          </div>
          {currentUser.subscriber?
          <div className="flex px-4 pb-2">
            <img className="w-4 h-4" src={sub}></img>
            <div className="text-sm px-1">Subscriber</div>
          </div>
          : null}
          <div className="flex px-4 pb-1">
            <img className="w-4 h-4" src={loc}></img>
            <div className="text-sm px-1 pb-4">{currentUser.location}</div>
          </div>
          <div className="text-base font-bold px-4">
            {/* <div>Activities for {mmOld} {ddOld}, {yyyyOld} - {mm} {dd}, {yyyy}</div> */}
            <div>Recent Activities</div>
          </div>
          <div className="px-4 pt-4">
            {profileActivities}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;