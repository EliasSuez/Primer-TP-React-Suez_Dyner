import React from 'react'

import Cita from './Cita'

import './Listado.css'
function Listado(){
    


    return(
        <div class="one-half column">
            <h2>Administra tus citas</h2>
            <Cita mascota='Nina' duenio='Martin' fecha='2021-08-05' hora='08:20' sintomas='Le duele la pierna'></Cita>
            <Cita mascota='Sifon' duenio='Flecha' fecha='2023-08-05' hora='09:24' sintomas='Duerme mucho'></Cita>
            <Cita mascota='Floki' duenio='Ari' fecha='2023-08-05' hora='16:15' sintomas='No está comiendo'></Cita>
        </div>
    )
}

export default Listado