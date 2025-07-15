import React, { useState } from "react";

const EditForm = (props) => {

    const [newValue, setNewValue] = useState("");
    // let pockets = props.pockets;
    // let editTarget = props.editTarget;

    function updatePocket() {
        let pockets = props.pockets.map((pocket) => 
        pocket.name === props.editTarget ? {...pocket, value : Number(newValue)} : pocket);

        props.setPockets(pockets);

        localStorage.setItem("pockets", JSON.stringify(pockets))
    }
    return (

        <div className="edit-form" id="edit-form">

            <div className="edit-form-contents">
                <input type="text" placeholder="Enter value..." value={newValue} onChange={(e) => setNewValue(e.target.value)} />

                <div className="controls">
                    <button onClick={updatePocket}>Comfirm</button>
                    <button onClick={() => {
                        document.getElementById("edit-form").style.display = 'none';
                    }

                    }
                    >
                        Cancel
                    </button>
                </div>

            </div>

        </div>
    );
}

export default EditForm;