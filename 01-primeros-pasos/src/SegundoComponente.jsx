import React from 'react'

export const SegundoComponente = () => {

    //let libros = ["El alquimista","Clear Code","Tocar Guitarra"];
    const libros = [];
  return (
    <div className='listados-libros'>
        <hr />
        <h2>Listados de Libros</h2>
        
        {libros.length >= 1 ? 
            (
                <ul>
                    {libros.map((libro,indice) => <li>{libro}</li>)}
                </ul>
            ):
            <p>"No existen Libros"</p>
        }
    </div>
  )
}
