import React from 'react'

function ComponentRandom() {
    console.log("Component Random rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <p className="text-sm">This is the Random component <span className="font-bold">(SERVER - SIDE)</span></p>
      <div className="border border-blue-500 p-4 m-2">
          <p>A random div</p>
      </div>
    </>
  )
}

export default ComponentRandom