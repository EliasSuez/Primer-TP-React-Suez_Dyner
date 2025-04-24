
import './App.css'

import Listado from './components/Listado'
import Formulario from './components/Formulario'
function App() {

  return (
    <>
    <h1>Administrador de pacientes</h1>
    <div className='container'>
      <div className='row'>
        <div className='one-half column'>
        <Formulario/>

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
