import React, { useState ,useEffect} from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

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

const DailyMixCard = ({ name, orgType, redirectURL, prize }) => {
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
		  <p className="text-tiny uppercase font-bold mt-[20px]">  Course URL: 
		  <a href={redirectURL} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
		  {redirectURL}
		</a>
		  </p>
		  <h4 className="font-bold text-tiny">Type: {orgType}</h4>

		</CardHeader>
	  </Card>
	);
  };

const Organisation = () => {
	const [orgData, setOrgData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  
	useEffect(() => {
	  const fetchOrgData = async () => {
		try {
		  const contract = await window.tronLink.tronWeb.contract(
			ORGABI,
			"TJp2yuzxR2bD1rkHcHkdKWdUDZFDdk7FoD"
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
		<div className="flex justify-center gap-x-12 flex-wrap">
		  {orgData.length > 0 ? (
			orgData.map((org, index) => (
			  <DailyMixCard
				key={index}
				name={org.name}
				orgType={org.orgType}
				redirectURL={org.redirectURL}
				prize={parseInt(org.prize._hex, 16)}
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