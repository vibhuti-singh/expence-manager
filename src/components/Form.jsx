import React, { useContext, useState } from 'react'
import TransactionContext from '../context/TransactionContext'
const Form = () => {
    const {saveExpense} = useContext(TransactionContext)

const[date, setDate]=useState("")
    const[description, setDescription] = useState("")
    const[amount, setAmount]=useState("")
    const[type, setType] = useState("Income")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(! description || ! amount || !date ||!type){
            alert("please fill all details")
        }else{
            saveExpense(date,description, +amount,type)
        setDate("")
        setDescription("")
        setAmount("")
        setType("")
        }
    }
  return (
    <>
      <div className="form-1 mt-4 w-25 text-light m-2">
        <h2 className='text-light'>Add Transaction</h2>
        <form id="addTransactionForm" >
            <div className="form-group">
                <label htmlfor="transactionDate">Date:</label>
                <input type="date" className="form-control" id="transactionDate" required value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlfor="transactionDescription">Description:</label>
                <input type="text" className="form-control" id="transactionDescription" required value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlfor="transactionAmount">Amount:</label>
                <input type="number" className="form-control" id="transactionAmount" required value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlfor="transactionType">Type:</label>
                <select className="form-control" id="transactionType" required value={type} onChange={(e)=>setType(e.target.value)} type="selector">
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Transaction</button>
        </form>
    </div>
    </>
  )
}

export default Form
