import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    const  [ nombre, setNombre] = useState('Omar Duran');

    const cambiarNombre = (e,name) =>{
        setNombre(name);
        console.log(e.target);
    }

  return (
    <div>
        <h3>Componente: Mi primer Estado</h3>
        <strong className='label'>{ nombre }</strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e,'Javivi') }>Cambiar el nombre por Javivi</button>
        &nbsp;
        <input type='text' onChange={ e => cambiarNombre(e,e.target.value) } placeholder='Introduce el nombre' />

    </div>
  )
}
