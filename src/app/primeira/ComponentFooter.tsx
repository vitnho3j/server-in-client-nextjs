import React from 'react'

function ComponentB() {
    console.log("ComponentFooter rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <p className="text-sm">This is the Footer component <span className="font-bold">(SERVER - SIDE)</span></p>
      <div className='border border-green-500 p-4 m-2'>
        <p>An example of a footer.</p>
      </div>
    </>
  )
}

export default ComponentB