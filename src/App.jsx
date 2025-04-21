import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Listado from './components/Listado'
import Formulario from './components/Formulario'
function App() {

  return (
    <>
      <Listado></Listado>
      <Formulario></Formulario>
    </>
  )
}

export default App
