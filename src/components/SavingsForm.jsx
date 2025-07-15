import React, { useState } from "react";

const SavingsForm = (props) => {

    // variablea
    const [newGoalItem, setNewGoalItem] = useState("");
    const [newGoalCost, setNewGoalCost] = useState("");

    function addGoal(){
        const newGoal = {goalItem : newGoalItem, cost : newGoalCost};
        const goals = [...props.goals, newGoal];
        props.setGoals(goals);
        localStorage.setItem("goals", JSON.stringify(goals));
        console.log(goals);
        
        // console.log(props.goals);
    }

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

                <input placeholder="Item..." value={newGoalItem} onChange={(e) => setNewGoalItem(e.target.value)}/>
                <input placeholder="Cost" value={newGoalCost} onChange={(e) => setNewGoalCost(e.target.value)}/>
                <button onClick={() => addGoal()}>ADD GOAL</button>
            </div>

        </div>
    );
}

export default SavingsForm;