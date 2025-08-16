import React from 'react'

function ComponentRandom() {
    console.log("Component Random rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <div className="bg-red-300">
        <p>A random div</p>
    </div>
  )
}

export default ComponentRandom