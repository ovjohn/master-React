import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <from className="contact" action="mailto:olivaresvjohn@gmail.com"> 
        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Apellidos' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Motivo de contacto' />
        <input type='submit' value="Enviar" />

      </from>
    </div>
  )
}
