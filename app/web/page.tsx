import React from "react";

import { MainCard } from "@/components/mainCard";
import { Card } from "@/components/card";
import { Header } from "@/components/Header";

const Page = () => {
  return (
    <>
      <div className="w-100 p-10 flex space-x-4 justify-center">
        <MainCard />
        <MainCard />
      </div>

      <div className="w-100 px-10  justify-center">
        <Header />
        <div className="w-100 grid grid-cols-3 mt-10 gap-x-3 gap-y-6 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Page;
