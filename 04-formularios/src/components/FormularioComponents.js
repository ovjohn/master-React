export function FormularioComponets(){
    return(
        <>
            <h1>Formulario en React</h1>
            <form>
                <input type="text" placeholder="Nombres" />
                <input type="text" placeholder="Apellidos" />
                <select>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea placeholder="Biografia"></textarea>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}