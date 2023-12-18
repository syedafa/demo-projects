import React from "react";
import "./Tablelist.css";

const data = [
  {
    "Sprint Name": "Sprint Name 1",
    Status: "Done",
    "Start Date": "01/01/2023",
    "End Date": "07/01/2023",
    "Completed Date": "07/01/2023",
  },
  {
    "Sprint Name": "Sprint Name 2",
    Status: "In Progress",
    "Start Date": "17/02/2023",
    "End Date": "26/02/2023",
    "Completed Date": "26/02/2023",
  },
  {
    "Sprint Name": "Sprint Name 3",
    Status: "Done",
    "Start Date": "06/09/2023",
    "End Date": "16/09/2023",
    "Completed Date": "16/09/2023",
  },
  {
    "Sprint Name": "Sprint Name 4",
    Status: "Done",
    "Start Date": "30/11/2023",
    "End Date": "09/12/2023",
    "Completed Date": "09/12/2023",
  },
  {
    "Sprint Name": "Sprint Name 5",
    Status: "In Progress",
    "Start Date": "08/07/2023",
    "End Date": "09/07/2023",
    "Completed Date": "09/07/2023",
  },
  {
    "Sprint Name": "Sprint Name 6",
    Status: "Done",
    "Start Date": "05/03/2023",
    "End Date": "23/03/2023",
    "Completed Date": "23/03/2023",
  },
  {
    "Sprint Name": "Sprint Name 7",
    Status: "Done",
    "Start Date": "19/09/2023",
    "End Date": "23/09/2023",
    "Completed Date": "23/09/2023",
  },
];

const Tablelist = () => {
  return (
    <div className="table-chart">
      <table className="table">
        <thead className="thead">
          <tr>
            {Object.keys(data[0]).map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          {/* <tr>
            <th>Srint Name</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Completed Date</th>
          </tr> */}
        </thead>
        <tbody className="tbody">
          {data.map((ele) => (
            <tr>
              {Object.keys(ele).map((item) => (
                <td>{ele[item]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablelist;
