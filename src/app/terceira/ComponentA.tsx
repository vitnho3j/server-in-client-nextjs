"use client"

import React, { useState } from 'react'
import ComponentB from './ComponentB';

// Define the props that your child component(s) can accept
interface ChildProps {
  test?: string; // or whatever type your 'dados' is
  // other props your child component might accept
}

// export default function ComponentA({children}: {children: React.ReactElement<ChildProps>}) {
//     const [test, setTest] = React.useState("TEST STRING");
//     const [dados, setDados] = React.useState(""); 

//      console.log("Component A rodou no:", typeof window === "undefined" ? "Server" : "Client");
    
//     return (
//         <div className='border border-white'>
//             {/* ComponentA - Client Component
//             <ComponentB test={test}/> */}
//             {React.cloneElement(children, { test: test })}
//         </div>
//     )
// }

export default function ComponentA() {
    const [test, setTest] = React.useState("TEST STRING");
    const [dados, setDados] = React.useState(""); 

     console.log("Component A rodou no:", typeof window === "undefined" ? "Server" : "Client");
    
    return (
        <div className='border border-white'>
            ComponentA - Client Component
            <ComponentB test={test}/>
        </div>
    )
}

