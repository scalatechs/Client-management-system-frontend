import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "In Progress", value: 200, color: "#4287f5" },
  { name: "Completed", value: 100, color: "#4caf50" },
  { name: "Not Started", value: 100, color: "#ff7043" },
];

export default function MilestoneChart() {
  return (
    <div className="h-[200px] ">
      <ResponsiveContainer width="100%" height="100%">
        <div className="flex items-center justify-center xl:justify-start gap-2">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={90}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={entry.color}
                />
              ))}
            </Pie>
          </PieChart>

          <div className="text-left text-sm space-y-4">
            {data.map((d) => (
              <div key={d.name} className="flex items-center gap-3">
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{ backgroundColor: d.color }}
                ></span>
                <span className="text-gray-500">{d.name}</span>
                <span className="font-semibold ">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
