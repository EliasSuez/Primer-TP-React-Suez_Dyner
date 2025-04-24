
import './App.css'
import {useState} from 'react'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
function App() {

  const[citas, setCitas] = useState([])

  const agregarCita = (cita) => {
    setCitas([
      ...citas,
      cita
    ])
  }
  return (
    <>
    <h1>Administrador de pacientes</h1>
    <div className='container'>
      <div className='row'>
        <div className='one-half column'>
        <Formulario crearCita={agregarCita}/>
        
        </div>
        <div className='one-half column'>
        <Listado/>

        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
