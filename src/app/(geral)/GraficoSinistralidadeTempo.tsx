"use client";

import { Competencia } from "@prisma/client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { format } from "date-fns";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function GraficoSinistralidadeTempo({ data }: { data: Competencia[] }) {
  const labels = data.map((comp) => format(new Date(comp.data), "MM/yyyy"));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Meta",
        data: data.map(() => 70),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sinistralidade",
        data: data.map((comp) => +comp.sinistralidade),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
