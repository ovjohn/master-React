import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const EjercicioUno = ({fechaActual}) => {
        
    const [año, setAño] = useState(fechaActual);
    
    const proximoAño = (dato) =>{
        setAño(dato + 1);
    }

    const añoAnterior = (dato) => {
        setAño(dato - 1)
    }

    const cambiarManual = e =>{
        let dato = parseInt(e.target.value);

        Number.isInteger(dato)?
            setAño(dato)
            :
            setAño(fechaActual)
    }

  return (
    <div className='ejercicioUno'>
        <h1>EjercicioUno</h1>
        <br />
        <h2>El año actual es: { año }</h2>
        <br />
        <button onClick={ e => proximoAño(año) }>Proximo Año</button>
        &nbsp;
        <button onClick={ e => añoAnterior(año) }>Año Anterior</button>
        &nbsp;
        <input type='text' onChange={ cambiarManual } placeholder='Cambien aquí el año'/>
        <br />
    </div>
  )
}
//Validando la props fechaActual que sea Numero y sea requerida
EjercicioUno.propTypes = {
    fechaActual: PropTypes.number.isRequired
}