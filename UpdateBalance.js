
import React, { useState, useEffect } from 'react';

const UpdateBalance = ({ initialBalance, depositAmount }) => {
    const [balance, setBalance] = useState(initialBalance);

    useEffect(() => {
        if (depositAmount > 0) {
            setBalance(balance + depositAmount);
        }
    }, [depositAmount]);

    return (
        <div className="balance-container">
            <h2>Your Balance</h2>
            <p>{balance} BTC</p>
        </div>
    );
};

export default UpdateBalance;
