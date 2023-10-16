 export const GuardarEnStorage = (key, elemento) => {
    //Conseguir los elemento que ya existen en el localstorage
    let elementos = JSON.parse(localStorage.getItem(key));
    
    //Comprobar si el elemento es un Array
    if(Array.isArray(elementos)){
      //Añadir el nuevo elemento
      elementos.push(elemento);
    }else{
      //Crear el nuevo array o elemento
      elementos = [elemento];
    }

    //GUardar en el Local storage
    localStorage.setItem(key, JSON.stringify(elementos));

    //Devolver el elemento o la informacion
    return elemento
    
  }