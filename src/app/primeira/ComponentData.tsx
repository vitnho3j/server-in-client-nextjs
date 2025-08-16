// Client Component A
import React from 'react'

function ComponentData({request, test2}: {request: {nome: string, idade: number}, test2: string}) {
    console.log("ComponentData rodou no:", typeof window === "undefined" ? "Server" : "Client");
  return (
    <>
      <p className="text-sm">This is the Data component <span className="font-bold">(CLIENT - SIDE)</span></p>
      <div className="border border-yellow-500 p-4 m-2">
          <p>Nome: <span className='font-bold'>{request.nome}</span></p>
          <p>Idade:  <span className='font-bold'>{request.idade}</span></p>
          <p>Variável test 2:  <span className='font-bold'>{test2}</span></p>
      </div>
    </>
  )
}

export default ComponentData