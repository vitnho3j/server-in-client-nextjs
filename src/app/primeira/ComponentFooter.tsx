import React from 'react'

function ComponentB() {
    console.log("ComponentFooter rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
      <div>
        <p>Edit src/app/page.tsx and save to reload.</p>
      </div>
  )
}

export default ComponentB