import React from "react";
import { MainCard } from "@/components/mainCard";
import { Card } from "@/components/card";
import { Header } from "@/components/Header";
import Background from "../../public/assets/img/bg/bg-stadium.png";

const Page = () => {
  return (
    <>
      <div className="w-100 px-10 pt-10 flex space-x-4 justify-center">
      {[1,2].map((item, index) => {
            return <MainCard key={index} bg={Background}/>;
          })}
      </div>

      <div className="w-100 px-10 pt-10  justify-center">
        <Header />
        <div className="w-100 grid grid-cols-3 mt-10 gap-x-3 gap-y-6 justify-center">
          {[1,2,3,4,5,6].map((item, index) => {
            return <Card key={index} />;
          })}
        </div>
      </div>
      <div className="w-100 px-10 pt-10  justify-center">
        <Header />
        <div className="w-100 grid grid-cols-3 mt-10 gap-x-3 gap-y-6 justify-center">
          {[1,2,3,4,5,6].map((item, index) => {
            return <Card key={index} />;
          })}
        </div>
      </div>
      <div className="w-100 px-10 pt-10  justify-center">
        <Header />
        <div className="w-100 grid grid-cols-3 mt-10 gap-x-3 gap-y-6 justify-center">
          {[1,2,3,4,5,6].map((item, index) => {
            return <Card key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
