// ComponentWrapper.tsx
"use client";
import React, { useEffect, useState } from "react";
import ComponentData from "./ComponentData";

interface RequestType {
  nome: string;
  idade: number;
}

interface ComponentWrapperProps {
  FooterComponent: React.ReactNode;
  RandomDiv: React.ReactNode;
}

export default function ComponentWrapper({ FooterComponent, RandomDiv }: ComponentWrapperProps) {
  const [request, setRequest] = useState<RequestType>({ nome: "João", idade: 30 });
  const [test2, setTest2] = useState("Padrão");
  const [test3, setTest3] = useState("Padrão Test 3");

  console.log("Component Wrapper rodou no:", typeof window === "undefined" ? "Server" : "Client");

  return (
    <>
      <p className="text-sm">This is the Wrapper component <span className="font-bold">(CLIENT - SIDE)</span></p>  
      <div className="border border-white p-4 m-2">
        <ComponentData request={request} test2={test2} />
        <div>
          <p className="text-sm">This is a paragraph inside of the Wrapper component to simulate a complex hierarchy. <span className="font-bold">(CLIENT - SIDE)</span></p>
          <div className="border border-pink-500 p-4 m-2">
            <p>{test3}</p>
          </div>
          {RandomDiv}
        </div>
        {FooterComponent}
      </div>
    </>
  );
}
