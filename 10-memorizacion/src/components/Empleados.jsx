import React, { useEffect, useState } from 'react'

export const Empleados = () => {

  const [empleados, setEmpleados] = useState([]);

  useEffect(()=>{
    conseguirEmpleados();
   },[]);

  const conseguirEmpleados = async() => {
    const url = 'https://reqres.in/api/users?page=1';
    const peticion = await fetch(url);
    const {data: empleados} = await peticion.json();

    setEmpleados(empleados);     
  } 
  
  console.log('Se ha renderizado la lista empleados');
 
  return (
    <div>
        <h1>Aqui el componente Empleado</h1>
        <h2>Lista de Empleados:</h2>
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
