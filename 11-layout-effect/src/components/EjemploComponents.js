import React, { useEffect, useLayoutEffect, useState } from 'react'

export const EjemploComponents = () => {

  const [mostrar, setMostrar] = useState(false);

  useLayoutEffect(()=>{
    console.log("useLayouEffect: desde el componente");
    console.log({mostrar})
    
  }, [mostrar])

    useEffect(() =>{
      console.log("useEffect: desde el componente");
    },[])
   
  return (
    <>
      <div>Ejemplo de los hooks useEffect y useLayoutEffect</div>
      <div id="caja">
        {mostrar &&(
          <>
            <h4>Hola soy el Mensaje</h4>
          </>          
        )}       
      </div>
     
      <button onClick={() => setMostrar(prev => !prev)}>Mostar mensaje</button>
    </>
  )
}
