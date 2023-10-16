import React from 'react'

export const CuartoEventos = () => {

    const hasDadoClick = (nombre) =>{
        alert('Me han cliceado '+nombre);
    }

    function hasDadoDobleClick(nombre){
        alert('Conseguiste un dobleClick '+ nombre);
    }

    const hasEntrado = (accion) => {
        console.log(`Has ${accion} en la Caja`);
    }

    const estasAdento = () => {
        console.log('Estas adentro del input Text');
    }
  return (
    <div>
        
        <h1>CuartoEventos</h1>

        {/*Evonto click */}
        <p>
            <button onClick={ e =>  hasDadoClick("Juanta") }>Un click</button>
        </p>

        {/*Evonto Doble click */}
        <p>
            <button onDoubleClick={ e => hasDadoDobleClick("DONKEY")}>Doble click</button>
        </p>

        {/*Evento OnMouse */}
        <div id="caja"
            onMouseEnter={ e => hasEntrado("Entrado")}
            onMouseLeave={e => hasEntrado("Salido")}
        >
            Pasa por encima
        </div>

        {/*Evento Onfocus */}
        <p>
            <input type='text' 
                onFocus={ estasAdento }
                placeholder='Introduce tu nombre'
            />
        </p>       

    </div>
  )
}
