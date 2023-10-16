import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (    
        <>
            <h1>Error 404</h1>
            <strong>Esta pagina no exixte</strong>
            <Link to='/inicio'>volver a la pagina principal</Link>
        </>        
  )
}
