import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Areachart.css";
const data = [
  {
    month: "",
    spfirst: [16, 19],
    spsecond: [13, 15.9],
    spthird: [10, 12.9],
  },
  {
    month: "Jan",
    spfirst: [15, 19.5],
    spsecond: [10, 14.9],
    spthird: [4, 9.9],
  },
  {
    month: "Feb",
    spfirst: [16.2, 23],
    spsecond: [13, 16.1],
    spthird: [9, 12.9],
  },
  {
    month: "Mar",
    spfirst: [16, 24],
    spsecond: [14, 15.9],
    spthird: [9.5, 13.9],
  },
  {
    month: "Apr",
    spfirst: [20, 29],
    spsecond: [12.6, 19.9],
    spthird: [9.5, 12.5],
  },
  {
    month: "May",
    spfirst: [17, 27],
    spsecond: [11, 16.9],
    spthird: [9.4, 10.9],
  },
  {
    month: "Jun",
    spfirst: [21, 30],
    spsecond: [15, 20.9],
    spthird: [9, 14.9],
  },

  {
    month: "Jul",
    spfirst: [19, 32],
    spsecond: [14.9, 18.9],
    spthird: [8, 14.8],
  },
  {
    month: "",
    spfirst: [22, 35],
    spsecond: [17, 21.9],
    spthird: [5.3, 16.9],
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.log("payload", payload);
    const issueOpen = data[data.findIndex((ele) => ele.month === label)];
    return (
      <div
        style={{
          backgroundColor: "#fff",
          paddingLeft: "12px",
          width: "230px",
          borderRadius: "8px",
          fontSize: "12px",
        }}
      >
        <p className="label-heading">{`${label} 01 - ${label} 31, 2023`}</p>
        <p className="label">
          <span>Issue Opened</span>
          <span>{Math.floor(issueOpen.spfirst[0])}d</span>
        </p>
        <p className="label">
          <span>Issue Started</span>
          <span>{Math.floor(issueOpen.spsecond[0])}d</span>
        </p>
        <p className="label">
          <span>Issue Completed</span>
          <span>{Math.floor(issueOpen.spthird[0])}d</span>
        </p>
      </div>
    );
  }

  return null;
};

const Areachart = () => {
  return (
    <div className="sprints-container">
      <div className="area-heading">
        <span>Total Lead Time : 35 days (avg) </span>
        <span>Total Cycle Time : 33 days (avg) </span>
      </div>
      <ResponsiveContainer aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="month" />
          <YAxis
            ticks={[0, 10, 20, 30, 40, 50]}
            label={{
              value: "Stay Point(Days)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Area dataKey="spfirst" stroke="#668391" fill="#404040" />
          <Area dataKey="spsecond" stroke="#949494" fill="#808080" />
          <Area dataKey="spthird" stroke="#C0C0C0" fill="#d3d3d3" />
        </AreaChart>
      </ResponsiveContainer>

      <div className="chart-indicators-container">
        <div className="chart-indicators">
          <div className="icon issue-open" />
          <p>Issue open</p>
        </div>
        <div className="chart-indicators">
          <div className="icon issue-started" />
          <p>Issue Started</p>
        </div>
        <div className="chart-indicators">
          <div className="icon issue-completed" />
          <p>Issue Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Areachart;
