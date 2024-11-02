// src/hooks/useWeb3.js
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export function useWeb3() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const connectWeb3 = async () => {
            try {
                if (typeof window.ethereum !== 'undefined') {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const accounts = await provider.send('eth_requestAccounts', []);
                    const signer = provider.getSigner();
                    
                    setProvider(provider);
                    setSigner(signer);
                    setAccount(accounts[0]);
                } else {
                    throw new Error('Please install MetaMask');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        connectWeb3();
    }, []);

    return { provider, signer, account, error };
}