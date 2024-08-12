
import React, { useState, useEffect } from 'react';
import bitcoin from 'bitcoinjs-lib';

const GenerateAddress = ({ onAddressGenerated }) => {
    useEffect(() => {
        // Generate a new Bitcoin address when the component mounts
        const keyPair = bitcoin.ECPair.makeRandom();
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
        onAddressGenerated(address);
    }, [onAddressGenerated]);

    return null;
};

export default GenerateAddress;
