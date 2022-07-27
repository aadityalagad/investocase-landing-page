import React from "react";
import DonutChart from "./DonutChart";
import "./Panel.css";

function Panel() {
    const data1 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
    ];
    const data2 = [
        { name: "Group A", value: 100 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 200 },
        { name: "Group D", value: 50 },
    ];
    const colors = ["#249B93", "#0061AC", "#FF374C", "#FFAC00"];
    return (
        <div className="panel">
            <h2 className="panel-text">Start by creating a portfolio</h2>
            <div className="panel-charts">
                <div className="panel-charts__chart">
                    <DonutChart data={data1} color={colors} />
                    <div className="panel-charts__chart__text">
                        <h3 className="first">personal portfolio </h3>
                        <h3>and start investing</h3>
                    </div>
                </div>
                <div className="panel-charts__chart">
                    <DonutChart data={data2} color={colors} />
                    <div className="panel-charts__chart__text">
                        <h3 className="second">portfolio</h3>
                        <h3>to get you started</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;
