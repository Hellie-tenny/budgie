import React from 'react';

const Deposit = () => {

    const closeDepositForm = () => {
        document.getElementById('deposit-container').style.display = "none";
    }

    return (
        <div className='deposit-container' id='deposit-container'>
            <span onClick={closeDepositForm}>x</span>
            <div className='deposit-form'>
                <input type='text' placeholder='Amount'></input>

                <select>
                    <option>Cash</option>
                    <option>Bank</option>
                    <option>Mpamba</option>
                </select>

                <button>DEPOSIT</button>
            </div>
        </div>
    );
}

export default Deposit;