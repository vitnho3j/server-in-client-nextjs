"use client"

import React, { useState } from 'react'
import ComponentB from './ComponentB';

export default function ComponentA() {
    const [test, setTest] = React.useState("TEST STRING");
    console.log("Component A rodou no:", typeof window === "undefined" ? "Server" : "Client");
    
    return (
        <div className='p-4'>
        <p className="text-sm">This is the component A <span className="font-bold">(CLIENT - SIDE)</span></p> 
            <div className='border border-white'>
                <ComponentB test={test}/>
            </div>
        </div>
    )
}

