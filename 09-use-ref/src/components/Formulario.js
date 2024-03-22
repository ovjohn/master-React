import React, { useRef } from 'react'

export const Formulario = () => {

  const nombreValue = useRef();
  const apellidoValue = useRef();
  const emailValue = useRef();
  const cajaValue = useRef();

  const mostrar= e =>{
    e.preventDefault();

    console.log(nombreValue.current.value);
    console.log(apellidoValue.current.value);
    console.log(emailValue.current.value);

    //miCaja
    console.log(cajaValue);
    cajaValue.current.classList.add("fondoVerde")
    let {current: caja} = cajaValue //Destructurado el ojecto cajaValue y renombando current por caja
    caja.innerHTML = "Formulario Enviado"
  }
  
  return (
    <div>
        <h1>Fromulario</h1>
        <div ref={cajaValue}>
            <h2 className='micaja'>Micaja</h2>
        </div>

        <form onSubmit={mostrar}>
          <input type='text' placeholder='Nombre' ref={nombreValue}/><br/>
          <input type='text' placeholder='Apellido' ref={apellidoValue}/><br/>
          <input type='email' placeholder='Correo Electronico' ref={emailValue} /><br/>
          <input type='submit' value='enviar' />
        </form>

        <button onClick={()=> nombreValue.current.select()}>Empesar a rrellenar el formulario</button>
    </div>
  
  )
}
