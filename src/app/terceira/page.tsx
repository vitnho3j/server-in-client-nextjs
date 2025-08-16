// A terceira abordagem para utilizar um server component dentro de um client component sem importá-lo diretamente no client component
// Esta abordagem utiliza um contexto para passar o server component como uma prop, permitindo que o client component utilize o server component sem precisar importá-lo diretamente.

import { DProvider } from '@/context/pageTestContext'
import React from 'react'
import ComponentD from './ComponentD'
import ComponentA from './ComponentA'

export default function page() {
  console.log("Component Root rodou no:", typeof window === "undefined" ? "Server" : "Client");
  let testFromServer = "test from server";
  return (
    <div className='mt-10'>
      <p className="text-sm">This is the Root component - It use context to be able to use a Server Component inside of a Client Component in a complex hierarchy <span className="font-bold">(SERVER - SIDE)</span></p>
      <div className='border border-red-500'>
        <DProvider componentE={<ComponentD test={testFromServer}/>}>
            <ComponentA/>
        </DProvider>
      </div>
    </div>
)
}
