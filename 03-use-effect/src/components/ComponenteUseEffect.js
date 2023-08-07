import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const ComponenteUseEffect = () => {

    const [usuario, setUsuario] = useState("Michael");
    const [fecha, setFecha] = useState("02-04-2008");
    const [contador, setContador] = useState(0);

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
        setContador( () => contador +1);
        console.log('Haz modificado el usuario:' + contador + 'veces');
    }, [usuario]);

  return (
    <div>
        <p>Aprendiendo el Hooks - useEffect</p>
        <p>El usuario actual es: <strong className={contador >= 10 ? 'label-green' : 'label'}>{usuario}</strong></p>
        <p>{fecha}</p>
        <p>
            <input  type='text' 
            onChange={ cambiarUsuario }
            placeholder='Cambiar el Usuario'
            />
            <button onClick={ cambiarFecha }>Cambiar Fecha</button>
        </p>
        {usuario === 'Pancho' && <AvisoComponent />}
    </div>
  )
}
