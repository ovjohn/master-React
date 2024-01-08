import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    
    const active = ({isActive})=> isActive ? "active" : "";

  return (
    <header className='header'>
        <div className='logo'>
            <span>OV</span>
            <h3>John Olivares</h3>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio' className={active}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/portafolio' className={active}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to='/servicios' className={active}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to='/curriculum' className={active}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto' className={active}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
