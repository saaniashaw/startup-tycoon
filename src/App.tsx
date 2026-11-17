import { useState } from 'react'
import CompanyHeader from './components/CompanyHeader'
import BalanceDisplay from './components/BalanceDisplay'
import './App.css'

function App() {
  const [balance, setBalance] = useState(10000)
  return (
    <>
      <CompanyHeader companyName="PixelWorks" />
      <BalanceDisplay balance={balance} />
      <button onClick={() => setBalance(balance + 5000)}>Receive Client Payment (+₹5,000)</button>
      <button onClick={() => setBalance(balance - 2000)}>Pay Office Expenses (-₹2,000)</button>
    </>
  )
}

export default App
