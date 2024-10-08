
import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
    const words = [
      {
        text: "Your",
        className:"text-md text-white"
      },
      {
        text: "certificates",
        className: "text-white",
      },
      {
        text: "reflects big ",
        className:"text-white"
      },
     
      {
        text: "accomplishments.",
        className: "text-white",
      },
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[30px]  ">
        <TypewriterEffectSmooth words={words} />
   
      </div>
    );
  }


const DailyMixCard = () => {
  return (
    <Card className="py-4 bg-black shadow shadow-md shadow-white">
      <CardBody className="overflow-visible py-2">
      <img
			alt="Card background"
			className="object-cover rounded-xl"
			src={`https://picsum.photos/220/180?random=${Math.random()}`}
			width={270}
		  />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-medium text-medium text-white">Course Name : Central Dao</h4>
      <h4 className="font-medium text-medium text-white mt-[10px]">Issued to : {window.tronLink.tronWeb.defaultAddress.base58} </h4>       
      
    </CardHeader>
    </Card>
  );
};

const Certificate = () => {
  return (
    <div className="min-h-screen bg-red-600 py-10 px-6">
    <h1 className="text-black text-xl font-bold text-center mb-8">
    <TypewriterEffectSmoothDemo/>
    </h1>
    <div className="flex justify-center gap-x-12">
      <DailyMixCard />
     
    </div>
  </div>
  );
}

export default Certificate;