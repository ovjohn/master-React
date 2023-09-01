import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarenStorage';

export const Crear = () => {
  let title = "Añadir pelicula";

  const [pelisState, setPelisState] = useState({
    titulo:'',
    descripcion:''
  });

  const conseguirDatosFrom = e => {
    e.preventDefault();

    //Conseguir los datos desde el formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear Objeto de la Pelicula o guardarla
    let peli ={
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    //Guardar een el estado la pelicula
    setPelisState(peli);
    console.log(pelisState);

    //Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
      
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
