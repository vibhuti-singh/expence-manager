import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext';
const BalanceSection = () => {
    const{ transactions,totalIncome,totalExpense} = useContext(TransactionContext)


    // const totalIncome = transactions.reduce((acc, transaction) => {
    //     return transaction.type === 'Income' ? acc + transaction.amount : acc;
    //   }, 0);
    
    //   const totalExpense = transactions.reduce((acc, transaction) => {
    //     return transaction.type === 'Expense' ? acc + transaction.amount : acc;
    //   }, 0);
    
      const totalBalance = totalIncome - totalExpense;



return (
   <div className="container-bal w-100 d-flex justify-content-between p-2">
     <div className="alert alert-primary w-25" role="alert">
        Total Balance: ₹<span id="totalBalance">{totalBalance.toFixed(2)}</span>
    </div>
    <div className="alert alert-success w-25" role="alert">
        Total Income: ₹<span id="totalIncome">{totalIncome.toFixed(2)}</span>
    </div>
    <div className="alert alert-danger w-25" role="alert">
        Total Expense: ₹<span id="totalExpense">{totalExpense.toFixed(2)}</span>
    </div>
   </div>
  )
}

export default BalanceSection
