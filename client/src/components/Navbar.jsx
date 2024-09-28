import React from 'react'

const gradientStyle = {
  background: "white",
  height: "2px",
  width: "100%",
  border: "none",
};

// import ConnectButton from './ConnectButton';
// import {  WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletConnectAdapter } from '@tronweb3/tronwallet-adapters';



const Navbar = () => {

  const { connect, disconnect, select, connected } = useWallet();
  
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex flex-row mx-auto px-[40px] py-[20px] justify-between items-center bg-black">
        <div className="flex flex-row items-center font-bold text-2xl text-white">
          <a href="/">EDU-Tron</a>
        </div>

        <div className="flex-1 flex justify-center items-center space-x-8">
          <h1 className="font-medium text-xxl text-white">
            <a href="/organisations">Organisations</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="">Courses</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/certificate">Certificates</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/landing">Join Us</a>
          </h1>
        </div>

        <div className="text-white">
    
        <button type="button" onClick={() => select('TronLink Adapter')}>
            Select TronLink
        </button>
        <button type="button" disabled={connected} onClick={connect}>
            Connect
        </button>
        <button type="button" disabled={!connected} onClick={disconnect}>
            Disconnect
        </button>
  
        </div>
      </div>
      <div style={gradientStyle} />
    </nav>
  )
}

export default Navbar