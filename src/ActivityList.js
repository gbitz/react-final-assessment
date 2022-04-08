import React from "react";
import "./ActivityList.css";
import Activity from "./Activity.js"

function ActivityList({activities}) {
  const listItems = activities.map(({time, description}, index) => <Activity time={time} description={description} index={index} />)
  return (
  <div>
      <ul className="activity-list">
        {listItems}
      </ul>
  </div>
  )
}

export default ActivityList;
