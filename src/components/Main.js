import React from 'react'
import { Data } from "./Data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import LineChart from "./LineChart";

Chart.register(CategoryScale);

const Main = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                data: Data.map((data) => data.userLost),
                backgroundColor: ["rgba(75,192,192,1)"],
                borderColor: "#24d2b5",
                borderWidth: 3
            }
        ]
    });
    return (
        <>
            <LineChart chartData={chartData} />
        </>
    )
}

export default Main