import React, { useEffect } from "react";
import Footer from "./Footer";
import GoogleButton from "react-google-button";
import { auth, googleProvider } from "../config/firebase";
import { VscGraphLine } from "react-icons/vsc";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const singInWGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
          if(user) {
            alert("Welcome", user.displayName);
            navigate("/");
          } else {
            
          }
        })

        return () => unsubcribe();
        
      }, [navigate]);

    return (
        <div className='login'>

            <div className="login-container">

                <div className="get-started">
                    <div className="login-header">
                        <h2>Budgie.</h2>
                    </div>
                    <div className="get-started-container">
                        <p>Welcome to the smartest Budget Assistant.  <br />Sign in to get started</p>
                        <GoogleButton onClick={singInWGoogle}/>
                    </div>

                </div>
                <div className="feature track-your-spending">
                    <VscGraphLine className="get-started-icons" />
                    <h2>
                        Track your spending
                    </h2>

                    <p>
                        Track your every financial activity to understand exactly what cost how much of your income
                    </p>
                </div>
            </div>

            <Footer />

        </div>
    );
}
export default Login;