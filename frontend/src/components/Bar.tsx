import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Colors } from 'chart.js';
import React from 'react'

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

const BarChart:React.FC = () => {
    const options = {}

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Series A',
                data: [10, 20, 15, 20, 40]
            },
            {
                label: 'Series B',
                data: [14, 24, 10, 50 , 20]
            },
        ]
    }

  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart