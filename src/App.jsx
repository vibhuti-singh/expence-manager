import React from 'react'
import  { TransactionProvider } from './context/TransactionContext'
import Navbar from './components/Navbar'
import Allsections from './components/Allsections'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PieChart from './components/PieChart'
import BalanceSection from './components/BalanceSection'

const App = () => {
  return (
   <Router>
    
    <TransactionProvider>
      <Navbar/>
      <div className="container-1">
        <BalanceSection/>
      <Routes>
        <Route path='/' element={<Allsections/>}/>
        <Route path='/chart' element={<PieChart/>}/>
      </Routes>
      </div>
       </TransactionProvider>
      
   </Router>
   
   
  )
}

export default App
