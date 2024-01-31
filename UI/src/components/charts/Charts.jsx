import './Charts.scss';
import axiosInstance from '../../api/axios';
import { useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement,
ArcElement, Tooltip } from 'chart.js';

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip
)

const Charts = () => {

    const [lineChartData, setLineChartData] = useState([])
    const [pieChartData, setPieChartData] = useState([])

    useEffect(()=>{
        const fetchChart = async()=>{
            const response = await axiosInstance.get('/api/graph');
            const Pieresponse = await axiosInstance.get('/api/pie-chart');
            setLineChartData(response.data)
            setPieChartData(Pieresponse.data)
        }
        fetchChart();
     },[])


      const lineChartLabels = lineChartData.map(data => data.x);
      const lineChartDaata = lineChartData.map(data => data.y);
      const PieChartLabels = pieChartData.map(data => data.label);
      const PieChartDaata = pieChartData.map(data => data.value);

      const pieColors = ['rgb(108,191,138)','rgb(232,238,253)','rgb(180,241,198)','rgb(168,222,186)','rgb(173,221,187)']

    const  lineData = {
        labels : lineChartLabels,
        datasets : [{
            data : lineChartDaata,
            backgroundColor : 'white',
            borderColor : 'rgb(180,203,219)',
            pointBackgroundColor : 'rgb(180,203,219)',
            tension : 0.4
        }]
    }

    const lineOptions = {
        plugins : {
            legend : true
        },
        scales : {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5, 
                    max: Math.ceil(Math.max(...lineChartDaata) / 5) * 5
                }
            }
        }
    }


    const  PieData = {
        labels : PieChartLabels,
        datasets : [{
            data : PieChartDaata,
            backgroundColor : pieColors,
        }]
    }
    const pieOptions = {

    }
  return (
    <div className='charts'>
        <div className="lineChart">
        <Line
            options={lineOptions}
            data={lineData}
            ></Line>
       </div>

       <div className="pieChart">
        <Pie className='circle'
         data={PieData}
         options={pieOptions}   
        />

        <div className="colorsDetails">
        <div>
          {pieColors.map((color,i)=>(
             <div className="color" key={i} style={{backgroundColor: color}}></div>
             ))}
       </div>

        <div>
         {pieChartData.map((value,i)=>(
            <p key={i}>{value.label}</p>
            ))}
        </div>
         </div>
       </div>
    </div>
  )
}

export default Charts