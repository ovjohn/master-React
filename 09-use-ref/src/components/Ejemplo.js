import React, { useEffect, useState } from 'react'

export const Ejemplo = () => {

    const [numeroSaludo, setnumeroSaludo] =useState(0);

    useEffect(() => {
        setTimeout(() =>{
            console.log("Mensaje en cola:"+numeroSaludo);
        }, 2000)
    }, [numeroSaludo])

    const enviarSaludo = e => {
        setnumeroSaludo(numeroSaludo + 1);
    }

  return (
    <div>
        <h2>Mensajes enviados: { numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar Mensaje</button>

        <hr/>
    </div>
    
  )
}
