
import React, { useEffect, useState } from 'react';

const MonitorTransactions = ({ bitcoinAddress, onDepositReceived }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                // Example API call to Blockchain.info or BlockCypher (this URL should be replaced with the actual API endpoint)
                const response = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${bitcoinAddress}`);
                const data = await response.json();

                // Check if there are any new transactions
                if (data.txrefs && data.txrefs.length > transactions.length) {
                    setTransactions(data.txrefs);
                    // Calculate the total received amount and pass it to the callback
                    const totalReceived = data.final_balance;
                    onDepositReceived(totalReceived);
                }
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        }, 60000); // Check every 60 seconds

        return () => clearInterval(intervalId);
    }, [bitcoinAddress, onDepositReceived, transactions]);

    return null; // This component does not render anything
};

export default MonitorTransactions;
