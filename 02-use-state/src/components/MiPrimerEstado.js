import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    const  [ nombre, setNombre] = useState('Omar Duran');

    const cambiarNombre = () =>{
        setNombre('Iguin Uzuna');
    }

  return (
    <div>
        <h3>Componente: Mi primer Estado</h3>
        <strong>{ nombre }</strong>
        &nbsp;
        <button onClick={ cambiarNombre }>Cambiar</button>

    </div>
  )
}
