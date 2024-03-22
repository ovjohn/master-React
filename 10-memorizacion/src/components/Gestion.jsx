import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [gestor, setGestor] = useState("");
    const gestorinput = useRef();
   
    console.log('La vista se ha renderizado');   

    const asignarGestor = e => {
        setGestor(gestorinput.current.value);
    }
    
  return (
    <div>
        <h1>Nombre del Gestor: {gestor}</h1>
        <h2>Listado de Empleados</h2>
        <input type='text' ref={gestorinput} onChange={asignarGestor} placeholder='Introduzca Gestor'/>
        <p>Los empleados son gestionados por - {gestor} -  y vienen de jsonplaceholder...</p>

        <Empleados />
    </div>
  )
}
