import React, { useState } from 'react'

export const Buscador = ({listadoState,setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //Crear estado y actualizar
    setBusqueda(e.target.value);
      
    //Filtrar las coincidencias de las peliculas
    let peliculas_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if(busqueda.length <= 1 || peliculas_encontradas <= 0){
      peliculas_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);      
    }else{
      setNoEncontrado(false);
    }

    
    //Actualizar estado del listado principal con lo que selogro filtar
    setListadoState(peliculas_encontradas);

  }
  
  return (
    <>
        <div className="search">
          <h3 className="title">Buscador: {busqueda}</h3>
          {(noEncontrado === true && busqueda.length > 1) &&(
            <span className='no-encontrado'>No se ha encrontado coincidencias</span>
          )}
          
          <form>
            <input type="text"
                    id="search_field"
                    name="busqueda"
                    autoComplete='off'
                    onChange={buscarPeli}
            />
            <button>Buscar</button>
          </form>
        </div>
    </>
  )
}
