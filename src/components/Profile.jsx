import React from "react";
import { db, auth, googleProvider } from "../config/firebase";
import { signOut } from "firebase/auth"

const Profile = () => {

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                // Optional: show a message or redirect
            })
            .catch((error) => {
                console.error("Sign-out error", error);
            });
    };

    const user = auth.currentUser;

    return (
        <div className="profile-page">
            <i class="fa-solid fa-user profile-icon"></i>
            <div className="account-details">
                <span className="account-name">{user.displayName}</span>
                <span>Budget Admin</span>
            </div>
            <button onClick={handleLogout}>Log Out</button>

        </div>
    );
}

export default Profile;