import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";
import { Toaster } from "sonner";

const ConnectButton = () => {
  // const { tronWebState, update } = useTheContext();

  const {
    wallet,
    address,
    connected,
    select,
    connect,
    disconnect,
    signMessage,
    signTransaction,
  } = useWallet();

  return (
    <>
      <WalletActionButton />
      {/* <button onClick={connect}>
        {!tronWebState.installed ? (
          <span className="rounded bg-[#be123ce6] p-2 text-white">
            Install TronLink
          </span>
        ) : tronWebState.loggedIn ? (
          <span className="rounded bg-[#262626]/50 p-2 text-[0.9rem] text-white">
            {address.slice(0, 5) + "......" + address.slice(address.length - 4)}
          </span>
        ) : (
          <span className="rounded bg-primary p-2 px-4 text-white">
            Connect
          </span>
        )}
      </button> */}
      <Toaster richColors />
    </>
  );
};

export default ConnectButton;