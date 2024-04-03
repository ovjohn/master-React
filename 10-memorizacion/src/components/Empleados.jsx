import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({page}) => {

  const [empleados, setEmpleados] = useState([]);
  
  useEffect(()=>{
    conseguirEmpleados(page);
   },[page]);

  const conseguirEmpleados = async(page) => {
    const url = 'https://reqres.in/api/users?page='+page;
    const peticion = await fetch(url);
    const {data: empleados} = await peticion.json();  //Renombrando data a empleado

    setEmpleados(empleados);  
    
    console.log("Se ejecuto la peticion AJAX")
  } 
  
  console.log('Se ha renderizado la lista empleados');
 
  return (
    <div>
        <h1>Aqui el componente Empleado</h1>
        <h2>Lista de Empleados:</h2>
        <h2>Lapagina que estas observando es: {page}</h2> 
        <ul className='empleados'>
          {empleados.length >= 1 &&
            empleados.map(empleado => {
            return <li key={empleado.id}>{empleado.first_name+" -- "+empleado.last_name}</li>            
          }            
          )}
        </ul>               
    </div>
  )
}
)
