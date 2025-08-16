"use client"

import React from 'react'
import ComponentC from './ComponentC';

interface ChildProps {
  test: string;
}

export default function ComponentB({ test }: { test: string }) {
  console.log("Component B rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <div className='border border-blue-500 p-4 m-2'>
      <h3>ComponentB (Client)</h3>
      <p>Received test: {test}</p>
      <ComponentC test={test}/>
    </div>
  )
}