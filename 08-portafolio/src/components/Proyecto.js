import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'


export const Proyecto = () => {

  const [proyecto, setProyecto] = useState({});

  const params = useParams();

  useEffect(() =>{
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
    console.log(proyecto[0].id);
    setProyecto(proyecto[0]);
  }, []);

  return (
    <div className='page page-work'>
      <div className='mask'>
          <img src={'/images/'+proyecto.id+'.png'} alt={proyecto.id}/>
      </div>
      <h1 className='heading'>{proyecto.nombre}</h1>
      <h3>{proyecto.categoria}</h3>
      <p>{proyecto.description}</p>
      <a href={'https://'+proyecto.url} target='_blank'>Ir al proyecto</a>     
    </div>
  )
}