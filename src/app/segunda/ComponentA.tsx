"use client"

import React from 'react'
interface ChildProps {
  test?: string;
}

export default function ComponentA({children}: {children: React.ReactElement<ChildProps>}) {
    const [test, setTest] = React.useState("TEST STRING");

     console.log("Component A rodou no:", typeof window === "undefined" ? "Server" : "Client");
    
    return (
        <div className='border border-white'>
            {React.cloneElement(children, { test: test })}
        </div>
    )
}