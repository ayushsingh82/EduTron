
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
        text: "courses",
        className: "text-back",
      },
      {
        text: "and",
        className:"text-white"
      },
     
      {
        text: "certificates.",
        className: "text-back",
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
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-medium text-white">Name :</h4>
      <button className="text-tiny uppercase font-bold mt-[20px] border border-2 rounded-md px-[4px] py-[1px]
      bg-red-600 text-white">mint</button>
     
      
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
      <DailyMixCard />
      <DailyMixCard />
    </div>
  </div>
  );
}

export default Certificate;