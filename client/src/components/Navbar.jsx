import React from 'react'

const gradientStyle = {
  background: "white",
  height: "2px",
  width: "100%",
  border: "none",
};


import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';


const initSignin = async () => {
  // setLoading(true);
  try {
    // const signature: String = await signMessage(address+":loggin_in_to_session");
    if (window.tronLink === undefined) {
      console.log("TronLink not found");
      return;
    }
    if (!window.tronLink.ready) {
      window.tronLink.request({ method: "tron_requestAccounts" });
      return;
    }
    // const message =
    //   window.tronLink.tronWeb.defaultAddress?.base58 +
    //   ":logging_in_to_session";
    // const signature = await window.tronLink.tronWeb.trx.signMessageV2(
    //   message
    // );
    // console.log("signature:", signature);
    // const res = await signIn("tronAuth", {
    //   message,
    //   signature,
    //   redirect: false
    // });
    // console.log("signInres:", res);

    // if (res?.ok) {
    //   // router.push("/app");
    // } else {
    //   console.error("Sign in failed");
    // }
  } catch (error) {
    console.error("Error while signing in:", error);
  } finally {
    setLoading(false);
  }
};


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
    
   <button onClick={initSignin}>Connect</button>
  
        </div>
      </div>
      <div style={gradientStyle} />
    </nav>
  )
}

export default Navbar


// import React, { useState, useEffect } from 'react';

// const gradientStyle = {
//   background: "white",
//   height: "2px",
//   width: "100%",
//   border: "none",
// };

// import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

// const Navbar = () => {
//   const { connect, disconnect, select, connected } = useWallet();
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Function to initialize wallet connection and fetch address
//   const initSignin = async () => {
//     setLoading(true);
//     try {
//       if (window.tronLink === undefined) {
//         console.log("TronLink not found");
//         return;
//       }
      
//       // Request connection if not connected
//       if (!window.tronLink.ready) {
//         await window.tronLink.request({ method: "tron_requestAccounts" });
//       }

//       // Fetch the address from TronLink after connection
//       const address = window.tronLink.tronWeb.defaultAddress.base58;
//       console.log("Wallet Address:", address);
//       setWalletAddress(address);

//       // Optionally use connect() from the tronwallet-adapter if managing via hook
//       await connect();
      
//     } catch (error) {
//       console.error("Error while signing in:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Use effect to check connection status and set wallet address on page load
//   useEffect(() => {
//     const checkWallet = async () => {
//       if (window.tronLink && window.tronLink.ready) {
//         const address = window.tronLink.tronWeb.defaultAddress.base58;
//         setWalletAddress(address);
//       }
//     };

//     checkWallet(); // Check wallet status on component mount
//   }, [connected]);

//   return (
//     <nav className="sticky top-0 z-50">
//       <div className="flex flex-row mx-auto px-[40px] py-[20px] justify-between items-center bg-black">
//         <div className="flex flex-row items-center font-bold text-2xl text-white">
//           <a href="/">EDU-Tron</a>
//         </div>

//         <div className="flex-1 flex justify-center items-center space-x-8">
//           <h1 className="font-medium text-xxl text-white">
//             <a href="/organisations">Organisations</a>
//           </h1>
//           <h1 className="font-medium text-xxl text-white">
//             <a href="">Courses</a>
//           </h1>
//           <h1 className="font-medium text-xxl text-white">
//             <a href="/certificate">Certificates</a>
//           </h1>
//           <h1 className="font-medium text-xxl text-white">
//             <a href="/landing">Join Us</a>
//           </h1>
//         </div>

//         <div className="text-white">
//           {connected && walletAddress ? (
//             <p>Connected: {walletAddress}</p>
//           ) : (
//             <button onClick={initSignin} disabled={loading}>
//               {loading ? "Connecting..." : "Connect Wallet"}
//             </button>
//           )}
//         </div>
//       </div>
//       <div style={gradientStyle} />
//     </nav>
//   );
// };

// export default Navbar;
