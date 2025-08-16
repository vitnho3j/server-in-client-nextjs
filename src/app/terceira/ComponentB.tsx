"use client"

import React from 'react'
import ComponentC from './ComponentC';

interface ChildProps {
  test: string;
}

export default function ComponentB({ test }: { test: string }) {
  console.log("Component B rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <div className='p-4'>
    <p className="text-sm">This is the component B <span className="font-bold">(CLIENT - SIDE)</span></p> 
      <div className='border border-blue-500 p-4 m-2'>
        <p>Received test from component A: <span className='font-bold'>{test}</span></p>
        <ComponentC test={test}/>
      </div>
    </div>
  )
}