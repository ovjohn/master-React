//import './App.css';
import React, { useState } from 'react'

const baseDatos = [
  {id:0, nombre:'Carne', categoria:'comida', cantidad: 2 },
  {id:1, nombre:'Vino', categoria:'bebida', cantidad: 23},
  {id:2, nombre:'Patilla', categoria:'comida', cantidad: 4 },
  {id:0, nombre:'Cerveza', categoria:'bebida', cantidad: 7 }
]

const CrudFormulario = ({nuevoInventario, alimento}) => {

  const [formData, setFormData] = useState({
    id:null, 
    nombre:'', 
    categoria:'', 
    cantidad: null 
  })

  const handleSubmint = (e) =>{
    e.preventDefault();
    console.log(formData);
    if(formData.nombre !== '' && formData.cantidad !== null ){
      //formData.id = Math.random() * 100
      formData.id = alimento.length + 1
      nuevoInventario(formData)
      setFormData({
        id:null, 
        nombre:'', 
        categoria:'', 
        cantidad: '', 
      })          
    }else{
      alert('Por favor agregar un item')
    }    
  }

  const handlechange = (e) => {    
    //console.log(e.target);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value      
    })
  }
  
  return (
    <>
      <form onSubmit={handleSubmint}>
        <label htmlFor='nombre'>Nombre:</label>
        <input type='text' id='nombre' name='nombre' onChange={handlechange} value={formData.nombre}/>
        
          <input type="radio" id="categoria1" name="categoria" value="comida" onChange={handlechange}/>
          <label htmlFor="categoria1">comida</label>
          <input type="radio" id="categoria2" name="categoria" value="bebida" onChange={handlechange}/>
          <label htmlFor="categoria2">bebida</label>

          <input type="number" name='cantidad' placeholder="Cantidad" min="1" max="100" onChange={handlechange} value={formData.cantidad} />
        
        <input type='submit' value='Agregar'/>
        <input type='reset' value='Cancelar' />              
      </form>
    </>
  )
}

const AppCrudTable = ({alimento}) => {
  return (
    <>
    <h3>Alimentos actuales</h3>
      <table border='1'>
        <tbody>
        <tr>
          <td>Cantidad</td>
          <td>Nombre</td>
          <td>Tipo</td>
          <td>Accion</td>
        </tr>
        {
          alimento.length === 0 ? <td>No hay datos</td>
          : alimento.map((item, index)=>{
            return (
              <tr key={index}>
                <td>{item.cantidad}</td>
                <td>{item.nombre}</td>
                <td>{item.categoria}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  )
}

const CrudApp = () => {

  const [producto, setProducto] = useState(baseDatos);

  const addInventario = (inventario) => {
    console.log(inventario)
  }

  return (
    <>
      <CrudFormulario nuevoInventario={addInventario} alimento={producto}/>
      <AppCrudTable alimento={producto}/>
    </>    
  )
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Pagina de Alimentos</h1>
        <CrudApp />
        
      </header>
    </div>
  );
}

export default App;
