import './App.css';
import Deposit from './components/Deposit';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';




function App() {

  // states and other variables
  const [totalBalance, setTotalBalance] = useState(0);
  const [pockets, setPockets] = useState([]);
  let storedPockets = [];

  useEffect(() => {
    if (!localStorage.getItem("pockets")) {
      // object approach sample array of objects
      setPockets(
        [
          {
            name: "cash",
            value: 0
          },
          {
            name: "bank",
            value: 0
          },
          {
            name: "airtel money",
            value: 0
          },
          {
            name: "mpamba",
            value: 0
          }
        ]
      );

      console.log("The local storage was empty, therfore pockets were set to detault value!", pockets);

    } else {
      setPockets(JSON.parse(localStorage.getItem("pockets")));
      console.log("The local storage was found, this is the value", pockets)
    }
  }, [])


  useEffect(() => {
    updateBalance();
    console.log("use effect activated!");
  }, [pockets]);

  const showDepositForm = () => {
    document.getElementById('deposit-container').style.display = 'flex';

  }

  // this function updates pockets
  const updatePockets = () => {
    // updating balances
    setPockets(JSON.parse(localStorage.getItem("pockets")));
  }

  // this function updates the total balance
  const updateBalance = () => {
    const total = pockets.reduce((acc, pocket) => {
      return acc + pocket.value;
      console.log("Balance is set")
    }, 0);

    setTotalBalance(total);
    console.log("POCKETS HAS CHANGED!!!!!!!!!!!!");
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

      <Footer />

    </div>
  );
}

export default App;
