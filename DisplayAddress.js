
import React from 'react';
import QRCode from 'qrcode.react';

const DisplayAddress = ({ bitcoinAddress }) => {
    return (
        <div className="display-address-container">
            <h2>Your Bitcoin Address</h2>
            <p>{bitcoinAddress}</p>
            <QRCode value={bitcoinAddress} />
        </div>
    );
};

export default DisplayAddress;
