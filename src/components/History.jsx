import React, { useContext } from 'react'
import TableBody from './TableBody'
import TransactionContext from '../context/TransactionContext'

const History = () => {
    const {transactions} = useContext(TransactionContext)
  return (
    <>
       <div className="history mt-4 w-75 mx-5 ">
        <h2>Transaction History</h2>
        <table className="table ">
            {/* <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='' id="transactionList">
{
    transactions.map(transaction=><TableBody key={transaction.id} transaction={transaction}/>)
}

            </tbody> */}
             {transactions.length > 0 && (
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
      )}
      <tbody className='' id="transactionList">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TableBody key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <tr>
            <td colSpan="5">No transactions yet</td>
          </tr>
        )}
      </tbody>
        </table>
    </div>
    </>
  )
}

export default History
