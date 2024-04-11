import React, { useState } from 'react'

export const Tareas = () => {

  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(0);

  const guardarTareas = ( e => {    
    e.preventDefault();
    setTareas( tarea => [...tarea,e.target.descripcion.value]);
    console.log(tareas);
  });

  const borrarTarea = id =>{
    //Filtrar las tareas para eliminar la que no se quiere
    let nueva_tarea =  tareas.filter((tarea, indice) => indice !== id);
    console.log(nueva_tarea);

    //SetState, guradar el nuevo listado de tareas
    setTareas(nueva_tarea);
  }

  const sumarContador = e => {
    setContador(contador +1);
  }
    
  return (
    <div className='tareas-container'>
    <h1>Agregar Tareas</h1>
    <form onSubmit={guardarTareas}>
        <input type='text' name='descripcion' placeholder='Describir la tarea' />
        <input type='submit' value='Guardar'/>
    </form>
    <hr/>
    <h3>Contador de Tareas: {contador}</h3>
    <button onClick={sumarContador}>Sumar</button>
    <hr/>
    <h3>Lista de Tareas</h3>
    <ul>
      {
        tareas.map((tarea, indice) => {
        return (
          <li key={indice}>
            {tarea}
            &nbsp;
            <button onClick={() => borrarTarea(indice)}>X</button>
          </li>        
        )
        })  
      }
    </ul>
    </div>
  )
}
