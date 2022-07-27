import { PieChart, Pie, Cell } from "recharts";

const DonutChart = (props) => {
    const data = props.data;
    const COLORS = props.color;
    return (
        <div className="donut-chart">
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx={"50%"}
                    cy={"50%"}
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default DonutChart;
