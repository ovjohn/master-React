import React from 'react';
import PropTypes from 'prop-types';


export function TercerComponente({nombre, apellido, ficha}){
    
    return(
        <div>
            
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


//Definiendo las tipos de props
TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

//Definiendo los props por defecto
TercerComponente.defaultProps = {
    nombre: "Default",
    apellido: "Apellido por defaultd"
}