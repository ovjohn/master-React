import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Ariculos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'


export const RutaPrincipal = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/articulos' element={<Articulos />}/>
            <Route path='/contacto' element={<Contacto />}/>
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}
