import React, { useState, useEffect } from 'react';

const gradientStyle = {
  background: "white",
  height: "2px",
  width: "100%",
  border: "none",
};

import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

const Navbar = () => {
  const { connect, disconnect, select, connected } = useWallet();
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to initialize wallet connection and fetch the wallet address
  const initSignin = async () => {
    setLoading(true);
    try {
      if (window.tronLink === undefined) {
        console.log("TronLink not found");
        return;
      }

      // Request connection if not connected
      if (!window.tronLink.ready) {
        await window.tronLink.request({ method: "tron_requestAccounts" });
      }

      // Fetch the wallet address after connection
      const address = window.tronLink.tronWeb.defaultAddress.base58;
      console.log("Wallet Address:", address);
      setWalletAddress(address);

      // Optionally use connect() if managing wallet connection via tronwallet-adapter
      await connect();
    } catch (error) {
      console.error("Error while signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check if TronLink is connected and update the wallet address
  useEffect(() => {
    if (window.tronLink && window.tronLink.ready) {
      const address = window.tronLink.tronWeb.defaultAddress.base58;
      setWalletAddress(address);
    }
  }, [connected]);

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex flex-row mx-auto px-[40px] py-[20px] justify-between items-center bg-black">
        <div className="flex flex-row items-center font-bold text-2xl text-red-500">
          <a href="/">EDU-Tron</a>
        </div>

        <div className="flex-1 flex justify-center items-center space-x-8">
          <h1 className="font-medium text-xxl text-white">
            <a href="/organisations">Organisations</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/courses">Courses</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/certificate">Certificates</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/landing">Join Us</a>
          </h1>
        </div>

        <div className="text-white border border-2 border-red-500 font-medium px-[10px] py-[5px] bg-gradient-to-r from-red-700 via-red-500 to-red-800">
        {walletAddress ? (
          <p>Connected: {`${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`}</p>
        ) : (
          <button onClick={initSignin} disabled={loading}>
            {loading ? "Connecting..." : "Connect Wallet"}
          </button>
        )}
      </div>
      
      </div>
      <div style={gradientStyle} />
    </nav>
  );
};

export default Navbar;
