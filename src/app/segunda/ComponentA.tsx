"use client"

import React from 'react'
interface ChildProps {
  test?: string;
}

export default function ComponentA({children}: {children: React.ReactElement<ChildProps>}) {
    const [test, setTest] = React.useState("TEST STRING");

     console.log("Component A rodou no:", typeof window === "undefined" ? "Server" : "Client");
    
    return (
        <div className='p-4'>
            <p className="text-sm">This is the component A <span className="font-bold">(CLIENT - SIDE)</span></p>  
            <div className='border border-white p-4 m-2'>
                {React.cloneElement(children, { test: test })}
            </div>
        </div>
    )
}