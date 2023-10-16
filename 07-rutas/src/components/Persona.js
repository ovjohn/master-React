import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {
    const {nombre, apellido} = useParams();
  return (
    <>
        <h1>Pagina de Personas</h1>
        <p>Hola tu nombre es: {nombre} {apellido}</p>
    </>
  )
}