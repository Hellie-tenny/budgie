import React from "react";
import SavingsForm from "./SavingsForm";

const Saving = () => {
    return (
        <div className="savings-container">
            
            <SavingsForm />

            <h1>Saving Goals</h1>
            <div className="controls">
                <button 
                    onClick={() => {document.getElementById("savings-form").style.display = 'flex';}}
                >
                    <i class="fa-solid fa-plus"></i>
                </button>

            </div>
        </div>
    );
}

export default Saving;