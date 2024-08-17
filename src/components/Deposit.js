import React from 'react';

const Deposit = () => {
    return(
        <div className='deposit-container'>
            <div className='deposit-form'>
                <input type='text' placeholder='Amount'></input>

                <input name='pocket' value='cash' type='checkbox' />
                <input name='pocket' value='bank' type='checkbox' />
                <input name='pocket' value='mpamba' type='checkbox' />

                <button>DEPOSIT</button>
            </div>
        </div>
    );
}

export default Deposit;