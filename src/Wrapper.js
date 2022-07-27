import React from "react";
import CustomDonutChart from "./CustomDonutChart";
import "./Wrapper.css";

function Wrapper() {
    const data = [
        { name: "Asset 1", value: 100 },
        { name: "Asset 2", value: 50 },
        { name: "Asset 3", value: 100 },
        { name: "Asset 4", value: 150 },
    ];
    const colors = ["#249B93", "#0061AC", "#FF374C", "#FFAC00"];
    return (
        <div className="wrapper">
            <h2>Start</h2>
            <CustomDonutChart data={data} color={colors} />
        </div>
    );
}

export default Wrapper;
