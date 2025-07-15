import React from "react";
import { db, auth, googleProvider } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Profile = () => {  

    const singInWGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            alert(`Welcome ${user.displayName}`);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="profile-page">
            <i class="fa-solid fa-user profile-icon"></i>
            <div className="account-details">
                <span className="account-name">Hellings Makondetsa</span>
                <span>Rocket CEO</span>
            </div>
            <button onClick={singInWGoogle}>Signup with Google</button>

        </div>
    );
}

export default Profile;