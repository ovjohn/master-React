import React from "react";
import { JuegoReducer } from "../reducers/JuegoReducer";
import { useReducer } from "react";
import { useEffect } from "react";

const init = () => {
    return JSON.parse(localStorage.getItem("juegos"))  || [];
}

export const Misjuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [],init);

    useEffect(() =>{
        localStorage.setItem("juegos",JSON.stringify(juegos))
    },[juegos]);

    
    const getDateForm = e => {
        e.preventDefault();

        let target = e.target;
        let date = {
            id: new Date().getTime(),
            name: target.titulo.value,
            description: target.description.value
        }

        console.log(date); 
        
        const accion = {
            type: "crear",
            payload: date
        }

        dispatch(accion);

        console.log(juegos);
    }
    
    const borrarJuego = id => {
        const action = {
            type: "borrar",
            payload: id
        }
        
        dispatch(action);
    }

  return (
    <div>
        <h1>Numero de juegos: {juegos.length}</h1>
        <ul>
            {juegos.map( (game, i)=> {
                return <li key={i}>
                            {game.name}
                            &nbsp;<button onClick={ e => borrarJuego(game.id)}>X</button>
                        </li>                
            })}
        </ul>
        <h3>Agrgar Nuevos Juegos</h3>
        <form onSubmit={getDateForm}>
            <input type='text' name="titulo" placeholder='Titulo' />
            <textarea name='description' placeholder='Descripcion' />
            <input type='submit' value="Guardar" />
        </form>
    </div>
  )
}
