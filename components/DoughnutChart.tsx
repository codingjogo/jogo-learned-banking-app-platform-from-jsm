"use client";

import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Source: https://youtu.be/7fJbYh-9uMI?si=sFh0ayCfzcJqGZ6p
Chart.register(ArcElement,Tooltip, Legend);

export const data = {
	labels: ["Bank 1", "Bank 2", "Bank 3"],
	datasets: [
		{
			label: "Banks",
			data: [1250, 2500, 3750],
			backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
		},
	],
};

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
	return (
		<Doughnut
			data={data}
			options={{
				cutout: "60%",
                plugins: {
                    legend: {
                        display: false,
                    }
                }
			}}
		/>
	);
};

export default DoughnutChart;
