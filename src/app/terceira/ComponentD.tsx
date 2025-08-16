import React from 'react'

interface Props {
  test?: string; // Opcional pois é o último componente
}

export default function ComponentD({ test }: Props) {
  console.log("Component D rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
     <div className='p-4 mt-10'>
    <p className="text-sm">This is the component D <span className="font-bold">(SERVER - SIDE)</span></p> 
    <div className='border border-yellow-500 p-4 m-2'>
      {test && <p>Received test from Root Component: <span className='font-bold'>{test}</span></p>}
      <p>This is a server component</p>
    </div>
    </div>
  )
}