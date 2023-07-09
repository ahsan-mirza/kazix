"use client";

import React from "react";
import { isMobile } from "react-device-detect";
import { MainCard } from "./mainCard";
import Header from "./Header";
import { Card } from "./card";
import Background from "@/public/assets/img/bg/bg-stadium.png";


export const Main = () => {
  if (!isMobile) {
    return (
      <>
        <div className="w-100 px-10 pt-10 flex space-x-4 justify-center">
          {[1, 2].map((item, index) => {
            return <MainCard key={index} bg={Background} />;
          })}
        </div>

        <div className="w-100 px-10 pt-10  justify-center">
          <Header />
          <div className="w-100 grid grid-cols-3 mt-10 gap-x-3 gap-y-6 justify-center">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return <Card key={index} />;
            })}
          </div>
        </div>
        <div className="w-100 px-10 pt-10  justify-center">
          <Header />
          <div className="w-100 grid grid-cols-3 mt-10 gap-x-3 gap-y-6 justify-center">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return <Card key={index} />;
            })}
          </div>
        </div>
        <div className="w-100 px-10 pt-10  justify-center">
          <Header />
          <div className="w-100 grid grid-cols-3 mt-10 gap-x-3 gap-y-6 justify-center">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return <Card key={index} />;
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container">
        <div className="row py-5 px-2">
          <div className="col py-2 gap-2 flex flex-col">
            {[1, 2].map((item, index) => {
              return <MainCard key={index} bg={Background} />;
            })}
          </div>
        </div>
        <div className="row py-5 px-2">
        <Header />
          <div className="col py-2 gap-2 flex flex-col">
            {[1, 2].map((item, index) => {
              return <Card key={index} bg={Background} />;
            })}{[1, 2, 3, 4, 5, 6].map((item, index) => {
              return <Card key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};
