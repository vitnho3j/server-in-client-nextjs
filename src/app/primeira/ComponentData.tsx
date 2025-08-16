// Client Component A
import React from 'react'

function ComponentData({request, test2}: {request: {nome: string, idade: number}, test2: string}) {
    console.log("ComponentData rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <div className="">
        <p>Nome: {request.nome}</p>
        <p>Idade: {request.idade}</p>
        <p>Variável test 2: {test2}</p>
    </div>
  )
}

export default ComponentData