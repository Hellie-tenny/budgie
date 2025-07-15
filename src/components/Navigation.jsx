import React from "react";

const Navigation = (props) => {
    return (
        <div className='content_navigation'>
            <div className='icons-container'>
                <i className="fa-solid fa-wallet" onClick={() => props.setPage("account")}></i>
                <i className="fa-solid fa-piggy-bank" onClick={() => props.setPage("savings")}></i>
            </div>

        </div>
    );
}

export default Navigation;