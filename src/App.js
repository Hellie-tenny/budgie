import './App.css';
import Form from './components/Form';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';

function App() {

  // states and other variables
  const [totalBalance, setTotalBalance] = useState(0);
  const [pockets, setPockets] = useState([]);
  const [transType, setTransType] = useState();

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

  // function that shows deposit form
  const showDepositForm = () => {
    document.getElementById('deposit-container').style.display = 'flex';

  }

// function that shows withdraw form
  const showWithdrawForm = () => {
    document.getElementById('withdraw-container').style.display = 'flex';

  }

  // this function updates pockets
  // const updatePockets = () => {
  //   // updating balances
  //   setPockets(JSON.parse(localStorage.getItem("pockets")));
  // }

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
      <Form
        pockets={pockets}
        setPockets={setPockets}
        transType={transType}
        setTransType={setTransType}
      />

      {/* header section */}
      <div className="header">
        <h1 id='logo-text'>Budgie.</h1>
      </div>

      <div className='main'>

        {/* shoppig list */}
        <div className='grid-item'>
          <ShoppingList />
        </div>

        {/* transact */}
        <div className='grid-item'>
          <div className='transact'>
            <button onClick={showDepositForm} id='deposit'>Deposit</button>
            <button onClick={showWithdrawForm} id='withdraw'>Withdraw</button>
          </div>
        </div>

        {/* pockets and balance */}
        <div className='grid-item'>
          <h2 id="balance">{totalBalance.toLocaleString()}</h2>
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
