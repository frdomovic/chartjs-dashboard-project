import React from "react";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
//data for bar chart
const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales/ month",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

//doughnut chart data set

const data1 = {
  labels: ["Organic", "Social Media", "Websites"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
export default function Content() {
  return (
    <div className='bg-gray-100'>
      <div>
        <div id='tabs' className='px-20 py-10'>
          <div id='cateogires' className='flex justify-between'>
            <div className='categories'>
              <h1 className='titles'>Companies</h1>
            </div>
            <div className='categories'>
              <h1 className='titles'>Customers</h1>
            </div>
            <div className='categories'>
              <h1 className=' titles'>Users</h1>
            </div>
            <div className='categories'>
              <h1 className='titles'>Projects</h1>
            </div>
          </div>
        </div>
        {/**chartjs */}
        <div
          id='charts'
          className='flex flex-col justify-center items-center py-10'
        >
          <div
            id='bar'
            className='w-3/4 flex flex-col justify-center items-center'
          >
            <h2 className='font-bold text-6xl'>Sales</h2>
            <div className='w-3/4'>
              <Line data={data} />*
            </div>
          </div>
          <div id='circle'>
            <h2 className='font-bold text-6xl py-4'>Customers Arrived</h2>
            <div>
              <Doughnut data={data1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
