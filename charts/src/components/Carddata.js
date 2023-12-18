import React from "react";
import "./Carddata.css";
const data = [
  {
    name: "Sprint Forecast",
    number: "4",
    time: "(Estimated End Date : 30/07/2023)",
  },
  {
    name: "SP Completed",
    number: "360",
  },
  {
    name: "over all Progress",
    number: "95 %",
  },
];
const Carddata = () => {
  return (
    <div className="card-data">
      {data.map((ele) => (
        <div className="sf">
          <div>{ele.name}</div>
          <div className="number">{ele.number}</div>
          {ele.time && <div>{ele.time}</div>}
        </div>
      ))}

      {/* <div className="completed">
        <div>SP Completed</div>
        <div className="number">360</div>
      </div>
      <div className="overall">
        <div>over all Progress</div>
        <div className="number">95 %</div>
      </div> */}
    </div>
  );
};

export default Carddata;
