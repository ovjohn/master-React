import React, { useState } from 'react'

export const Crear = () => {
  let title = "Añadir pelicula";

  const [pelisState, setPelisState] = useState({
    titulo:'',
    descripcion:''
  });

  const conseguirDatosFrom = e => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let pelis ={
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    setPelisState(pelis);
    console.log(pelisState);
  }




  return (
    <>
        <div className="add">
          <h3 className="title">{title}</h3>

          {pelisState.titulo}
          <form onSubmit={conseguirDatosFrom}>
            <input type="text" placeholder="Titulo" name="titulo"/>
            <textarea placeholder="Descripcion" name="descripcion"></textarea>
            <input type="submit" value="Guardar" />
          </form>
        </div>
    </>
  )
}
