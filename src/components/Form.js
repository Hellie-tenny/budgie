import React, { useState } from 'react';

const Deposit = (props) => {

    // states and variables
    const [depositValue, setDepositValue] = useState(0);
    const [pocket, setPocket] = useState("cash");
    let pockets = props.pockets;

    console.log(props.setCashBalance);

    const closeDepositForm = () => {
        document.getElementById('deposit-container').style.display = "none";
    }

    const closeWithdrawForm = () => {
        document.getElementById('withdraw-container').style.display = "none";
    }

    const changePocket = (e) => {
        setPocket(e.target.value);
    }

    // deposit function
    const deposit = () => {

        // updating cash balance
        if (pocket === "cash") {

            pockets = pockets.map((pocket) =>
                pocket.name === "cash" ? { ...pocket, value: pocket.value + Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }

        // updating bank balance
        if (pocket === "bank") {

            pockets = pockets.map((pocket) =>
                pocket.name === "bank" ? { ...pocket, value: pocket.value + Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }

        // updating airtel money balance
        if (pocket === "airtel money") {

            pockets = pockets.map((pocket) =>
                pocket.name === "airtel money" ? { ...pocket, value: pocket.value + Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }

        // updating mpamba balance
        if (pocket === "mpamba") {

            pockets = pockets.map((pocket) =>
                pocket.name === "mpamba" ? { ...pocket, value: pocket.value + Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }



    }

    // withdraw function
    const withdraw = () => {

        // updating cash balance
        if (pocket === "cash") {

            pockets = pockets.map((pocket) =>
                pocket.name === "cash" ? { ...pocket, value: pocket.value - Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }

        // updating bank balance
        if (pocket === "bank") {

            pockets = pockets.map((pocket) =>
                pocket.name === "bank" ? { ...pocket, value: pocket.value - Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }

        // updating airtel money balance
        if (pocket === "airtel money") {

            pockets = pockets.map((pocket) =>
                pocket.name === "airtel money" ? { ...pocket, value: pocket.value - Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }

        // updating mpamba balance
        if (pocket === "mpamba") {

            pockets = pockets.map((pocket) =>
                pocket.name === "mpamba" ? { ...pocket, value: pocket.value - Number(depositValue) } : pocket
            )

            props.setPockets(pockets);

            // adding the new array to localstorage
            localStorage.setItem("pockets", JSON.stringify(pockets))

            console.log("All your shit has been fucked over", pockets)


        }



    }

    return (
        <>
        <div className='deposit-container' id='deposit-container'>

            {/* depost form */}
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

        <div className='withdraw-container' id='withdraw-container'>

        {/* withdraw */}
        <div className='deposit-form'>
            <span onClick={closeWithdrawForm}>x</span>
            <input type='text' onChange={(e) => { setDepositValue(e.target.value) }} placeholder='Amount'></input>

            <select value={pocket} onChange={changePocket}>
                {props.pockets.map(
                    pocket => <option value={pocket.name}>{pocket.name}</option>
                )}
            </select>

            <button onClick={withdraw}>WITHDRAW</button>
        </div>

    </div>
    </>
    );

}

export default Deposit;