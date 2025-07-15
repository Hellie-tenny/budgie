import React, { useEffect, useState } from "react";
import Form from './Form';
import EditForm from "./EditForm";

const MainAccount = (props) => {

    const [pockets, setPockets] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [transType, setTransType] = useState();
    const [editTarget, setEditTarget] = useState("");
    
    
    // let editTarget = "";

    useEffect(() => {
        if (!localStorage.getItem("pockets")) {
            // object approach sample array of objects
            setPockets(
                [
                    {
                        name: "cash",
                        value: 0
                    },
                    {
                        name: "bank",
                        value: 0
                    },
                    {
                        name: "airtel money",
                        value: 0
                    },
                    {
                        name: "mpamba",
                        value: 0
                    }
                ]
            );

            console.log("The local storage was empty, therfore pockets were set to detault value!", pockets);

        } else {
            setPockets(JSON.parse(localStorage.getItem("pockets")));
            console.log("The local storage was found, this is the value", pockets)
        }
    }, [])


    useEffect(() => {
        updateBalance();
        console.log("use effect activated!");
    }, [pockets]);

    // this function updates the total balance
    const updateBalance = () => {
        const total = pockets.reduce((acc, pocket) => {
            return acc + pocket.value;
            console.log("Balance is set")
        }, 0);

        setTotalBalance(total);
        console.log("POCKETS HAS CHANGED!!!!!!!!!!!!");
    }

    // this function updates pockets
    const updatePockets = () => {
        // updating balances
        setPockets(JSON.parse(localStorage.getItem("pockets")));
    }

    // function that shows deposit form
    const showDepositForm = () => {
        document.getElementById('deposit-container').style.display = 'flex';

    }

    // function that shows withdraw form
    const showWithdrawForm = () => {
        document.getElementById('withdraw-container').style.display = 'flex';

    }

    function editPocket(pocketName){
        document.getElementById("edit-form").style.display = 'flex';
        setEditTarget(pocketName);
        console.log(editTarget)
    }

    return (
        <div className='content_container'>

            <Form
                pockets={pockets}
                setPockets={setPockets}
                transType={transType}
                setTransType={setTransType}
            />

            <EditForm
                setPockets={setPockets}
                pockets={pockets}
                editTarget={editTarget}
            />


            {/* pockets and balance */}
            <div className='grid-item'>
                <h2 id="balance">{totalBalance.toLocaleString()}</h2>
            </div>

            {/* transact */}
            <div className='grid-item'>
                <div className='transact'>
                    <button onClick={showDepositForm} id='deposit'>Deposit</button>
                    <button onClick={showWithdrawForm} id='withdraw'>Withdraw</button>
                </div>
                <div className='pockets'>
                    <ul>
                        {pockets.map(
                            pocket => <li><i className="fa-solid fa-file-pen" onClick={() => editPocket(pocket.name)}></i>{pocket.name} : {pocket.value}</li>
                        )}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default MainAccount;