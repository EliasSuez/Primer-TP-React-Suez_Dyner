import React, {useState} from 'react'

import './Cita.css'


function Cita(props){

    const [visible, setVisible] = useState(true)

    const eliminar = () => {
        setVisible(false)
    }

    if(!visible) return null 
    return(
        <div className="cita">
            <p>Mascota: <span>{props.mascota}</span></p>
            <p>Dueño: <span>{props.duenio}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p><button className="button u-full-width" onClick={eliminar} >Eliminar×</button>
        </div>
    )
}



export default Cita