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
            // props.setPocket((props.pockets) =>
            //     props.pockets.map((pocket) => {
            //         pocket.name === "cash" ? {...pocket, value : depositValue} : pocket
            //     }););
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
                {props.pockets.map(
                    pocket => <option value={pocket.name}>{pocket.name}</option>
                )}
            </select>

            <button onClick={deposit}>DEPOSIT</button>
        </div>
    </div>
);

}

export default Deposit;