import React,  {useEffect, useState} from 'react'

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([])

    const getUsuariosEstaticos = () =>{
        setUsuarios(
            [{
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://reqres.in/img/faces/10-image.jpg"
            }]
        );
    }

    useEffect( () => {
        getUsuariosEstaticos();
    }, []);

  return (
    <div>
        <h1>Lista de Usuarios con AjaxComponent</h1>
        <ol className='usuarios'>
            {usuarios.map( usuario => {
                console.log(usuario);
                return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
            }
            )}
        </ol>
    </div>
  )
}

