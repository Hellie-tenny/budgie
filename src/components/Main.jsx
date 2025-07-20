import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import Footer from "./Footer";
// import ShoppingList from './components/ShoppingList';
import MainAccount from './MainAccount';
import NotFound from './NotFound';
import Profile from './Profile';
import Saving from './Saving';
import Navigation from './Navigation';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Main = () => {
  // states and other variables
  const [page, setPage] = useState("account");
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        alert("Welcome", user.displayName);
      } else {
        navigate("/login");
      }
    })

    return () => unsubcribe(); 

  }, [navigate]);

  return (
    <>
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
    </>
  );
}

export default Main;

