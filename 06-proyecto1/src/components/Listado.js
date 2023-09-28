import React, { useEffect } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

  //const [listadoState, setListadoState] = useState([]);

  useEffect(() => {
    console.log("Aqui se esta ejecutado el useEffect exitosamente");
    conseguirPeliculas();
  },[]);

  const conseguirPeliculas = () =>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    
    return peliculas;
  }

  const borrarPeli = (id) => {
    
    //Conseguir las Peliculas
    let pelis_almacenadas = conseguirPeliculas();

    //Filtar las peliculas sin la que se quiere eliminar
    let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    //Actualizar el estado de las peliculas
    setListadoState(nuevo_array_peliculas);

    //Actualizar el localstorage 
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
  }


  return (
    <>
      { listadoState != null ? listadoState.map( pelis => {
        return(
          <article key={pelis.id} className="pelis-item">
            <h3 className="title">{pelis.titulo}</h3>
            <p className="description">{pelis.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete" onClick={() => borrarPeli(pelis.id)} >Borrar</button>
        </article>    
        )        
      })
        : <h2>No existen Peliculas para Mostar</h2>
    }
                
                          
    </>
  )
}
