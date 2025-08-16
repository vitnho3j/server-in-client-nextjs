// A primeira abordagem para utilizar um server component dentro de um client component sem importá-lo diretamente no client component

// Esta abordagem utiliza o conceito de "wrapping" onde o server component é passado como uma prop para o client component, permitindo que o client component utilize o server component sem precisar importá-lo diretamente.

import React from 'react'
import ComponentWrapper from './ComponentWrapper'
import ComponentFooter from './ComponentFooter'
import ComponentRandom from './ComponentRandom'

export default function page() {
  console.log("Component Root rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <ComponentWrapper FooterComponent={<ComponentFooter/>} RandomDiv={<ComponentRandom/>}/> 
  )
}
