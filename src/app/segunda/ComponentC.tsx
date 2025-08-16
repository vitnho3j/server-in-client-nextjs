"use client"

import React from 'react'

interface ChildProps {
  test?: string;
  constFromB?: string;
}

export default function ComponentC({ children, test, constFromB }: { children: React.ReactElement<ChildProps>, test?: string, constFromB?: string }) {
  console.log("Component C rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
    <p className="text-sm">This is the component C <span className="font-bold">(CLIENT - SIDE)</span></p>  
    <div className='border border-green-500 p-4 m-2'>
      <p>Received test from component B: <span className='font-bold'>{test}</span></p>
      <p>Received constFromB specifically of component b to simulate specificities: {constFromB}</p>
      {React.cloneElement(children, { test })}
    </div>
    </>
  )
}