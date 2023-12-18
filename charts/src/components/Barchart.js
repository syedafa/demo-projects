import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Barchart.css";
const data = [
  {
    name: "S1",
    "sp panned": 60,
    "sp added": 50,
    "sp completed": 120,
    "sp forecast": 0,
  },
  {
    name: "S2",
    "sp panned": 160,
    "sp added": 40,
    "sp completed": 180,
    "sp forecast": 0,
  },
  {
    name: "S3",
    "sp panned": 30,
    "sp added": 50,
    "sp completed": 140,
    "sp forecast": 0,
  },
  {
    name: "S4",
    "sp panned": 70,
    "sp added": 200,
    "sp completed": 100,
    "sp forecast": 0,
  },
  {
    name: "S5",
    "sp panned": 10,
    "sp added": 40,
    "sp completed": 170,
    "sp forecast": 0,
  },
  {
    name: "forecast 1",
    "sp forecast": 100,
  },
];
const CustomTooltipContent = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`(01/july/2022 - 31/july/2022)`}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: entry.color }}
            className="tooltip-content"
          >
            <span>{entry.name}</span> <span>{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }

  return null;
};
const Barchart = () => {
  return (
    <>
      <div className="barchart">
        <div className="barchart-heading">
          <span>3% Unestimated Issues </span>
          <span>* Forecast Number of Sprints Required</span>
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 200]}
              ticks={[0, 50, 100, 150, 200]}
              label={{
                value: "Storypoint (sp) ",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip content={<CustomTooltipContent />} />

            <Bar
              dataKey="sp panned"
              fill="#D3D3D3"
              stackId="a"
              className="sp-planned"
              barSize={20}
              //   shape={<CustomBar />}
              // radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="sp added"
              fill="#808080"
              stackId="a"
              className="sp-added"
              barSize={20}
              //   shape={<CustomBar />}

              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="sp completed"
              fill="#404040"
              stackId="b"
              className="sp-completed"
              barSize={20}
              //   shape={<CustomBar />}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="sp forecast"
              fill="#F0F0F0"
              stackId="b"
              className="sp-forecast"
              barSize={20}
              //   shape={<CustomBar />}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <span className="sprint">sprints</span>
      </div>
      <div className="chart-indicators-container">
        <div className="chart-indicators">
          <div className="icon sp-planned-icon" />
          <p>SP Planned</p>
        </div>
        <div className="chart-indicators">
          <div className="icon sp-added-icon" />
          <p>SP Added</p>
        </div>
        <div className="chart-indicators">
          <div className="icon sp-completed-icon" />
          <p>SP Completed</p>
        </div>
        <div className="chart-indicators">
          <div className="icon sp-forecast-icon" />
          <p>SP forecast</p>
        </div>
      </div>
    </>
  );
};

export default Barchart;
