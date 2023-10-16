import React, { useEffect } from 'react'

export const AvisoComponent = () => {
    useEffect(()=>{
        alert('Se ha montado el componente AvisoComponent');
        return(() =>{
            alert('Se ha desmontado el componente AvisoComponent')
        });
    }, []);

  return (
    <div>
        <hr />
        <h3>Saludos Pancho. ¿Como estas?</h3>
        <button onClick={ () => alert('Hola Usuario')}>Mostar Alerta</button>
    </div>
  )
}
