import { createContext, useState } from "react";

const TransactionContext = createContext()

export const TransactionProvider=({children})=>{

    const [transactions, setTransactions] = useState([
      
        
      ]);
    
const deleteExpense = (id)=>{
    setTransactions(transactions.filter(item=>item.id!==id))
}

const saveExpense=(date,description,amount, type)=>{
    const newTransaction={
        id: crypto.randomUUID(),
        date,
        description,
        amount,
        type
    }
    setTransactions([newTransaction,...transactions])
}
const totalIncome = transactions.reduce((acc, transaction) => {
    return transaction.type === 'Income' ? acc + transaction.amount : acc;
  }, 0);
  const totalExpense = transactions.reduce((acc, transaction) => {
    return transaction.type === 'Expense' ? acc + transaction.amount : acc;
  }, 0);
    return(
        <TransactionContext.Provider value={{transactions, deleteExpense,  saveExpense,totalIncome,totalExpense}}>
{children}

        </TransactionContext.Provider>
    )
}
export default TransactionContext