import React,  {useEffect, useState} from 'react'

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");

    //Funcion para pasar usuatios estaticos
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

    //Funcion Ajax con metodo fetch y promesas
    const getUsuariosAjaxPromesas = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data)
                    console.log(usuarios)
                },
                error => {
                    console.log(error)
                }
            )
    }

    //Funcion Ajax con los metodos async y await
    const getUsuarioAjaxAW = () => {
        
            setTimeout( async() =>{ 
                try {           
                    const peticion = await fetch("https://reqres.in/api/users?page=1");
                    const {data} = await peticion.json();
                    setUsuarios(data);
                    setCargando(false);

                } catch(error) {                    
                    setErrores(error);
                    console.log("Hola, aqui el error->"+error.message);                       
                }    
            },3000);                    
    }

    useEffect( () => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPromesas();
        getUsuarioAjaxAW();
    }, []);

    if(errores !== ""){
        return(
            <>
                <h2>Error: No se consigue la informacion</h2>
            </>
        )        
    }else if(cargando === true){        
        return(
            <h2>Cargando la informacion¡¡¡¡¡</h2>
        )
    }else if(cargando === false && errores === "" ){
        return (
            <div>
                <h1>Lista de Usuarios con AjaxComponent</h1>
                <ol className='usuarios'>
                    {usuarios.map( usuario => {
                        console.log(usuario);
                        return (<li key={usuario.id}>
                            <img src={usuario.avatar} alt={usuario.first_name} width='30'/>
                            &nbsp;                            
                            {usuario.first_name} {usuario.last_name}</li>)
                    }
                    )}
                </ol>
            </div>
          )
    }  
}

