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
  const [pockets, setPockets] = useState([
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
  ]);


  useEffect(() => {

    const total = pockets.reduce((acc, pocket) => {
      return acc + pocket.value;
    }, 0);

    setTotalBalance(total);
    console.log("POCKETS HAS CHANGED!!!!!!!!!!!!")

  }, [pockets]);

  const showDepositForm = () => {
    document.getElementById('deposit-container').style.display = 'flex';

  }

  return (
    <div className="App">
      <Deposit
        pockets={pockets}
        setPockets={setPockets}
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
          <h2 id="balance">{totalBalance}</h2>
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
