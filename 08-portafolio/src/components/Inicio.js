import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      
      <h1>Hola, soy <strong>John Olivares</strong> y soy <strong>Desarrollador web</strong>, oferzco mis 
        servicios de programacion Front-end.
      </h1>

      <h2 className='title'>Te ayudo a crear tu sitio o aplicacion Web, tener más visivilidad y relevancia
        en internet. <Link to="/contacto" >Contacta conmigo.</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        
          <ListadoTrabajos limite="2"/>
            
      </section>

    </div>
  )
}
