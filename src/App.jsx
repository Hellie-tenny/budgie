import './App.css';
import './res/fontawesome-free-6.7.2-web/css/all.min.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
// import ShoppingList from './components/ShoppingList';
import MainAccount from './components/MainAccount';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Saving from './components/Saving';
import Navigation from './components/Navigation';

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
        <i className="fa-regular fa-circle-user" onClick={() => setPage("profile")}></i>
      </div>

      <div className='main'>

        <Navigation 
          setPage={setPage}
        />

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