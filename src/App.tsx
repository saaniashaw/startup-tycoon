import { useState } from 'react'
import CompanyHeader from './components/CompanyHeader'
import BalanceDisplay from './components/BalanceDisplay'
import './App.css'

function App() {
  const [balance, setBalance] = useState(10000)
  return (
    <>
      <CompanyHeader companyName="PixelWorks" />
      <h2>Company Dashboard</h2>
      <BalanceDisplay balance={balance} />
      <p>
        {balance < 3000 ? 'Low Funds!' : 'Financially Healthy'}
      </p>
      <div className="financial-actions">
        <button onClick={() => setBalance(balance + 5000)}>Receive Client Payment (+₹5,000)</button>
        <button onClick={() => {
          if (balance >= 2000) {
              setBalance(balance - 2000);
            } else {
              alert ('Insufficient funds!');
            }
          }}
        >
          Pay Office Expenses (-₹2,000)
        </button>
      </div>
    </>
  )
}

export default App
