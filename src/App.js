import './App.css';
import Deposit from './components/Deposit';
import React, { useEffect, useState } from 'react';



function App() {

  // states and variables
  // const [cashBalance, setCashBalance] = useState(0);
  // const [mpambaBalance, setMpambsBalance] = useState(0);
  // const [bankBalance, setBankBalance] = useState(0);
  // const [airtelMoneyBalance, setairtelMoneyBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [balanceList, setBalanceList] = useState([]);

  // object approach
  const pockets = [
    {
      name: "cash",
      value: 400
    },
    {
      name: "bank",
      value: 360
    },
    {
      name: "airtelmoney",
      value: 960
    },
    {
      name: "mpamba",
      value: 5000
    }
  ];

  const total = pockets.reduce((acc, pocket) => {
    return acc + pocket.value;
  }, 0)

  console.log();

  // useEffect(() => {
  //   // setting totalBalacnce
  //   setBalanceList([cashBalance, bankBalance, mpambaBalance, airtelMoneyBalance]);
  // }, [balanceList]);

  useEffect(() => {
    let total = 0;
    total = balanceList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("The fricking total is", total)
    setTotalBalance(total);
  }, [balanceList]);

  const showDepositForm = () => {
    document.getElementById('deposit-container').style.display = 'flex';

  }

  return (
    <div className="App">
      <Deposit
        pockets={pockets}
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
          <h2 id="balance">{total}</h2>
          <div className='pockets'>
            <ul>
              {pockets.map(
                pocket => <li>{pocket.name} : {pocket.value}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
