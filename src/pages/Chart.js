import { Tooltip } from "@mui/material";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend,
  LineChart,
  CartesianAxis,
  XAxis,
  YAxis,
  Line,
} from "recharts";



export default function PieCharts(){
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data = [
  { name: "Name", value: 400 },
  { name: "Name", value: 300 },
  { name: "Name", value: 300 },
  { name: "Name", value: 200 },
];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PieChart width={700} height={300}>
        <Pie
          data={data}
          cx="20%"
          cy="30%"
          innerRadius={60}
          outerRadius={80}
          fill="#0000"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value="Department"
            position="center"
            fontSize={15}
            fontWeight="bold"
            fill="#333"
          />
        </Pie>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
          iconSize={20}
          wrapperStyle={{
            top: "15%",
            right: "40%",
            width: "auto",
            lineHeight: "30px",
          }}
        >
          {data.map((item, index) => (
            <div key={`legend-${index}`}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  background: COLORS[index % COLORS.length],
                  marginRight: "50px",
                }}
              />
              {item.name} - {item.value}
            </div>
          ))}
        </Legend>
      </PieChart>
    </div>
  );
};

export const LineCharts = () => {
  const data = [
    {
      "day": "MON",
      "name1": 10,
      "name2": 20,
      "name3": 30
    },
    {
      "day": "TUE",
      "name1": 40,
      "name2": 50,
      "name3": 60
    },
    {
      "day": "WED",
      "name1": 20,
      "name2": 15,
      "name3": 35
    },
    {
      "day": "THUR",
      "name1": 25,
      "name2": 55,
      "name3": 1
    },
    {
      "day": "FRI",
      "name1": 0,
      "name2": 50,
      "name3": 30
    },
    {
      "day": "SAT",
      "name1": 25,
      "name2": 15,
      "name3": 2
    },
    {
      "day": "SUN",
      "name1": 0,
      "name2": 50,
      "name3": 55
    }
  ]
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<LineChart width={1000} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianAxis strokeDasharray="3 3" />
  <XAxis dataKey="day" />
  <YAxis />
  <Tooltip  />
  <Legend />
  <Line type="monotone" dataKey="name1" stroke="#8884d8" />
  <Line type="monotone" dataKey="name2" stroke="red" />
  <Line type="monotone" dataKey="name3" stroke="#82ca9d" />
</LineChart>
    </div>
  );
};