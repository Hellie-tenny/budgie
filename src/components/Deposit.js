import React, { useState } from 'react';



const Deposit = (props) => {
    // states and variables
    const [depositValue, setDepositValue] = useState(null);

    const closeDepositForm = () => {
        document.getElementById('deposit-container').style.display = "none";
    }

    const deposit = () => {
        if (props.pocket === "cash") {
            props.setCashBalance(props.cashBalance + depositValue);
        }
    }

    return (
        <div className='deposit-container' id='deposit-container'>

            <div className='deposit-form'>
                <span onClick={closeDepositForm}>x</span>
                <input type='text' onChange={(e) => {setDepositValue(e.target.value)}} placeholder='Amount'></input>

                <select>
                    <option name="pocket" value="cash">Cash</option>
                    <option name="pocket" value="bank">Bank</option>
                    <option name="pocket" value="mpamba">Mpamba</option>
                </select>

                <button onClick={deposit}>DEPOSIT</button>
            </div>
        </div>
    );
}

export default Deposit;