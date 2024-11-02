// src/hooks/useContract.js
import { useState } from 'react';
import { ethers } from 'ethers';
import PaymentContractABI from '../src/config/abi.json';
import { CONTRACT_ADDRESS } from '../src/config/contract';

export function useContract(signer) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        PaymentContractABI,
        signer
    );

    const makePayment = async (amount) => {
        setLoading(true);
        setError(null);
        try {
            const tx = await contract.makePayment({
                value: ethers.utils.parseEther(amount.toString())
            });
            await tx.wait();
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { contract, makePayment, loading, error };
}