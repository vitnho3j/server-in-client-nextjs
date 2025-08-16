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
    <div className='border border-blue-500 p-4 m-2'>
      <h3>ComponentB (Client)</h3>
      <p>Received test: {test}</p>
      {React.cloneElement(children, { test, constFromB })}
    </div>
  )
}