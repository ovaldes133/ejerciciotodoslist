import React from "react";
import '../estilos/tarea.css';



function Tarea({id, texto , eliminartarea}){
    return (
        <div className="contenedor-tareas">
            <div className="tarea-texto">
                <h2>{texto}</h2>
            </div>
            <div className="icono-eliminar"
            onClick={() => eliminartarea(id)}>
                <i class="fa-solid fa-xmark"></i>
            </div>

            

        </div>
      


    )
}

export default Tarea;