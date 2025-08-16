"use client"

import React, { Component } from 'react'
import { useD } from '@/context/pageTestContext';

interface ChildProps {
  test?: string;
}

export default function ComponentC({ test }: {test: string }) {
  console.log("Component C rodou no:", typeof window === "undefined" ? "Server" : "Client");
  const componentD = useD();
  return (
    <div className='p-4 mt-10'>
    <p className="text-sm">This is the component C <span className="font-bold">(CLIENT - SIDE)</span></p> 
      <div className='border border-green-500 p-4 m-2'>
        <p>Received test from component B: <span className='font-bold'>{test}</span></p>
        {componentD}
      </div>
    </div>
  )
}