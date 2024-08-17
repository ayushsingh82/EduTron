import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapters';


import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import toast, { Toaster } from 'react-hot-toast';

function ConnectComponent() {
  const { connect, disconnect, select, connected } = useWallet();
  return (<div>
    <button type="button" onClick={() => select('TronLink Adapter' )}> Select TronLink</button>
    <button type="button" disabled={connected} onClick={connect}>Connect</button>
    <button type="button" disabled={!connected} onClick={disconnect}>Disconnect</button>
  </div>);
}
function Profile() {
  const { address, connected, wallet } = useWallet();
  return (<div>
      <p> <span>Connection Status:</span> {connected ? 'Connected' : 'Disconnected'}</p>
      <p> <span>Your selected Wallet:</span> {wallet?.adapter.name} </p>
      <p> <span>Your Address:</span> {address} </p>
  </div>);
}



function App() {

  const adapters = useMemo(() => [new TronLinkAdapter()]);
    const onAccountsChanged = useCallback((curAddr, preAddr) => {
        console.log('new address is: ', curAddr, ' previous address is: ', preAddr);
    }, []);
  
  function onError(e) {
    if (e instanceof WalletNotFoundError) {
        toast.error(e.message);
    } else if (e instanceof WalletDisconnectedError) {
        toast.error(e.message);
    } else toast.error(e.message);
}
  return (
    <>
      
    <WalletProvider adapters={adapters} onAccountsChanged={onAccountsChanged}>
    <ConnectComponent></ConnectComponent>
    <Profile></Profile>
    <main/>
</WalletProvider>
    </>
  )
}

export default App
