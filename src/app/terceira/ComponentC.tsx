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
    <div className='border border-green-500 p-4 m-2'>
      <h4>ComponentC (Client)</h4>
      <p>Received test: {test}</p>
      {componentD}
    </div>
  )
}