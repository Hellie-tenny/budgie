import React from "react";

const SavingsForm = () => {
    return (
        <div className="savings-form" id="savings-form">

            <div className="savings-form-container">
                <div className="savings-form-controls">
                    <span
                            onClick={() => {document.getElementById("savings-form").style.display = "none";}}
                        >
                        x
                    </span>
                </div>

                <input placeholder="Item..." />
                <input placeholder="Cost" />
            </div>

        </div>
    );
}

export default SavingsForm;