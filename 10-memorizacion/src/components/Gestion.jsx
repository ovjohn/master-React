import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [gestor, setGestor] = useState("");
    const [pagina, setpagina] =useState(1);
    const gestorinput = useRef();
   
    console.log('La vista se ha renderizado');   

    const asignarGestor = e => {
        setGestor(gestorinput.current.value);
    }

    const mensaje = useCallback(() =>{
      console.log('Hola soy un mensaje desde el componente empleados !!!');
    },[pagina]);
    
  return (
    <div>
        <h1>Nombre del Gestor: {gestor}</h1>
        <h2>Listado de Empleados</h2>
        <input type='text' ref={gestorinput} onChange={asignarGestor} placeholder='Introduzca Gestor'/>
        <p>Los empleados son gestionados por - {gestor} -  y vienen de jsonplaceholder...</p>
        <hr/>
        
        <button onClick={() => setpagina(1)}>Pagina-1</button>
        <button  onClick={() => setpagina(2)}>Pagina-2</button>

        <Empleados 
          page={pagina}
          message={mensaje}
        />
    </div>
  )
}
