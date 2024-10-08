import React, { useState ,useEffect ,useRef} from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
// import { useHistory } from "react-router-dom"; // Import useHistory to navigate

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";


export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Listed organisation for ",
      className:"text-md text-white"
    },

    {
      text: "Learning & Earning .",
      className: "text-black",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30px]  ">
      <TypewriterEffectSmooth words={words} />
 
    </div>
  );
}

const ORGABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "orgAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "orgType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "redirectURL",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "prize",
				"type": "uint256"
			}
		],
		"name": "OrganisationOnboarded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAllOrgs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "orgType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "redirectURL",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "prize",
						"type": "uint256"
					}
				],
				"internalType": "struct UserForm.Organisation[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_types",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_redirectURL",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_prize",
				"type": "uint256"
			}
		],
		"name": "organisationOnboard",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "organisations",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "orgType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "redirectURL",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "prize",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const getYouTubeVideoID = (url) => {
	const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
	const match = url.match(youtubeRegex);
	return match ? match[1] : null;
  };
  
 
const getYouTubeEmbedURL = (url) => {
	const videoID = getYouTubeVideoID(url);
	return videoID ? `https://www.youtube.com/embed/${videoID}?enablejsapi=1` : null;
  };

// 	const [watchProgress, setWatchProgress] = useState(0);
// 	const iframeRef = useRef(null);
  
// 	useEffect(() => {
// 	  const handleTimeUpdate = () => {
// 		if (iframeRef.current) {
// 		  const currentTime = iframeRef.current.currentTime;
// 		  const duration = iframeRef.current.duration;
// 		  const progress = (currentTime / duration) * 100;
// 		  setWatchProgress(progress);
  
// 		  if (progress === 100) {
// 			console.log("Course completed! Mint NFT.");
// 			// Call minting logic here
// 		  }
// 		}
// 	  };
  
// 	  if (iframeRef.current) {
// 		iframeRef.current.addEventListener("timeupdate", handleTimeUpdate);
// 	  }
  
// 	  return () => {
// 		if (iframeRef.current) {
// 		  iframeRef.current.removeEventListener("timeupdate", handleTimeUpdate);
// 		}
// 	  };
// 	}, []);
  
// 	const videoEmbedURL = getYouTubeEmbedURL(redirectURL);
  
// 	return (
// 	  <Card className="py-4 bg-black text-white shadow-md shadow-white">
// 		<CardBody className="overflow-visible py-2">
// 		  <img
// 			alt="Card background"
// 			className="object-cover rounded-xl"
// 			src={`https://picsum.photos/220/180?random=${Math.random()}`}
// 			width={270}
// 		  />
// 		</CardBody>
// 		<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
// 		  <h4 className="font-bold text-medium">Name: {name}</h4>
// 		  <p className="text-tiny uppercase font-bold mt-[20px]">Type: {orgType}</p>
  
// 		  {/* Embedding video using iframe for YouTube */}
// 		  <div className="mt-4">
// 			{videoEmbedURL ? (
// 			  <iframe
// 				ref={iframeRef}
// 				width="100%"
// 				height="200"
// 				src={videoEmbedURL}
// 				frameBorder="0"
// 				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 				allowFullScreen
// 				className="rounded-lg"
// 			  ></iframe>
// 			) : (
// 			  <p className="text-red-500">Invalid YouTube URL</p>
// 			)}
// 		  </div>
  
// 		  {/* Displaying progress */}
// 		  <p className="text-tiny mt-4">Watched: {watchProgress.toFixed(2)}%</p>
  
// 		  {/* Optionally add prize information */}
// 		  <h4 className="font-bold text-tiny">Prize: {prize} TRX</h4>
// 		</CardHeader>
// 	  </Card>
// 	);
//   };



