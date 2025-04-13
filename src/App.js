import './App.css';
import './res/fontawesome-free-6.7.2-web/css/all.min.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
// import ShoppingList from './components/ShoppingList';
import MainAccount from './components/MainAccount';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Saving from './components/Saving';

function App() {

  // states and other variables
  const [page, setPage] = useState("account");

  // FIRST PART

  return (

    <div className="App">
      {/* SECOND PART */}

      {/* header section */}
      <div className="header">
        <h1 id='logo-text'>Budgie.</h1>
      </div>

      <div className='main'>

        <div className='content_navigation'>
          <div className='icons-container'>
            <i className="fa-solid fa-wallet" onClick={() => setPage("account")}></i>
            <i className="fa-regular fa-circle-user" onClick={() => setPage("profile")}></i>
            <i className="fa-solid fa-piggy-bank" onClick={() => setPage("savings")}></i>
          </div>

        </div>

        {page === "account" ?
          <MainAccount /> :
          page === "profile" ?
            <Profile /> :
          page === "savings" ?
            <Saving /> :
            <NotFound />
        }

      </div>

      <Footer />


    </div>

  );
}

export default App;