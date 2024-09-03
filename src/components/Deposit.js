import React, { useState } from 'react';



const Deposit = (props) => {
    // states and variables
    const [depositValue, setDepositValue] = useState(0);
    const [pocket, setPocket] = useState("cash");

    console.log(props.setCashBalance);

    const closeDepositForm = () => {
        document.getElementById('deposit-container').style.display = "none";
    }

    const changePocket = (e) => {
        setPocket(e.target.value);
    }

    const deposit = () => {
        if (pocket === "cash") {
            props.setCashBalance(Number(props.cashBalance) + Number(depositValue));
        }
        if (pocket === "bank") {
            props.setBankBalance(Number(props.bankBalance) + Number(depositValue));
        }
    }

return (
    <div className='deposit-container' id='deposit-container'>

        <div className='deposit-form'>
            <span onClick={closeDepositForm}>x</span>
            <input type='text' onChange={(e) => { setDepositValue(e.target.value) }} placeholder='Amount'></input>

            <select value={pocket} onChange={changePocket}>
                <option value="cash">Cash</option>
                <option value="bank">Bank</option>
                <option value="mpamba">Mpamba</option>
            </select>

            <button onClick={deposit}>DEPOSIT</button>
        </div>
    </div>
);

}

export default Deposit;