const DailyMixCard = ({ name, orgType, redirectURL, prize }) => {
	const [watchProgress, setWatchProgress] = useState(0);
	const [isMintAllowed, setIsMintAllowed] = useState(false);
	const iframeRef = useRef(null);
	const playerRef = useRef(null);
	let progressInterval;
  
	useEffect(() => {
	  const onPlayerStateChange = (event) => {
		const player = event.target;
		const duration = player.getDuration();
  
		if (event.data === window.YT.PlayerState.PLAYING && duration > 0) {
		  if (progressInterval) clearInterval(progressInterval);
  
		  // Set interval to update the progress every second
		  progressInterval = setInterval(() => {
			const currentTime = player.getCurrentTime();
			const progress = (currentTime / duration) * 100;
			setWatchProgress(progress);
  
			// Show the mint button when video progress is greater than or equal to 97%
			if (progress >= 97) {
			  setIsMintAllowed(true);
			} else {
			  setIsMintAllowed(false);
			}
  
			if (progress >= 100) {
			  clearInterval(progressInterval);
			}
		  }, 1000);
		} else if (
		  event.data === window.YT.PlayerState.PAUSED ||
		  event.data === window.YT.PlayerState.ENDED
		) {
		  clearInterval(progressInterval);
		}
	  };
  
	  const loadYouTubeAPI = () => {
		if (!window.YT) {
		  const tag = document.createElement("script");
		  tag.src = "https://www.youtube.com/iframe_api";
		  const firstScriptTag = document.getElementsByTagName("script")[0];
		  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
		  window.onYouTubeIframeAPIReady = () => {
			playerRef.current = new window.YT.Player(iframeRef.current, {
			  events: {
				onStateChange: onPlayerStateChange,
			  },
			});
		  };
		} else {
		  playerRef.current = new window.YT.Player(iframeRef.current, {
			events: {
			  onStateChange: onPlayerStateChange,
			},
		  });
		}
	  };
  
	  loadYouTubeAPI();
  
	  return () => {
		clearInterval(progressInterval); // Clear interval on unmount
	  };
	}, []);
  
	const videoEmbedURL = getYouTubeEmbedURL(redirectURL);
  
	return (
	  <Card className="py-4 bg-black text-white shadow-md shadow-white">
		<CardBody className="overflow-visible py-2">
		  <img
			alt="Card background"
			className="object-cover rounded-xl"
			src={`https://picsum.photos/220/180?random=${Math.random()}`}
			width={270}
		  />
		</CardBody>
		<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
		  <h4 className="font-bold text-medium">Name: {name}</h4>
		  <p className="text-tiny uppercase font-bold mt-[20px]">Type: {orgType}</p>
  
		  <div className="mt-4">
			{videoEmbedURL ? (
			  <iframe
				ref={iframeRef}
				width="100%"
				height="200"
				src={videoEmbedURL}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="rounded-lg"
			  ></iframe>
			) : (
			  <p className="text-red-500">Invalid YouTube URL</p>
			)}
		  </div>
  
		  {/* Progress Bar */}
		  <div className="w-full bg-gray-300 rounded-full h-2.5 mt-4">
			<div
			  className="bg-blue-600 h-2.5 rounded-full"
			  style={{ width: `${watchProgress}%` }}
			></div>
		  </div>
  
		  {/* Show percentage */}
		  <p className="text-tiny mt-2">Watched: {watchProgress.toFixed(2)}%</p>
  
		  {/* Show Mint button if video progress is greater than 97% */}
		  {isMintAllowed && (
			<button
			  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
			  onClick={() => console.log("Minting NFT")}
			>
			  Mint
			</button>
		  )}
		</CardHeader>
	  </Card>
	);
  };

// const DailyMixCard = ({ name, orgType, redirectURL }) => {
// 	const [watchProgress, setWatchProgress] = useState(0);
// 	const [isMintAllowed, setIsMintAllowed] = useState(false);
// 	const iframeRef = useRef(null);
// 	const playerRef = useRef(null);
// 	const history = useHistory(); // Create history object to navigate
  
// 	// Utility to extract video ID from the URL
// 	const getYouTubeVideoID = (url) => {
// 	  const youtubeRegex =
// 		/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
// 	  const match = url.match(youtubeRegex);
// 	  return match ? match[1] : null;
// 	};
  
// 	const getYouTubeEmbedURL = (url) => {
// 	  const videoID = getYouTubeVideoID(url);
// 	  return videoID ? `https://www.youtube.com/embed/${videoID}` : null;
// 	};
  
// 	useEffect(() => {
// 	  const loadYouTubeAPI = () => {
// 		if (!window.YT) {
// 		  const tag = document.createElement("script");
// 		  tag.src = "https://www.youtube.com/iframe_api";
// 		  const firstScriptTag = document.getElementsByTagName("script")[0];
// 		  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
// 		  window.onYouTubeIframeAPIReady = () => {
// 			playerRef.current = new window.YT.Player(iframeRef.current, {
// 			  events: {
// 				onReady: onPlayerReady,
// 				onStateChange: onPlayerStateChange,
// 			  },
// 			});
// 		  };
// 		} else {
// 		  playerRef.current = new window.YT.Player(iframeRef.current, {
// 			events: {
// 			  onReady: onPlayerReady,
// 			  onStateChange: onPlayerStateChange,
// 			},
// 		  });
// 		}
// 	  };
  
