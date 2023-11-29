import { Chart ,ArcElement } from 'chart.js';
import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext';
import  {Pie} from "react-chartjs-2"
Chart.register(ArcElement)
const PieChart = () => {
    const{ transactions,totalIncome,totalExpense} = useContext(TransactionContext)

      const totalBalance = totalIncome - totalExpense;

    const data = {
        labels: ['balance', 'Expense', 'Income'],
        datasets: [
          {
            data: [totalBalance, totalExpense, totalIncome],
            backgroundColor: ['#B1D4E0', '#F7BEC0', '#8AFF8A'],
            hoverBackgroundColor: ['#2E8BC0', '#E7625F', '#00A300'],
          },
        ],
      };
  return (
    <div className='box-3'>
      <h2>Your data tracker</h2>
      <div className="box-4">
      <Pie data={data} />
      </div>
    </div>
  );
};
export default PieChart
