import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Project 1", progress: 10, fill: "#FF6B00" },
  { name: "Project 1", progress: 50, fill: "#4CAF50" },
  { name: "Project 1", progress: 30, fill: "#FFC107" },
  { name: "Project 1", progress: 35, fill: "#9C27B0" },
  { name: "Project 1", progress: 40, fill: "#00BCD4" },
];

export default function ProjectChart() {
  return (
    <div style={{ width: "100%", height: "195px" }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip formatter={(value) => `${value}%`} />

          <Bar dataKey="progress" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