// 	  const onPlayerReady = (event) => {
// 		console.log("Player is ready");
// 	  };
  
// 	  const onPlayerStateChange = (event) => {
// 		if (event.data === window.YT.PlayerState.PLAYING) {
// 		  const duration = playerRef.current.getDuration();
// 		  const interval = setInterval(() => {
// 			const currentTime = playerRef.current.getCurrentTime();
// 			const progress = (currentTime / duration) * 100;
// 			setWatchProgress(progress);
  
// 			if (progress >= 97) {
// 			  setIsMintAllowed(true);
// 			} else {
// 			  setIsMintAllowed(false);
// 			}
  
// 			if (progress >= 100) {
// 			  clearInterval(interval);
// 			}
// 		  }, 1000);
// 		}
// 	  };
  
// 	  loadYouTubeAPI();
  
// 	  return () => {
// 		if (playerRef.current) {
// 		  playerRef.current.destroy();
// 		}
// 	  };
// 	}, []);
  
// 	const videoEmbedURL = getYouTubeEmbedURL(redirectURL);
  
// 	const handleMint = () => {
// 	  // Store the course name in localStorage
// 	  localStorage.setItem("mintedCourse", name);
// 	  // Navigate to certificate page
// 	  history.push("/certificate");
// 	};
  
// 	return (
// 	  <Card className="py-4 bg-black text-white shadow-md shadow-white">
// 		<CardBody className="overflow-visible py-2">
// 		  <img
// 			alt="Card background"
// 			className="object-cover rounded-xl"
// 			src={`https://picsum.photos/220/180?random=${Math.random()}`}
// 			width={270}
// 		  />
// 		</CardBody>
// 		<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
// 		  <h4 className="font-bold text-medium">Name: {name}</h4>
// 		  <p className="text-tiny uppercase font-bold mt-[20px]">Type: {orgType}</p>
  
// 		  <div className="mt-4">
// 			{videoEmbedURL ? (
// 			  <iframe
// 				ref={iframeRef}
// 				width="100%"
// 				height="200"
// 				src={videoEmbedURL}
// 				frameBorder="0"
// 				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 				allowFullScreen
// 				className="rounded-lg"
// 			  ></iframe>
// 			) : (
// 			  <p className="text-red-500">Invalid YouTube URL</p>
// 			)}
// 		  </div>
  
// 		  <div className="w-full bg-gray-300 rounded-full h-2.5 mt-4">
// 			<div
// 			  className="bg-blue-600 h-2.5 rounded-full"
// 			  style={{ width: `${watchProgress}%` }}
// 			></div>
// 		  </div>
  
// 		  <p className="text-tiny mt-2">Watched: {watchProgress.toFixed(2)}%</p>
  
// 		  {isMintAllowed && (
// 			<button
// 			  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
// 			  onClick={handleMint}
// 			>
// 			  Mint
// 			</button>
// 		  )}
// 		</CardHeader>
// 	  </Card>
// 	);
//   };
  

  
  
  

  const Organisation = () => {
	const [orgData, setOrgData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  
	useEffect(() => {
	  const fetchOrgData = async () => {
		try {
		  const contract = await window.tronLink.tronWeb.contract(
			ORGABI,
			"TMR1UEDaLzvT87nmsyqErcq6CCjEdvScja"
		  );
  
		  const organisationData = await contract.getAllOrgs().call();
		  console.log(organisationData);
  
		  setOrgData(organisationData);
		  setIsLoading(false);
		} catch (error) {
		  console.error("Error fetching organizations:", error);
		  setIsLoading(false);
		}
	  };
  
	  fetchOrgData();
	}, []);
  
	if (isLoading) {
	  return <div className="text-white">Loading organizations...</div>;
	}
  
	return (
	  <div className="min-h-screen bg-red-600 py-10 px-6">
		<h1 className="text-black text-xl font-bold text-center mb-8">
		  <TypewriterEffectSmoothDemo />
		</h1>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
		  {orgData.length > 0 ? (
			orgData.map((org, index) => (
			  <DailyMixCard
				key={index}
				name={org.name}
				orgType={org.orgType}
				redirectURL={org.redirectURL}

			  />
			))
		  ) : (
			<p className="text-white">No organizations available at the moment.</p>
		  )}
		</div>
	  </div>
	);
  };
  export default Organisation;



// prize={parseInt(org.prize._hex, 16)}

//		  <h4 className="font-bold text-tiny">Prize: {prize} TRX</h4>

  
//   const DailyMixCard = ({ name, orgType, redirectURL, prize }) => {