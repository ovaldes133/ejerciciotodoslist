import React, { useState } from 'react';
import '../estilos/tareaFormulario.css';
import {v4 as uuidv4} from 'uuid'


function TareasFormulario(props) { 

    const [input, setinput]= useState ("");

    const manejarcambio= e =>{
        setinput(e.target.value);

    }

    const manejarenvio= e =>{
        e.preventDefault();


        const tareanueva ={
            id: uuidv4(),
            texto:input
        }
         props.onSubmit(tareanueva);
    }


    return (
   <form className="tarea-formulario"
   onSubmit={manejarenvio}>
    <input
    className="tarea-input"
    type="text"
    placeholder="No hay tareas, añadir tareas"
    name="texto"
    onChange={manejarcambio}
    />

    
   </form>


   )
}

export default TareasFormulario;