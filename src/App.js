import './App.css';
import Deposit from './components/Deposit';
import React, {useState} from 'react';



function App() {

// states and variables
const [cashBalance, setCashBalance] = useState(0);
const [mpambaBalance, setMpambsBalance] = useState(0);
const [bankBalance, setBankBalance] = useState(0);
const [airtelMoneyBalance, setairtelMoneyBalance] = useState(0);

  const showDepositForm = () => {
    document.getElementById('deposit-container').style.display = 'flex';
    document.getElementById('deposit-container').style.display = 'flex';
    document.getElementById('deposit-container').style.display = 'flex';
  }

  return (
    <div className="App">
      <Deposit 
      cashBalance={cashBalance} setCashBalance={setCashBalance} 
      bankBalance={bankBalanceBalance} setBankBalance={setBankBalance} 
      />
      <div className="header">
        <h1 id='logo-text'>Budgie.</h1>
      </div>
      <div className='main'>
        <div className='grid-item'></div>
        <div className='grid-item'>
          <div className='transact'>
            <button onClick={showDepositForm} id='deposit'>Deposit</button>
            <button id='withdraw'>Withdraw</button>
          </div>

        </div>
        <div className='grid-item'>
          <h2 id="balance">1,000,000,000</h2>
          <div className='pockets'>
            <ul>
              <li>Cash : {cashBalance}</li>
              <li>Mpamba : {mpambaBalance}</li>
              <li>Airtel Money : {airtelMoneyBalance}</li>
              <li>Bank : {bankBalance}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
