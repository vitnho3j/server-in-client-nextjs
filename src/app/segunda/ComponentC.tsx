"use client"

import React from 'react'

interface ChildProps {
  test?: string;
  constFromB?: string;
}

export default function ComponentC({ children, test, constFromB }: { children: React.ReactElement<ChildProps>, test?: string, constFromB?: string }) {
  console.log("Component C rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <div className='border border-green-500 p-4 m-2'>
      <h4>ComponentC (Client)</h4>
      <p>Received test: {test}</p>
      <p>Received constFromB: {constFromB}</p>
      {React.cloneElement(children, { test })}
    </div>
  )
}