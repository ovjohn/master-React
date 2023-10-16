import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Ariculos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'


export const RutaPrincipal = () => {

  return (
         
      <BrowserRouter>
          <h1>Cabecera Principal</h1>
          <hr />
          <nav>
            <ul>
              <li><NavLink to="/inicio">Inicio</NavLink></li>
              <li> <NavLink to="/articulos">Articulos</NavLink></li>
              <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
          </nav>      
          <hr />
          <section className='contenido_principal'>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/articulos' element={<Articulos />}/>
                <Route path='/contacto' element={<Contacto />}/>
                <Route path='*' element={<Error />} />
            </Routes>
          </section>
          
          <footer>
            <hr />
            <h2>Aqui el Pie de Pagina</h2>
          </footer>
      </BrowserRouter>     
    
  )
}
