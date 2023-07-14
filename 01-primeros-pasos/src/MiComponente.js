import React from "react";

const MiComponente = () =>{

    let usuario = {
        nombre: 'Juan',
        apellidos: 'Perez',
        web: 'juanperez.com'
    }

    return (
        <>
            <hr />
            <h2>Hola este es: " MiComponente" </h2>
            <ul>
                <li>
                    Angular
                </li>
                <li>
                    React
                </li>
                <li>
                    Vue
                </li>
            </ul>
            <h3>Datos del Usuario:</h3>
            <ul>
                <li>
                    El nombre es: <strong>{usuario.nombre}</strong>
                </li>
                <li>
                    Apellido: <strong>{usuario.apellidos}</strong>
                </li>
                <li>
                    WEB: <strong>{usuario.web}</strong>
                </li>
            </ul>
        </>
        );
}

export default MiComponente;