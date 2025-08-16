"use client"

import React from 'react'

interface ChildProps {
  test: string;
  constFromB?: string;
}

export default function ComponentB({ children, test }: { children: React.ReactElement<ChildProps>, test?: string }) {
  const [constFromB, setConstFromB] = React.useState("constFromB");
  console.log("Component B rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
    <p className="text-sm">This is the component B <span className="font-bold">(CLIENT - SIDE)</span></p>  
    <div className='border border-blue-500 p-4 m-2'>
      <p>Received test from component A: <span className='font-bold'>{test}</span></p>
      <div className='mt-10'>
      {React.cloneElement(children, { test, constFromB })}
      </div>
    </div>
    </>
  )
}