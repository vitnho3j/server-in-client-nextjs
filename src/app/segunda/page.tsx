// A segunda abordagem para utilizar um server component dentro de um client component sem importá-lo diretamente no client component
// Esta abordagem utiliza o conceito de "wrapping" onde o server component é passado como children para o client component, cada client component clona o children.

import React from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

export default function page() {
    console.log("Component Root rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <div className="mt-10 border border-red-500">
        <ComponentA>
            <ComponentB>
                <ComponentC>
                    <ComponentD />
                </ComponentC>
            </ComponentB>
        </ComponentA> 
    </div>
  )
}
