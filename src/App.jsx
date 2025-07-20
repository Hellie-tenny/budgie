import './App.css';
import './res/fontawesome-free-6.7.2-web/css/all.min.css';
import Main from './components/Main';
import Login from './components/Login';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

function App() {
  // States and variables
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (

    <div className="App">

      <Router>
        <Routes>
          {/* <Route path='/' element={<Main />} /> */}
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={isLoggedIn ? <Main /> : <Navigate to='/login' replace />}

          />
        </Routes>

      </Router>

    </div>

  );
}

export default App;