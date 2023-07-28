import React, { useEffect, useState } from 'react'

export const ComponenteUseEffect = () => {

    const [usuario, setUsuario] = useState("Michael Jordam");
    const [fecha, setFecha] = useState("02-04-2008")

    const cambiarUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e => {
        setFecha(Date.now());
    }
    
    //Se ejecuta el useEffect solo una vez al iniciar el navegador
    useEffect(() =>{
        console.log('Haz cargado el componente ComponenteUseEffect');
    }, []);

    //Se ejecuta el useEffect solo cuando se cambie el usuario
    useEffect(() =>{
        console.log('Haz cargado el componente ComponenteUseEffect');
    }, [usuario]);

  return (
    <div>
        <p>Aprendiendo el Hooks - useEffect</p>
        <p>El usuario actual es: <strong className='label'>{usuario}</strong></p>
        <p>{fecha}</p>
        <p>
            <input  type='text' 
            onChange={ cambiarUsuario }
            placeholder='Cambiar el Usuario'
            />
            <button onClick={ cambiarFecha }>Cambiar Fecha</button>
        </p>
    </div>
  )
}
