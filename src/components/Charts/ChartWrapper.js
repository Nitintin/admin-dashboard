import React, {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { StyledDiv } from './ChartWrapper.styled';
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels= ['Age 10-19','Age 20-29', 'Age 30-39','Age 40-49','Age 50-59'];

const ChartWrapper = () =>{

  const [chartOneData, setChartOneData] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'User Age Trend',
        data: chartOneData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  const fetchUsers = async () => {
    const response = await axios('https://dummyjson.com/users?skip=30');
    const userArr = response.data.users;
    const finalArr = [0, 0, 0, 0, 0];
    for(let i=0; i<userArr.length; i++){
      if(userArr[i].age >= 10 && userArr[i].age <= 19){
        finalArr[0] += 1;
      } else if(userArr[i].age >= 20 && userArr[i].age <= 29){
        finalArr[1] += 1;
      } else if(userArr[i].age >= 30 && userArr[i].age <= 39){
        finalArr[2] += 1;
      } else if(userArr[i].age >= 40 && userArr[i].age <= 49){
        finalArr[3] += 1;
      } else if(userArr[i].age >= 50 && userArr[i].age <= 59){
        finalArr[4] += 1;
      }
    }
    setChartOneData(finalArr);
  }
    return <section className='chartWrapper'>
      <StyledDiv>
        <Line data={data} />
      </StyledDiv>
      <StyledDiv>
        Chart JS:  2
      </StyledDiv>
        
    </section>
}


export default ChartWrapper;