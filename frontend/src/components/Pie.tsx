import {Pie} from 'react-chartjs-2';
import { Chart, Tooltip, Legend, ArcElement, Colors } from 'chart.js'
import React from 'react'

Chart.register(
    Tooltip,
    Legend,
    ArcElement,
    Colors
)

const PieChart:React.FC = () => {
    const options = {
        responsive: true
    }

    const data = {
        labels: ['Red', 'Green', 'Yellow', 'Blue'],
        datasets: [{
            label: '# of Votes',
            data: [12, 10, 3, 5],
            hoverOffset:50
            }]
    }

  return (
    <div>
        <Pie options={options} data={data} />
    </div>
  )
}

export default PieChart