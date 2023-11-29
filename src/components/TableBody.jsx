import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'
const TableBody = ({transaction}) => {
    const {deleteExpense}=useContext(TransactionContext)
  return (
    <>
      <tr className={transaction.type==="Income"? "text-success": "text-danger"}>
    <td>{transaction.date}</td>
    <td>{transaction.description}</td>
    <td>₹{transaction.amount}</td>
    <td>{transaction.type}</td>
    <td>
        <button type="button" className="btn btn-danger" onClick={()=>deleteExpense(transaction.id)}>Delete</button>
    </td>
</tr>
    </>
  )
}

export default TableBody
