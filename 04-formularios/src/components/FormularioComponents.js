import React, {useState} from "react";

export function FormularioComponets(){

    const [usuario, setUsuario] = useState({});

    const datosDelFormulario = e => {
        e.preventDefault();

        let datos = e.target;
        
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            biografia: datos.biografia.value
        }
        
        setUsuario(usuario);
    }

    return(
        <>
            <h1>Formulario en React</h1>
            {usuario.biografia && usuario.biografia.length >= 1 &&
                (
                    <div className="info-suario label label-gray">
                        El usuario {usuario.nombre} {usuario.apellido} es {usuario.genero} y su biografia es:
                        <p>{usuario.biografia}</p>
                    </div>
                )
            }
            <form onSubmit={datosDelFormulario}>
                <input type="text" placeholder="Nombres" name="nombre"/>
                <input type="text" placeholder="Apellidos" name="apellido"/>
                <select name="genero">
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea placeholder="Biografia" name="biografia"></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}