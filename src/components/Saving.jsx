import React, { useState, useEffect } from "react";
import SavingsForm from "./SavingsForm";

const Saving = () => {

    const [goals, setGoals] = useState([]);

    function deletSavingeGoal(targetId) {
        const updatedGoals = goals.filter((goal) => goal.id !==targetId);
        setGoals(updatedGoals);
        localStorage.setItem("goals", JSON.stringify(updatedGoals));
    }

    useEffect(() => {
        if (!localStorage.getItem("goals")) {
            // object approach sample array of objects
            setGoals(
                []
            );

            console.log("No goals found!", goals);

        } else {
            setGoals(JSON.parse(localStorage.getItem("goals")));
            console.log("Local Locally stored goals found", goals)
        }
    }, []);

    return (
        <div className="savings-container">

            <SavingsForm
                goals={goals}
                setGoals={setGoals}
            />

            <h1>Saving Goals</h1>
            <div className="controls">
                <button
                    onClick={() => { document.getElementById("savings-form").style.display = 'flex'; }}
                >
                    <i class="fa-solid fa-plus"></i>
                </button>

            </div>
            <div className="goals-container">
                {
                    goals.map((goal) =>


                        <div className="goal-item">

                            <div className="top">
                                <div className="details">
                                    <h4>{goal.goalItem}</h4>
                                    <span>{goal.cost}</span>
                                </div>

                                <div className="controls">
                                    <i className="fa-solid fa-trash" onClick={() => deletSavingeGoal(goal.id)}></i>
                                </div>
                            </div>

                            <div className="bottom">

                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Saving;