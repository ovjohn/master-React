import React from 'react'


export function TercerComponente({nombre, apellido, ficha}){
    
    return(
        <div>
            <hr />
            <h1>Comunicacion entre Componentes</h1>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.altura}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.condicion}</li>
            </ul>
        </div>
    )
}