import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const DailyMixCard = () => {
  return (
    <Card className="py-4 bg-black text-white shadow-md shadow-white">
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Music art </h4>
      <p className="text-tiny uppercase font-bold">Our  organisation helps you to learn different types of music</p>
      <small className="text-default-500 font-medium mt-[30px]">12 Tracks</small>
      <h4 className="font-bold text-large">Category:Music</h4>
      
    </CardHeader>
    </Card>
  );
};

const Organisation = () => {
  return (
    <div className="min-h-screen bg-red-700 py-10 px-6">
      <h1 className="text-white text-xl font-bold text-center mb-8">
        Listed Organisations
      </h1>
      <div className="flex justify-center gap-x-12">
        <DailyMixCard />
        <DailyMixCard />
        <DailyMixCard />
      </div>
    </div>
  );
}

export default Organisation;