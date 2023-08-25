
function App() {
  return (
    <div className="layout">
        
    {/*Cabecera*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>MisPeliculas</h1>
    </header>

    {/*Barra navegadora*/}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/*Contenido Principal*/}
    <section className="content">
        <article className="pelis-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">desarrolloweb.es</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>

        <article className="pelis-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">desarrolloweb.es</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>

        <article className="pelis-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">desarrolloweb.es</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>

        <article className="pelis-item">
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">desarrolloweb.es</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
    </section>

    {/*Barra lateral*/}
    <aside className="lateral">
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text"/>
                <button>Buscar</button>
            </form>
        </div>
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <form>
                <input type="text" placeholder="Titulo"/>
                <textarea placeholder="Descripcion"></textarea>
                <input type="submit" value="Guardar" />
            </form>

        </div>

    </aside>

    {/*Pie de PAgina*/}
    <footer className="footer">
        &copy; Máster en JavaScript ES12 y Typescript
    </footer>

</div>
  );
}

export default App;
