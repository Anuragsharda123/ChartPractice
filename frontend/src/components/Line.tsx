import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Colors } from 'chart.js';
import React from 'react';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

const LineGraph:React.FC = () => {

    const options = {
        responsive: true
    }
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Series A',
            data: [14, 10, 20, 40, 20,11]
            },
            {
                label: 'Series B',
                data: [15, 20, 32, 20, 55,22]
            },
            {
                label: 'Series C',
                data: [35, 22, 12, 44, 16,33]
            },
        ]
    }

  return (
    <div>
        <Line options={options} data={data} />
    </div>

  )
}

export default LineGraph