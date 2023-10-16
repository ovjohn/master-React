import React from 'react'

  

export const Editar = ({peli, conseguirPeliculas,setListadoState, setEditar}) => {

  const titulo_componente = "Editar Pelicula";

  const guardarEdicion = (e,id) => {
    e.preventDefault();
    //alert(id);

    //Conseguir el target del evento
    let target = e.target;
    
    //Buscar el iNDICE del objeto de la pelicula a actualizar en el localstorage
    let pelis_almacenadas = conseguirPeliculas();
    let indice = pelis_almacenadas.findIndex(peli => peli.id === id);

    //Crear objeto con el id de ese indice
    let peli_editada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

    //Actualizar elemento con el indice seleccionado
    pelis_almacenadas[indice] = peli_editada;

    //guardar la informacion nuava en el localStorage
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

    //Actualizar estados
    setListadoState(pelis_almacenadas);
    setEditar(0);

    
  }
  
  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e,peli.id) }>
        <input 
          type='text' 
          name='titulo' 
          className='titulo_editado' 
          defaultValue={peli.titulo} 
        />
        <br/><br/>
        <textarea
          name='descripcion'
          className='descripcion_editada'
          defaultValue={peli.descripcion}
        />
        <br/>
        <input type='submit' className='editar' value='Actualizar' />
      </form>
    </div>
  )
}
