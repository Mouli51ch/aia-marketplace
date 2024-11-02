// First, create a contract configuration file (src/config/contract.ts)
export const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";
export const CONTRACT_ABI = [
    {
        "inputs": [],
        "name": "makePayment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    // Add other ABI entries as needed
];

// Modified SmartContractButton component (in your hero.tsx)
import React, { useState } from 'react';
import { Wallet, ArrowRight, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './contract';

const SmartContractButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [paymentAmount] = useState("0.01"); // Set your default payment amount in ETH

  const handlePayment = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Check if Web3 is available
      if (typeof window.ethereum === 'undefined') {
        throw new Error('Please install MetaMask to make payments');
      }

      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      const account = accounts[0];

      // Create Web3 instance
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create contract instance
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      // Prepare transaction
      const paymentAmountWei = ethers.utils.parseEther(paymentAmount);
      
      // Create transaction
      const tx = await contract.makePayment({
        value: paymentAmountWei,
        gasLimit: 200000, // Adjust as needed
      });

      // Wait for transaction confirmation
      const receipt = await tx.wait();
      console.log('Transaction receipt:', receipt);
      
      setSuccess(true);
    } catch (err: any) {
      console.error('Payment error:', err);
      setError(err.message || 'Failed to process payment');
    } finally {
      setLoading(false);
    }
  };

  // Add transaction monitoring
  const handleNetworkChange = () => {
    setError('Network changed. Please refresh the page.');
  };

  const handleAccountChange = () => {
    setError('Account changed. Please refresh the page.');
  };

  React.useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', handleNetworkChange);
      window.ethereum.on('accountsChanged', handleAccountChange);

      return () => {
        window.ethereum.removeListener('chainChanged', handleNetworkChange);
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`
          px-8 py-4 rounded-full 
          bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-semibold 
          flex items-center justify-center space-x-2 
          group transition-all duration-200
          hover:scale-105 active:scale-95
          disabled:opacity-70 disabled:cursor-not-allowed
        `}
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Wallet className="w-5 h-5" />
            <span>{success ? 'Payment Successful!' : `Pay ${paymentAmount} ETH`}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {error && (
        <Alert variant="destructive" className="max-w-md">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="max-w-md bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Transaction completed successfully!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default SmartContractButton;